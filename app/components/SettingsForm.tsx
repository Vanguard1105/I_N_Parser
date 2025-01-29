import { useState } from "react";
import Dropdown from "./Dropdown";
import ParameterInput from "./ParameterInput";

const SettingsForm: React.FC = () => {
  const [settings, setSettings] = useState({
    buy_percentage: "",
    max_buy: "",
    min_buy: "",
    total_invest_sol: "",
    each_token_buy_times: "",
    trader_tx_max_limit: "",
    max_marketcap: "",
    min_marketcap: "",
    buy_slippage: "",
    auto_retry_times: "",
    sell_slippage: "",
    tip: "",
    buy_gas_fee: "",
    sell_gas_fee: "",
    minWR: "30",
    maxWR: "",
    minROI: "40",
    maxROI: "",
    minMedianROI: "30",
    maxMedianROI: "",
    minTrades: "1",
    maxTrades: "",
  });

  const [selectedOption, setSelectedOption] = useState("option1");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSettings((prevSettings) => ({
      ...prevSettings,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col bg-slate-900 mt-4 w-[100% - 8px] h-[100%] mx-1 px-2">
      <div className="flex flex-row justify-between p-2 w-full items-center">
        <div className="text-white">Setting Menu</div>
        <div className="flex flex-row gap-2 py-5">
          <div className="flex flex-row text-green-400 items-center hover:text-green-500 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-circle-plus"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M8 12h8"></path>
              <path d="M12 8v8"></path>
            </svg>
            <span className="px-1 text-sm">Add Preset</span>
          </div>
          <div className="flex flex-row text-blue-400 items-center hover:text-blue-500 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-copy"
            >
              <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2z"></path>
            </svg>
            <span className="px-1 text-sm">Duplicate</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between px-2">
        <select
          id="options"
          className="flex h-9 w-full items-center whitespace-nowrap rounded-md border px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 bg-slate-800 border-slate-700 text-white"
          value={selectedOption}
          onChange={handleChange}
        >
          <option value="6793b79af4b7571a5e546eec" className="bg-green-500">
            vanguard_1
          </option>
        </select>
      </div>
      <div className="px-2">
        <Dropdown title="PARAMETERS">
          <div className="grid grid-cols-2 gap-4 text-slate-100">
            <ParameterInput
              label="Min WR"
              name="minWR"
              value={settings.minWR}
              onChange={handleInputChange}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chart-bar h-4 w-4 text-red-500"
                >
                  <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                  <path d="M7 16h8"></path>
                  <path d="M7 11h12"></path>
                  <path d="M7 6h3"></path>
                </svg>
              }
            />
            <ParameterInput
              label="Max WR"
              name="maxWR"
              value={settings.maxWR}
              onChange={handleInputChange}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chart-bar h-4 w-4 text-red-500"
                >
                  <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                  <path d="M7 16h8"></path>
                  <path d="M7 11h12"></path>
                  <path d="M7 6h3"></path>
                </svg>
              }
            />
            <ParameterInput
              label="Min ROI"
              name="minROI"
              value={settings.minROI}
              onChange={handleInputChange}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-trending-up h-4 w-4 text-purple-500"
                >
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                  <polyline points="16 7 22 7 22 13"></polyline>
                </svg>
              }
            />
            <ParameterInput
              label="Max ROI"
              name="maxROI"
              value={settings.maxROI}
              onChange={handleInputChange}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-trending-up h-4 w-4 text-purple-500"
                >
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                  <polyline points="16 7 22 7 22 13"></polyline>
                </svg>
              }
            />
            <ParameterInput
              label="Min Median ROI"
              name="minMedianROI"
              value={settings.minMedianROI}
              onChange={handleInputChange}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-trending-up h-4 w-4 text-purple-500"
                >
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                  <polyline points="16 7 22 7 22 13"></polyline>
                </svg>
              }
            />
            <ParameterInput
              label="Max Median ROI"
              name="maxMedianROI"
              value={settings.maxMedianROI}
              onChange={handleInputChange}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-trending-up h-4 w-4 text-purple-500"
                >
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                  <polyline points="16 7 22 7 22 13"></polyline>
                </svg>
              }
            />
            <ParameterInput
              label="Min Trades"
              name="minTrades"
              value={settings.minTrades}
              onChange={handleInputChange}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-hash h-4 w-4 text-blue-500"
                >
                  <line x1="4" x2="20" y1="9" y2="9"></line>
                  <line x1="4" x2="20" y1="15" y2="15"></line>
                  <line x1="10" x2="8" y1="3" y2="21"></line>
                  <line x1="16" x2="14" y1="3" y2="21"></line>
                </svg>
              }
            />
            <ParameterInput
              label="Max Trades"
              name="maxTrades"
              value={settings.maxTrades}
              onChange={handleInputChange}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-hash h-4 w-4 text-blue-500"
                >
                  <line x1="4" x2="20" y1="9" y2="9"></line>
                  <line x1="4" x2="20" y1="15" y2="15"></line>
                  <line x1="10" x2="8" y1="3" y2="21"></line>
                  <line x1="16" x2="14" y1="3" y2="21"></line>
                </svg>
              }
            />
          </div>
        </Dropdown>
      </div>
    </div>
  );
};

export default SettingsForm;
