import { useState } from "react";
import styles from "../../assets/styles";
import ProfileSidebar from "../../components/profile-sidebar";
import ProfileContent from "../../components/profile-content";

const ProfilePage = () => {
  const [active, setActive] = useState(1);
  return (
    <div className={`ml-8 mx-auto flex  bg-[#f5f5f5] py-10`}>
      <div className="mt-[20%] md:mt-0">
        <ProfileSidebar active={active} setActive={setActive} />
      </div>
      <ProfileContent active={active} />
    </div>
  );
};

export default ProfilePage;
