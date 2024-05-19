import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
import man from "../assets/man.png";

function Infos() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".infos-image", {
      opacity: 0,
      x: "-100vw",
      duration: 2,
      ease: "circ",
      scrollTrigger: {
        trigger: ".infos-section",
        start: "top center",
        end: "bottom center",
      },
    });
  }, []);

  return (
    <>
      <section className="infos-section w-screen h-screen bg-main flex justify-center items-end">
        <div className="w-4/5 h-4/5 flex max-lg:flex-col-reverse">
          <div className="w-1/2 h-full max-lg:w-full">
            <div className="infos-image w-full h-full">
              <img
                src={man}
                alt=""
                className="w-full h-full object-cover"
                style={{ filter: "grayscale(100%)" }}
              />
            </div>
          </div>
          <div className="w-1/2 h-full text-white font-bold text-6xl max-xl:text-4xl max-lg:w-full">
            <div className="portfolio w-full h-28 flex flex-col justify-between max-lg:justify-around">
              <div>
                <h1>Portfolio</h1>
              </div>
              <div className="w-full h-4 bg-black"></div>
            </div>

            <div className="testimonials w-full h-28 flex flex-col justify-between my-4 max-lg:justify-around">
              <div>
                <h1>Testimonials</h1>
              </div>
              <div className="w-full h-4 bg-black"></div>
            </div>

            <div className="contacts w-full h-28 flex flex-col justify-between max-lg:justify-around">
              <div>
                <h1>Contacts</h1>
              </div>
              <div className="w-full h-4 bg-black"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Infos;
