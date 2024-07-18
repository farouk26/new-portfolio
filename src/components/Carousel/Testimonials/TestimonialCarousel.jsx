//import swiper
import { Swiper, SwiperSlide } from "swiper/react"
//import swiper css and css bundles
import "swiper/css"
import "swiper/css/bundle"
import { Pagination, Autoplay, Navigation } from "swiper/modules"
import TestimonialCard from "@/components/Cards/TestimonialCard"

function TestimonialCarousel() {
  return (
    <section className="w-full min-h-fit">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={false}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <TestimonialCard
            title={"Darine Tag"}
            description={
              "I had known farouk as a friend who's always there to help whether it be technical or diplomatic. His energy was so influential that it brought positive impact on the whole team. An aspiring developer & An amazing team player."
            }
            imgUrl={"/images/darinetag.png"}
            subtitle={"Front-End Developer"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard
            title={"Hadia Djadallah"}
            description={
              "Farouk has the gift of making mundane designs into coded art. With his amazing attention to details, great commitment and fruitful teamwork, I only see a great and exceptional developer. I was honored to have a collaboration in Unify with him."
            }
            imgUrl={"/images/hadia.jpg"}
            subtitle={"Front-End Developer"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard
            title={"Merzouk F. Zohra"}
            description={
              "Had the pleasure of working with farouk on a project, his creativity knows no bounds, he also showed a strong desire to learn new things and improve his skills, he was not shy to ask questions and seek feedback, he is a valuable asset to any team and I recommend him."
            }
            imgUrl={"/images/fatima.jpg"}
            subtitle={"Front-End Developer"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard
            title={"TakiEddine Dilmi"}
            description={
              "Working alongside farouk has been a truly enriching experience, his experience in front-end development and his knack for transforming designs into intuitive interfaces are impressive. I wholeheartedly endorse farouk for any front-end development effort."
            }
            imgUrl={"/images/taki.jpg"}
            subtitle={"Front-End Developer"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard
            title={"Manel Haddoud"}
            description={
              "I had the pleasure of working with farouk on a movie project, his leadership skills were evident as he guided and motivated the team. Farouk was always keen to learn and his enthusiasm inspired us all to improve, he was always willing to help others which makes him a true team player."
            }
            imgUrl={"/images/manel.jpg"}
            subtitle={"Front-End Developer"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard
            title={"Sorour Rahem"}
            description={
              "Our collaboration across three projects was nothing short of extraordinary. Your knack for innovative design and commitment to crafting efficient code brought a unique flair to our work. Wishing you continued success, and I'm excited about the possibility of future collaborations."
            }
            imgUrl={"/images/sorour.jpg"}
            subtitle={"Front-End Developer"}
          />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default TestimonialCarousel
