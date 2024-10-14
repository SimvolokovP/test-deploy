import { useState, useEffect } from "react";
import FarmingBar from "../../components/FarmingBar/FarmingBar";
import MainButton from "../../components/MainButton/MainButton";
import MiniGamesMessage from "../../components/MiniGamesMessage/MiniGamesMessage";
import ScoreBlock from "../../components/ScoreBlock/ScoreBlock";
import Stats from "../../components/Stats/Stats";
import "./HomePage.css";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";

const HomePage = () => {
  const [isFarm, setIsFarm] = useState(false);

  return (
    <div className="page home-page">
      <div className="container">
        <Stats />
        <div className="flex">
          <MainButton />
        </div>
        <ScoreBlock />
        <MiniGamesMessage />
        <FarmingBar isFarm={isFarm} setIsFarm={setIsFarm} />
      </div>
    </div>
  );
};

export default HomePage;
