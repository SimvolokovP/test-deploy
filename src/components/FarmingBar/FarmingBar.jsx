import { useState, useEffect } from "react";
import coin from "../../assets/coin.png";
import "./FarmingBar.css";

const FarmingBar = ({ isFarm, setIsFarm }) => {
  const [farmScore, setFarmScore] = useState(0);

  useEffect(() => {
    let interval;

    if (isFarm) {
      interval = setInterval(() => {
        setFarmScore((prevScore) => {
          if (prevScore < 100) {
            return prevScore + 1;
          } else {
            clearInterval(interval);
            return prevScore;
          }
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isFarm]);

  return (
    <div className="farming-bar" onClick={() => setIsFarm(true)}>
      {!isFarm ? (
        <div>Start Farm</div>
      ) : (
        <>
          <div
            style={{
              width: `${farmScore}%`,
              maxWidth: "100%",
            }}
            className="farming-bar__progress"
          ></div>
          <div className="farming-bar__inner">
            <div>Farming</div>
            <div>
              <img src={coin} alt="coin" />
              {farmScore}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FarmingBar;
