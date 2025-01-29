"use client"; // Mark the file as a client component

import { useState } from "react";
import SettingsForm from "./components/SettingsForm";

const Home: React.FC = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className="flex flex-col bg-slate-800 m-1 rounded-xl h-screen">
      <div className="flex flex-row bg-[#33415580] rounded-lg w-[100% -8px] m-1">
        <div
          className={`rounded-md w-[50%] text-center my-1 ml-1 cursor-pointer text-sm p-1 ${tabIndex === 0 ? "bg-slate-900 text-white" : "bg-[#33415580] text-slate-300"}`}
          onClick={() => setTabIndex(0)}
        >
          Trading Settings
        </div>
        <div
          className={`rounded-md w-[50%] text-center my-1 mr-1 cursor-pointer text-sm p-[2px] ${tabIndex === 1 ? "bg-slate-900 text-white" : "bg-[#33415580] text-slate-300"}`}
          onClick={() => setTabIndex(1)}
        >
          Table Configuration
        </div>
      </div>
      {tabIndex === 0 ? <SettingsForm /> : <div></div>}
    </div>
  );
};

export default Home;
