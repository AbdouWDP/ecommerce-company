import "./App.css";
import AboutUs from "./components/AboutUs";
import Carousel from "./components/Carousel";
import ConsultingFirm from "./components/ConsultingFirm";
import Contacts from "./components/Contacts";
import Course from "./components/Course";
import HeroSection from "./components/HeroSection";
import Infos from "./components/Infos";
import MeetTheTeam from "./components/MeetTheTeam";
import Navbar from "./components/Navbar";
import Question from "./components/Question";
import Solution from "./components/Solution";

function App() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <HeroSection />
        <Infos />
        <Solution />
        <ConsultingFirm />
        <Question />
        <MeetTheTeam />
        <AboutUs />
        <Course />
        <Carousel />
        <Contacts />
      </main>
    </>
  );
}

export default App;
