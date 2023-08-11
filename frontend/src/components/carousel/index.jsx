import Hero from "../hero";
const heroData = [
  {
    img: "https://images.unsplash.com/photo-1501420896719-ad7fe0ee297e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y3JvY2tlcnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    title: "Wooden & Glass Crockery",
    subTitle:
      "We know you have a good eye for your utensils of meal! Therefore we have gathered all the major stuff you need in your kitchen.",
    buttonText: "Try Some",
  },
  {
    img: "https://media.istockphoto.com/id/1407112040/photo/3d-rendering-luxury-scandinavian-wood-walk-in-closet-with-wardrobe-and-make-up-table.webp?b=1&s=170667a&w=0&k=20&c=bBKu-f9DnpcAJxVAXG8Ucm4ZxdSdKaJ8bZ63GyxAZf8=",
    title: "Clothes",
    subTitle:
      "We have all the necessary branded Dresses to fill your wardrobe!",
    buttonText: "Let's Buy",
  },
  {
    img: "https://media.istockphoto.com/id/1329491486/photo/yellow-household-appliances-on-yellow-background-set-of-home-technics.webp?b=1&s=170667a&w=0&k=20&c=JANKf4j2ibRNtF5zHogkWNxeciwhwIn4URwnnngvYkc=",
    title: "Electronic Appliances",
    subTitle:
      "We provide the best of the Electronic Appliances from the best of the companies.",
    buttonText: "Check Out some",
  },
  {
    img: "https://media.istockphoto.com/id/1371318211/photo/groceries-shopping-flat-lay-of-fruits-vegetables-greens-bread-and-oil-in-eco-friendly-bags.webp?b=1&s=170667a&w=0&k=20&c=LwOTGwEKL2hSwCgIpWKoYWmFBxqwQCLJMtDVRu4I-ys=",
    title: "Grocery",
    subTitle:
      "We provide you with the best of the foods, fruits and vegetables to make you healthy with no tension of doing grocery!",
    buttonText: "Order Now",
  },
];

const Carousel = () => {
  return (
    <div className="carousel w-full mx-12 h-[520px] ">
      <div id="slide1" className="carousel-item relative w-full ">
        <Hero
          img={heroData[0].img}
          title={heroData[0].title}
          subTitle={heroData[0].subTitle}
          buttonText={heroData[0].buttonText}
        />

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle ">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle ">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <Hero
          img={heroData[1].img}
          title={heroData[1].title}
          subTitle={heroData[1].subTitle}
          buttonText={heroData[1].buttonText}
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <Hero
          img={heroData[2].img}
          title={heroData[2].title}
          subTitle={heroData[2].subTitle}
          buttonText={heroData[2].buttonText}
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <Hero
          img={heroData[3].img}
          title={heroData[3].title}
          subTitle={heroData[3].subTitle}
          buttonText={heroData[3].buttonText}
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
