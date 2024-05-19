import gsap from "gsap";
import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const [open, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(true);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    gsap.from(".hidden-nav", {
      left: "-100vw",
      duration: 0.5,
      ease: "circ.inOut",
    });

    gsap.from(".close-button , .menu", {
      opacity: 0,
      duration: 0.3,
      ease: "sine",
    });
  }, [open]);

  return (
    <>
      <header className="w-screen h-20 bg-white sticky top-0 z-40">
        <div className="burger-menu w-4/5 h-full m-auto flex items-center">
          <button className="text-3xl" onClick={openMenu}>
            <span>
              <FaBars />
            </span>
          </button>
        </div>
      </header>
      {open && (
        <>
          <header
            className="hidden-nav fixed top-0 left-0 w-1/5 h-screen z-50 ease-linear"
            style={{
              backgroundColor: "rgba(0,0,0, 0.95)",
              opacity: open ? 1 : 0,
            }}
          >
            <button
              className="close-button absolute top-6 right-8 text-4xl text-white"
              onClick={closeMenu}
            >
              <span>
                <IoClose />
              </span>
            </button>
            <nav>
              <ol className="menu text-white flex items-center flex-col gap-2 mt-16 text-lg">
                <li className="hover:text-hover">
                  <a href="#">Home</a>
                </li>
                <li className="hover:text-hover">
                  <a href="#">About</a>
                </li>
                <li className="hover:text-hover">
                  <a href="#">Contact</a>
                </li>
              </ol>
            </nav>
          </header>

          <section
            className="overlay w-screen h-screen fixed top-0 left-0 duration-300"
            style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
            onClick={closeMenu}
          ></section>
        </>
      )}
    </>
  );
}

export default Navbar;
