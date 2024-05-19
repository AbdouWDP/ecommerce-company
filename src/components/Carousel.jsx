import gsap from "gsap";
import React, { useRef } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

const CarouselCard = ({ name, job, src }) => {
  return (
    <>
      <div className="s-c-i h-full max-lg:w-full">
        <img src={src} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="s-c-b h-full flex justify-center items-center max-lg:w-full">
        <div className="w-4/5 h-1/2 text-white flex gap-8 max-lg:gap-2 flex-col justify-center max-lg:w-full">
          <div className="carousel-card-title text-4xl font-bold max-lg:text-3xl">
            <h1>
              {name}, <span className="italic font-normal"> {job} </span>
            </h1>
          </div>
          <div>
            <p>
              There are two types of people who will tell you that you cannot
              make a difference in this world: those who are afraid to try and
              those who are afraid you will succeed.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const PrevButton = ({ nextCarousel }) => {
  return (
    <>
      <div className="carousel-prev-button absolute top-1/2 left-0 max-sm:hidden">
        <button className="w-16 aspect-square rounded-full bg-sec text-white text-5xl flex justify-center items-center">
          <span>
            <AiOutlineLeft />
          </span>
        </button>
      </div>
    </>
  );
};

const NextButton = ({ nextCarousel }) => {
  return (
    <div className="carousel-next-button absolute top-1/2 right-0 max-sm:hidden">
      <button className="w-16 aspect-square rounded-full bg-sec text-white text-5xl flex justify-center items-center">
        <span>
          <AiOutlineRight />
        </span>
      </button>
    </div>
  );
};

function Carousel() {
  return (
    <section
      className="carousel w-screen bg-main flex justify-center items-center"
      style={{ height: "70vh" }}
    >
      <article className="w-3/4 h-4/5 flex flex-col items-center justify-center relative">
        <PrevButton />
        <div className="carousel w-4/5 h-4/5 flex overflow-hidden relative max-lg:w-full">
          <div className="single-carousel w-full h-full flex shrink-0 max-lg:flex-col max-lg:gap-4">
            <CarouselCard
              name="John Jackson"
              job="developer"
              src="//images02.nicepage.com/a1389d7bc73adea1e1c1fb7e/1f969468ea205425b70c5c31/pexels-photo-555790.jpg?version="
            />
          </div>
          <div className="single-carousel w-full h-full flex shrink-0">
            <CarouselCard
              name="Linda Larson"
              job="designer"
              src="//images02.nicepage.com/a1389d7bc73adea1e1c1fb7e/321a602f753f56b988c51b1d/grayscale-photography-of-woman-wearing-coat-and-fedora-hat-2947337.jpg?version="
            />
          </div>
          <div className="carousel-markers absolute left-1/2 flex gap-1">
            <div className="w-8 h-1 bg-black"></div>
            <div className="w-8 h-1 bg-black"></div>
          </div>
        </div>

        <NextButton />
      </article>
    </section>
  );
}

export default Carousel;
