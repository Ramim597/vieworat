import { useState } from "react";
import ContentCategory from "../components/ContentCategory";
import PrimaryButton from "../components/PrimaryButton";
// import { countryData } from "../data/rpmData/countryData";
import { categoryMultipliers } from "../data/rpmData/categoryData";
// import { categoryData } from "../data/rpmData/categoryData";

function Test() {
  const [views, setViews] = useState("100000");
  const [earnings, setEarnings] = useState(0);
  const [contentCategory, setContentCategory] = useState("all");

  const baseRPM = 7.50; // country rpm used as base RPM
  const categoryMultiplier = categoryMultipliers[contentCategory];
  console.log(categoryMultiplier);

  const finalRPM = baseRPM * categoryMultiplier;

  function calcEarnings() {
    const earnings = (finalRPM * Number(views)) / 1000;
    setEarnings(earnings);
  }

  return (
    <div className="mt-26 mb-25 text-center space-y-2.5">
      <ContentCategory
        onChange={(option) => {
          setContentCategory(option.value);
        }}
      />
      <input
        value={views}
        onChange={(e) => {
          setViews(e.target.value);
        }}
        type="text"
        className="border border-red-300 text-white"
      />
      <p> total views : {views} </p>

      <PrimaryButton onClick={calcEarnings}>Calculate</PrimaryButton>
      <h1 className="text-3xl"> estimate earing: $ {earnings.toFixed(2)} </h1>
    </div>
  );
}

export default Test;
