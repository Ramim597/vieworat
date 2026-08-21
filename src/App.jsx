import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import YouTubeMoneyCalculator from "./pages/YouTubeMoneyCalculator";
import PricingCard from "./pages/PricingCard";
import Test from "./pages/Test";
import Footer from "./components/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-[#f8f8f8]">
      <Navbar />
      {/* <SmarterSection /> */}

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="youtube-money-calculator"
          element={<YouTubeMoneyCalculator />}
        />
        <Route path="PricingCard" element={<PricingCard />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />

        {/* for practice  */}
        <Route path="test" element={<Test />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
