import { Carousel } from "react-responsive-carousel"
import { carouselData } from "../lib/constants"

export default function Hero({ data }) {
  return (
    <section
      className="carousel__container"
      // style={{
      //   backgroundImage:
      //     "url(https://marketplace.canva.com/XaqE0/MAE7x9XaqE0/1/s2/canva-business-finance-concept.-MAE7x9XaqE0.jpg)",
      // }}
    >
    <Carousel
    dynamicHeight={true}
    showArrows={false}
    showIndicators={false}
    showThumbs={false}
    autoPlay={true}
    centerMode={true}
    centerSlidePercentage={110}
    infiniteLoop={true}
    showStatus={false}
      className="carousel"
    >
      {/* <div
        className="absolute top-0 left-0 h-full w-full"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      ></div> */}
      {carouselData.map((item,index) => (
        // <div className="carousel__box" key={index}>
          <div className="w-screen carousel__images" key={index}>
            <img src={item.image} alt="" className="" />
            <div className="hero__header">
            <h1 className="h1 mb-2 pt-3 slogan" data-aos="fade-up">
              {item.slogan}
              
            </h1>
            <p
              className="text-sm mb-2 tagline w-100"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {item.tagLine}
            </p>
          </div>
          </div>
          
      
        // </div>
      ))}
    </Carousel>

   </section>
  )
}