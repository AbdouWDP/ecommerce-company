import React, { useEffect } from "react";

const Number = ({ text = "" }) => {
  return (
    <>
      <div className="number w-2/5 h-1/2 max-lg:w-full">
        <div className="text-8xl font-bold max-lg:text-7xl">
          <h1>{text}</h1>
        </div>
        <div className="text-lg font-semibold text-white tracking-wide">
          <p>Lorem, ipsum.</p>
        </div>
      </div>
    </>
  );
};

function HeroSection() {
  return (
    <>
      <section className="hero-section w-screen h-screen flex justify-center items-center">
        <div className="w-4/5 h-4/5">
          <div className="top-hs w-full h-1/2">
            <div className="text-main text-6xl w-3/5 font-bold max-lg:text-4xl max-lg:w-4/5">
              <h1>Skills and experience that shape eCommerce</h1>
            </div>
            <div className="w-1/2 text-text mt-6 max-lg:w-4/5">
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum. ​Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div className="bottom-hs w-full h-1/2 flex max-lg:mt-8 max-md:flex-col">
            <div className="w-2/5 h-full text-white max-lg:w-full">
              <div className="text-3xl">
                <h3>
                  We've helped businesses increase their revenue on average by
                  90% in their first year with us!
                </h3>
              </div>
              <div className="font-semibold mt-6">
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <div className="w-3/5 h-full flex justify-center items-center text-main">
              <div className="w-11/12 h-full flex flex-wrap max-xl:flex-col gap-4 max-xl:gap-10 max-lg:mt-6">
                <Number text="5K" />
                <Number text="60%" />
                <Number text="100" />
                <Number text="1230" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
