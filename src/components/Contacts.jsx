import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

function Contacts() {
  return (
    <section className="w-screen h-screen bg-sec flex justify-center items-center text-white">
      <footer className="footer w-4/5 h-4/5 flex justify-between">
        <div className="w-1/2 flex flex-col gap-4">
          <div className="text-5xl font-bold">
            <h1>Сontacts</h1>
          </div>
          <div>
            <p>
              Use our contact form for all information requests or contact us
              directly using the contact information below.{" "}
            </p>
          </div>
          <div>
            <p>Feel free to get in touch with us via email or phone </p>
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-10 items-end">
          <div className="footer-image w-1/2">
            <img
              src="//images01.nicepage.com/a1389d7bc73adea1e1c1fb7e/edaa5e11cbf25912ba08677a/Untitled-1.png"
              alt=""
              className="w-full aspect-square "
            />
          </div>
          <div className="w-full flex justify-between">
            <div className="w-1/2 flex flex-col items-end gap-4">
              <div className="footer-maps-icon w-14 h-14 bg-main rounded-full flex justify-center items-center text-black text-3xl">
                <span>
                  <FaMapMarkerAlt />
                </span>
              </div>
              <div className="text-xl font-semibold">
                <h2>Our Office Location</h2>
              </div>
              <div className="text-end">
                <p>
                  The Interior Design Studio Company
                  <br />
                  The Courtyard, ​Al Quoz 1,​ Colorado, ​ USA
                </p>
              </div>
            </div>
            <div className="w-1/2 flex flex-col items-end gap-4">
              <div className="footer-phone-icon w-14 h-14 bg-main rounded-full flex justify-center items-center text-black text-3xl">
                <span>
                  <FaPhoneAlt />
                </span>
              </div>
              <div className="text-xl font-semibold">
                <h2>Phone (Landline)</h2>
              </div>
              <div>
                <p>
                  + 912 3 567 8987
                  <br />+ 912 5 252 3336
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Contacts;
