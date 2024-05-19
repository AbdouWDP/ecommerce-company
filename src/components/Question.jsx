import React from "react";

function Question() {
  return (
    <section
      className="question w-screen flex justify-center items-center"
      style={{ height: "60vh" }}
    >
      <div className="w-4/5 h-3/5 text-white">
        <div className="w-3/4 text-5xl font-bold">
          <p>
            <span>
              Still Have Some Questions Left? <br /> Call us Tel:
            </span>{" "}
            <span className="text-main">+1 888 525 32 32</span>
          </p>
        </div>
        <div className="my-10">
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="free-call-now-button">
          <button className="w-1/4 h-20 bg-white uppercase text-sec font-semibold text-xl">
            <p>Free Call Now</p>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Question;
