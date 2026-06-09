import Link from "next/link";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="bordered-div w-full h-full flex justify-center items-center">
        <div className="bordered-inner-div w-full h-full flex flex-col gap-4 justify-center items-center">
          <div className="w-1/2 flex flex-col gap-6 text-center">
            <h1 className="hero-h1 w-1/2 self-center">Where Every Moment Shines</h1>
            <p className="hero-p">
              Discover a sanctuary of heritage and timeless sophistication,
              where every gala is an intimate masterpiece crafted with
              meticulous precision.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="#" className="hero-btn-focus">
                Reserve Your Date
              </Link>
              <Link href="#" className="hero-btn">
                Explore the Hall
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
