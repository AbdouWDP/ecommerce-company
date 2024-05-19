import gsap from "gsap";
import { useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

const ListValue = ({ text, num }) => {
  return (
    <>
      <div className="flex gap-1">
        <span className="font-semibold"> {num}. </span>
        <span> {text} </span>
      </div>
    </>
  );
};

function ConsultingFirm() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".consulting-image", {
      opacity: 0,
      x: "100vw",
      duration: 2,
      ease: "circ",
      scrollTrigger: {
        trigger: ".consulting-firm",
        start: "top center",
        end: "bottom center",
      },
    });
  }, []);

  return (
    <section className="consulting-firm w-screen h-screen bg-main flex justify-center items-end">
      <article className="w-4/5 text-white" style={{ height: "90%" }}>
        <div className="w-3/5 h-1/5 text-5xl font-bold">
          <h1>What Is a Consulting Firm & What Does</h1>
        </div>
        <div className="w-full h-4/5 flex">
          <div className="w-1/2 mt-12" style={{ height: "90%" }}>
            <div className="w-full flex justify-between">
              <div
                className="h-full text-white list-decimal text-xl flex flex-col gap-6"
                style={{ width: "48%" }}
              >
                <ListValue text="Agile" num="01" />
                <ListValue text="Cost Transformation" num="02" />
                <ListValue text="Learning & Development" num="03" />
                <ListValue text="Mergers and Acquisitions" num="04" />
                <ListValue text="People and Organization" num="05" />
                <ListValue text="Private Equity" num="06" />
              </div>
              <div
                className="h-full text-white list-decimal text-xl flex flex-col gap-6"
                style={{ width: "48%" }}
              >
                <ListValue text="Mergers and Acquisitions" num="07" />
                <ListValue text="Private Equity " num="08" />
                <ListValue text="Operations" num="09" />
                <ListValue text="Sales and Marketing" num="10" />
                <ListValue text="Sustainability & Responsibility" num="11" />
                <ListValue text="Transformation" num="12" />
              </div>
            </div>
            <div className="read-more-button mt-14">
              <button className="w-2/5 h-14 bg-white text-sec font-semibold text-xl uppercase tracking-wider">
                <p>Read More</p>
              </button>
            </div>
          </div>
          <div className="consulting-image w-1/2 h-full">
            <img
              src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/30dfc9c5bd165024afc12200/ddd-min.png"
              alt=""
              className="w-full h-full object-contain"
              style={{ filter: "grayscale(100%)" }}
            />
          </div>
        </div>
      </article>
    </section>
  );
}

export default ConsultingFirm;
