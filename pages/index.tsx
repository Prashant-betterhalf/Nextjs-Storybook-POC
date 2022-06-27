import type { NextPage } from "next";
import NavBar from "../components/NavBar/NavBar";
import styles from "../styles/Home.module.css";
import MainSection from "../components/LandingPage/MainSection";

const Home: NextPage = () => {
  return (
    <div className="w-screen bg-[#ff9f85]">
      <div
        className="px-0 xl:px-[280px] lg:px-[100px]  md:px-[50px]"
        id="mainSection"
      >
        <NavBar />
        <MainSection />
      </div>
    </div>
  );
};

export default Home;
