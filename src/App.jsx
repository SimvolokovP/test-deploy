import { useEffect, useState } from "react";
import AppRouter from "./components/AppRouter/AppRouter";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import MobileBar from "./components/MobileBar/MobileBar";

function App() {
  const [fakeLoading, setFakeLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFakeLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <main>
        {fakeLoading && <LoadingScreen />}
        <AppRouter />
        <div className="container">
          <MobileBar />
        </div>
      </main>
    </>
  );
}

export default App;
