import React from "react";
import { LuMoveRight } from "react-icons/lu";

function Course() {
  return (
    <section
      className="course-section w-screen bg-sec flex justify-center items-center"
      style={{ height: "80vh" }}
    >
      <article className="w-4/5 flex" style={{ height: "85%" }}>
        <div className="course-title w-1/2 h-full flex items-end">
          <div className="w-3/4 text-5xl font-bold text-white">
            <h1>After Completing Our Courses</h1>
          </div>
        </div>
        <div className="course-card w-1/2 h-full">
          <div className="w-3/4 h-full bg-main m-auto">
            <div className="course-card-top w-full h-1/2 flex justify-center items-center text-white">
              <div className="w-3/4 h-3/4 text-center font-bold flex flex-col justify-between text-3xl">
                <div>
                  <p>For Teams</p>
                </div>
                <div className="card-price text-8xl">
                  <h1>350$</h1>
                </div>
                <div className="text-xl">
                  <p>Per Month</p>
                </div>
              </div>
            </div>
            <div className="course-card-bottom w-full h-1/2 bg-white flex justify-center items-center">
              <div className="w-3/4 h-4/5">
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
                  <button className="w-3/5 h-20 bg-main text-black text-xl flex gap-1 font-bold items-center justify-center rounded-xl m-auto">
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
