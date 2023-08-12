/* eslint-disable react/prop-types */
const Hero = ({ img, title, subTitle, buttonText }) => {
  return (
    <div className="hero w-full">
      <div className=" w-full ">
        <img
          src={img}
          className="w-full h-[420px] sm:h-[420px] md:h-[460px] lg:h-[520px]"
        />
      </div>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-2 md:mb-5 text-2xl sm:text-2xl md:text-3xl lg:text-5xl font-bold">
            {title}
          </h1>
          <p className="mb-2 md:mb-5 text-sm sm:text-lg md:text-xl lg:text-2xl mx-12 md:mx-6">
            {subTitle}
          </p>
          <button className="btn btn-primary">{buttonText}</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
