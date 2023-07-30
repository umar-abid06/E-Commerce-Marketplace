const UserModel = require("../../../model/auth/User");
const path = require("path");
const {
  getExistedUser,
  createNewUser,
  getExistedEmail,
  deleteVerificationEmail,
  deleteUser,
  updateUserVerificationStatus,
} = require("../../../model/auth/register-model");
const {
  sendVerificationEmail,
} = require("../../../services/verificationEmail-service");
const bcrypt = require("bcrypt");

async function httpGetAllUsers(req, res) {
  const { name, email, password } = req.body;

  const existedUser = await getExistedUser(email);
  if (existedUser) {
    return res
      .status(401)
      .json({ message: "Account Already Exists With This Email" });
  }
  const newUser = await createNewUser(name, email, password);
  const emailResponse = await sendVerificationEmail(newUser._id, newUser.email);
  return res.status(200).json({
    message: emailResponse.message,
    data: newUser,
    payload: emailResponse.payload,
  });
}

async function httpVerifyUser(req, res) {
  let { userId, uniqueString } = req.params;

  const emailExist = await getExistedEmail(userId);

  if (!emailExist) {
    let message =
      "Account record doesn't exist or has been verified already. Please Sign Up or Log In  ";
    return res.redirect(`user/verified/error=true&message=${message}`);
  }

  const { expiresAt, uniqueString: hashedString } = emailExist;
  if (expiresAt < Date.now()) {
    // It means the record has expired and no longer active. Therefore we delete it.

    const deletedVerificationRecord = await deleteVerificationEmail(userId);
    if (deletedVerificationRecord.deletedCount === 1) {
      const user = await deleteUser({ _id: userId });
      if (user.deletedCount === 1) {
        let message = "Link has expired. Please sign up again";
        return res.redirect(`user/verified/error=true&message=${message}`);
      } else {
        let message = "Clearing user with expired unique string faild";
        return res.redirect(`user/verified/error=true&message=${message}`);
      }
    } else {
      let message =
        "An Error Occured while clearing expired user verification record";
      return res.redirect(`user/verified/error=true&message=${message}`);
    }
  } else {
    //valid record exist so we validate the user
    // first compare the hashed unique string

    const compared = bcrypt.compare(uniqueString, hashedString);
    if (compared) {
      const verifiedUser = await updateUserVerificationStatus(userId);

      if (verifiedUser.modifiedCount === 1) {
        const deletedEmailData = await deleteVerificationEmail(userId);

        if (deletedEmailData.acknowledged === true) {
          res.sendFile(path.join(__dirname, "../../../view/verification.html"));
        }
      }
    } else {
      let message =
        "Invalid Verification Details Passed. Please Check your Inbox.";
      return res.redirect(`user/verified/error=true&message=${message}`);
    }
  }
}

module.exports = {
  httpGetAllUsers,
  httpVerifyUser,
};
