/* eslint-disable react/prop-types */
const Hero = ({ img, title, subTitle, buttonText }) => {
  return (
    <div className="hero min-h-screen w-full">
      <div className=" w-full h-screen">
        <img src={img} className="w-full h-full" />
      </div>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{title}</h1>
          <p className="mb-5 text-2xl font-Poppins">{subTitle}</p>
          <button className="btn btn-primary">{buttonText}</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
