import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const TeamCard = ({ src, name, job }) => {
  return (
    <>
      <div
        className="team-card bg-main flex justify-center items-center"
        style={{ width: "30%", aspectRatio: 1 / 1.5 }}
      >
        <div
          className="flex flex-col gap-4 text-white"
          style={{ width: "85%", height: "90%" }}
        >
          <div className="team-card-image w-4/5 aspect-square">
            <img src={src} alt="" className="w-full h-full rounded-full" />
          </div>
          <div className="text-xl font-bold uppercase">
            <h2> {name} </h2>
          </div>
          <div className="text-lg font-semibold">
            <p> {job} </p>
          </div>
          <div>
            <p>
              Glavi amet ritnisl libero molestie ante ut fringilla purus eros
              quis glavrid from dolor amet iquam lorem bibendum
            </p>
          </div>
          <div className="social-media flex gap-4 text-2xl text-black">
            <div className="facebook cursor-pointer">
              <span>
                <FaFacebookF />
              </span>
            </div>
            <div className="twitter cursor-pointer">
              <span>
                <FaTwitter />
              </span>
            </div>
            <div className="instagram cursor-pointer">
              <span>
                <FaInstagram />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function MeetTheTeam() {
  return (
    <section className="w-screen h-screen flex justify-center items-center">
      <div className="w-4/5" style={{ height: "90%" }}>
        <div className="text-main w-3/4 text-5xl font-bold">
          <h1>Meet The Team</h1>
        </div>
        <div className="team-cards w-full flex gap-6 my-20">
          <TeamCard
            src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/23f2b6ec8f435911852884f1/2.jpg"
            name="Mary Brown"
            job="creative leader"
          />
          <TeamCard
            src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/dee2a7ea9eea577cab16110a/fff.jpg"
            name="Ann Richmond"
            job="creative leader"
          />
        </div>
      </div>
    </section>
  );
}

export default MeetTheTeam;
