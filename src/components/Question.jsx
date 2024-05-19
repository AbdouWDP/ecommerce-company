import React from "react";

function Question() {
  return (
    <section
      className="question w-screen flex justify-center items-center"
      style={{ height: "60vh" }}
    >
      <div className="w-4/5 h-3/5 text-white">
        <div className="w-3/4 text-5xl font-bold max-lg:text-4xl max-xl:w-full">
          <p>
            <span>
              Still Have Some Questions Left? <br /> Call us Tel:
            </span>{" "}
            <span className="text-main">+1 888 525 32 32</span>
          </p>
        </div>
        <div className="my-10 max-lg:mt-4 max-lg:mb-2">
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="free-call-now-button">
          <button className="w-1/4 max-lg:w-full h-16 bg-white uppercase text-sec font-semibold text-lg tracking-wider">
            <p>Free Call Now</p>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Question;
