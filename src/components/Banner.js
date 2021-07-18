import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { AiOutlineRight } from "react-icons/ai";
import "./Banner.css";
function Banner() {
  return (
    // className=" absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20"
    <div class="outer">
      <div class="inner" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        interval={5000}
      >
        <div class="slider-container">
          <div class="content">
            <h1>Surface Pro 7</h1>
            <p>Ultra-light and versatile</p>
            <button>
              <span>Shop Now</span>
              <AiOutlineRight color="white" size="1rem" />
            </button>
          </div>
          <div class="image">
            <img
              loading="lazy"
              src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3NR20?ver=7bd2&q=0&m=8&h=431&w=767&b=%23FFFFFFFF&l=f&x=849&y=291&s=1165&d=655&aim=true"
              alt=""
            />
          </div>
        </div>

        <div class="slider-container1">
          <div class="content">
            <h1>New Surface Laptop 4</h1>
            <p>
              Do it all with a perfect balance with sleek, ultra-thin design,
              multitasking speed and improved performance{" "}
            </p>
            <button>
              <span>Shop Now</span>
              <AiOutlineRight color="white" size="1rem" />
            </button>
          </div>
          <div class="image">
            <img
              loading="lazy"
              src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWAn3f?ver=86c9&q=0&m=8&h=431&w=767&b=%23FFFFFFFF&l=f&x=1110&y=310&s=1890&d=1062&aim=true"
              alt=""
            />
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
