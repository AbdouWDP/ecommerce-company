import gsap from "gsap";
import { useEffect } from "react";
import { GiSmartphone } from "react-icons/gi";
import { PiGearLight } from "react-icons/pi";
import ScrollTrigger from "gsap/ScrollTrigger";

const LeftSolution = ({ icon }) => {
  return (
    <>
      <div className="left-solution text-white flex flex-col items-end text-end">
        <div className="icon w-20 aspect-square bg-main text-5xl rounded-lg flex justify-center items-center">
          <span>{icon}</span>
        </div>
        <div className="mt-2 text-md">
          <p>
            Comfort produce husband boy her had hearing. Law others theirs
            passed but wishes. You day real less till dear read. Considered use
            dispatched melancholy sympathize discretion led.
          </p>
        </div>
      </div>
    </>
  );
};

const RightSolution = ({ icon }) => {
  return (
    <>
      <div className="right-solution text-white flex flex-col">
        <div className="icon w-20 aspect-square bg-main text-5xl rounded-lg flex justify-center items-center">
          <span>{icon}</span>
        </div>
        <div className="mt-2 text-md">
          <p>
            Comfort produce husband boy her had hearing. Law others theirs
            passed but wishes. You day real less till dear read. Considered use
            dispatched melancholy sympathize discretion led.
          </p>
        </div>
      </div>
    </>
  );
};

const ImgGallery = ({ src }) => {
  return (
    <div className="image max-lg:w-full  overflow-hidden cursor-pointer">
      <img
        src={src}
        alt=""
        className="w-full h-full  object-cover hover:scale-110 duration-200 ease-linear"
      />
    </div>
  );
};

function Solution() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const st = {
      trigger: ".solutions-section",
      start: "top center",
      end: "bottom center",
    };

    gsap.from(".left-solution", {
      x: "-100vw",
      opacity: 0,
      duration: 1.5,
      ease: "circ",
      scrollTrigger: st,
    });
    gsap.from(".right-solution", {
      x: "100vw",
      opacity: 0,
      duration: 1.5,
      ease: "circ",
      scrollTrigger: st,
    });
  }, []);

  return (
    <>
      <section className="solutions-section w-screen h-fit bg-sec flex justify-center items-center">
        <article className="w-4/5 py-4" style={{ height: "95%" }}>
          <div className="w-full">
            <div className="w-1/2 text-main text-5xl font-bold max-lg:text-3xl max-lg:w-full max-xl:w-4/5">
              <h1>IT Solution Strategy Development For Your Business</h1>
            </div>
            <div className="w-full my-20 max-lg:mt-10 flex gap-8 max-lg:flex-col">
              <div className="w-1/2  flex flex-col gap-12 max-lg:w-full">
                <LeftSolution icon={<GiSmartphone />} />
                <LeftSolution icon={<PiGearLight />} />
              </div>
              <div className="w-1/2 flex flex-col gap-12 mt-28 max-lg:w-full max-lg:mt-6">
                <RightSolution icon={<PiGearLight />} />
                <RightSolution icon={<GiSmartphone />} />
              </div>
            </div>
          </div>
          <div className="images-gallery w-3/4 flex flex-wrap gap-4 max-lg:w-full max-lg:flex-col">
            <ImgGallery src="//images01.nicepage.com/a1389d7bc73adea1e1c1fb7e/da139c03afeb56eb9f31d348/1220.jpg" />
            <ImgGallery src="//images01.nicepage.com/a1389d7bc73adea1e1c1fb7e/ea9157aa984752e49160303a/pexels-alexander-isreb-1797418.jpg" />
            <ImgGallery src="https://images.pexels.com/photos/1122409/pexels-photo-1122409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
            <ImgGallery src="//images01.nicepage.com/a1389d7bc73adea1e1c1fb7e/addc05149516556bbd091e47/3730262_73938.jpg" />
          </div>
          <div className="w-3/4 text-white py-4 max-lg:w-full">
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </article>
      </section>
    </>
  );
}

export default Solution;
