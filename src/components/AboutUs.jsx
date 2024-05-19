import React from "react";

function AboutUs() {
  return (
    <section
      className="about-us w-screen bg-main flex justify-center items-center"
      style={{ height: "70vh" }}
    >
      <div className="w-4/5 text-white" style={{ height: "90%" }}>
        <div className="">
          <p>Virtual About Us</p>
        </div>
        <div className="text-5xl font-bold my-6">
          <h1>Keeping a clean and order record book </h1>
        </div>
        <article className="w-full h-3/5 mt-14 flex">
          <div className="h-full" style={{ width: "70%" }}>
            <div className="ml-4 about-count text-8xl font-extrabold">
              <p>+95 652</p>
            </div>
            <div className="ml-4 mt-8">
              <p>
                Objectively innovate empowered manufactured products whereas
                parallel platforms. Holisticly predominate extensible testing
                procedures for reliable supply chains. Dramatically engage
                top-line web services vis-a-vis cutting-edge deliverables.
              </p>
            </div>
          </div>
          <div className="h-full" style={{ width: "30%" }}>
            <div className="text-4xl w-4/5">
              <h1>Stop Wasting Hours And Start Assigning Tasks</h1>
            </div>
            <div className="mt-4">
              <p>
                Podcasting operational change management inside of workflows to
                establish a framework. Taking seamless key performance
                indicators offline to maximise the long tail. Keeping your eye
                on the ball while performing a deep dive on the start-up
                mentality to derive convergence on cross-platform integration.
              </p>
            </div>
          </div>
        </article>
        <div className="w-3/5 h-4 bg-black"></div>
      </div>
    </section>
  );
}

export default AboutUs;
