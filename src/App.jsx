import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import YouTubeMoneyCalculator from "./pages/YouTubeMoneyCalculator";

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-[#f8f8f8]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="youtube-money-calculator"
          element={<YouTubeMoneyCalculator />}
        ></Route>
      </Routes>
    </main>
  );
}

export default App;
