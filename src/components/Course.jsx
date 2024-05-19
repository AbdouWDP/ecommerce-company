import React from "react";
import { LuMoveRight } from "react-icons/lu";

function Course() {
  return (
    <section className="course-section w-screen bg-sec flex justify-center items-center">
      <article
        className="w-4/5 flex max-lg:flex-col-reverse max-lg:items-center max-lg:gap-8"
        style={{ height: "85%" }}
      >
        <div className="course-title w-1/2 h-full flex items-end max-lg:justify-center max-lg:w-full">
          <div className="w-3/4 text-5xl font-bold text-white max-lg:w-1/2 max-md:w-3/4 max-sm:w-4/5 max-lg:text-3xl">
            <h1>After Completing Our Courses</h1>
          </div>
        </div>
        <div className="course-card w-1/2 h-full max-lg:w-1/2 max-md:w-3/4 max-sm:w-full">
          <div className="w-3/4 h-full bg-main m-auto max-lg:w-full">
            <div className="course-card-top w-full h-1/2 flex justify-center items-center text-white">
              <div className="w-3/4 h-3/4 text-center font-bold flex flex-col justify-between text-3xl">
                <div className="max-lg:text-2xl">
                  <p>For Teams</p>
                </div>
                <div className="card-price text-8xl max-lg:text-7xl">
                  <h1>350$</h1>
                </div>
                <div className="text-xl max-lg:text-lg">
                  <p>Per Month</p>
                </div>
              </div>
            </div>
            <div className="course-card-bottom w-full h-1/2 bg-white flex justify-center items-center">
              <div className="w-3/4 h-4/5 max-lg:w-full">
                <nav>
                  <ul className="w-full flex flex-col gap-2">
                    <li className="w-20 m-auto">
                      <p>15 Users</p>
                    </li>
                    <li className="w-20 m-auto">
                      <p>Feature 2</p>
                    </li>
                    <li className="w-20 m-auto">
                      <p>Feature 3</p>
                    </li>
                    <li className="w-20 m-auto">
                      <p>Feature 4</p>
                    </li>
                  </ul>
                </nav>
                <div className="upload-free-button mt-4">
                  <button className="w-3/5 h-20 max-lg:h-16 bg-main text-black text-xl flex gap-1 font-bold items-center justify-center rounded-xl m-auto">
                    <p>Upload Free</p>
                    <span>
                      <LuMoveRight />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Course;
