// my-telegram-mini-app/app/components/SettingsForm.tsx
import { useState } from "react";
import Dropdown from "./Dropdown";
import ParameterInput from "./ParameterInput";
import CustomDropdown from "./CustomDropdown";
import NameInput from "./NameInput";

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
    name: "vanguard_1",
    statisticPeriod: "30",
    rocketIs: "100",
    minRocket2X: "0",
    minRocket5X: "0",
    minRocket10X: "0",
    fastTrades: "10",
    rockets: "10",
    minAverageBuy: "",
    maxAverageBuy: "",
    minMedianBuy: "",
    maxMedianBuy: "",
    minBal: "0",
    maxBal: "",
    maxSoldMoreThanBoughtPercentage: "20",
    minSolSpentPerTrade: "0",
    maxOngoingTradesPercentage: "100",
    sortBy: "wr",
    addTxtFile: true,
  });

  const [selectedOption, setSelectedOption] = useState(
    "6793b79af4b7571a5e546eec"
  );

  const handleInputChange = (name: string, value: string) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (name: string, value: boolean) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [name]: value,
    }));
  };

  const handleCustomDropdownChange = (value: string) => {
    setSelectedOption(value);
  };

  const handleStatisticPeriodChange = (value: string) => {
    handleInputChange("statisticPeriod", value);
  };

  const options = [
    { value: "6793b79af4b7571a5e546eec", label: "vanguard_1" },
    // Add more options if needed
  ];

  const statisticPeriodOptions = [
    { value: "1", label: "1d" },
    { value: "7", label: "7d" },
    { value: "14", label: "14d" },
    { value: "30", label: "30d" },
  ];

  const sortByOptions = [
    { value: "wr", label: "WinRate" },
    { value: "roi", label: "ROI" },
    { value: "medianROI", label: "Median ROI" },
    { value: "rocketsPercentage", label: "Rockets" },
    { value: "lastTradeAt", label: "Last Trade Date" },
    { value: "tokensTotal", label: "Traded Tokens" },
  ];

  return (
    <div className="flex flex-col bg-slate-900 mt-4 w-[calc(100% - 8px)] h-[100%] mx-1 px-2">
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
        <CustomDropdown
          options={options}
          value={selectedOption}
          onChange={handleCustomDropdownChange}
        />
      </div>
      <div className="px-2">
        <Dropdown
          title="PARAMETERS"
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
              className="lucide lucide-settings h-4 w-4 text-gray-400"
            >
              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0-.73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43-.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          }
        >
          <div className="text-slate-100 py-2 pb-4">
            <NameInput
              label="Name"
              name="name"
              id="name"
              placeholder="Enter name"
              value={settings.name}
              onChange={(event) =>
                handleInputChange("name", event.target.value)
              }
            />
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2"
                htmlFor="filterByLastNdays"
              >
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
                  className="lucide lucide-clock h-4 w-4 text-blue-500"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                Statistic Period
              </label>
              <CustomDropdown
                options={statisticPeriodOptions}
                value={settings.statisticPeriod}
                onChange={handleStatisticPeriodChange}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-slate-100">
            <ParameterInput
              label="Min WR"
              name="minWR"
              value={settings.minWR}
              onChange={(event) =>
                handleInputChange("minWR", event.target.value)
              }
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
              onChange={(event) =>
                handleInputChange("maxWR", event.target.value)
              }
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
              onChange={(event) =>
                handleInputChange("minROI", event.target.value)
              }
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
              onChange={(event) =>
                handleInputChange("maxROI", event.target.value)
              }
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
              onChange={(event) =>
                handleInputChange("minMedianROI", event.target.value)
              }
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
              onChange={(event) =>
                handleInputChange("maxMedianROI", event.target.value)
              }
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
              onChange={(event) =>
                handleInputChange("minTrades", event.target.value)
              }
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
              onChange={(event) =>
                handleInputChange("maxTrades", event.target.value)
              }
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
        <Dropdown
          title="PRO PARAMETERS"
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
              className="lucide lucide-crown h-4 w-4 text-yellow-400"
            >
              <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path>
              <path d="M5 21h14"></path>
            </svg>
          }
        >
          <div className="text-slate-100 py-2 pb-4">
            <div className="space-y-6">
              <div className="space-y-2 col-span-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2"
                  htmlFor="rocketIs"
                >
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
                    className="lucide lucide-rocket h-4 w-4 text-red-500"
                  >
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                  </svg>
                  Rocket is ≥<u> 100 % ( 1x ) </u>ROI in one trade
                </label>
                <div>
                  <input
                    type="text"
                    className="flex h-9 rounded-md border px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-slate-800 border-slate-700 w-full"
                    name="rocketIs"
                    id="rocketIs"
                    placeholder="Not Set"
                    value={settings.rocketIs}
                    onChange={(event) =>
                      handleInputChange("rocketIs", event.target.value)
                    }
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm text-slate-400 pb-2">
                  Min amount of 2x/5x/10x trades
                </label>
                <div className="flex gap-4">
                  <div className="flex flex-col gap-2">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2"
                      htmlFor="minRocket2X"
                    >
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
                        className="lucide lucide-rocket h-4 w-4 text-yellow-300"
                      >
                        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                      </svg>
                      Min 2x
                    </label>
                    <input
                      type="text"
                      className="flex h-9 rounded-md border px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-slate-800 border-slate-700 w-full"
                      name="minRocket2X"
                      id="minRocket2X"
                      placeholder="Min 2x trades"
                      value={settings.minRocket2X}
                      onChange={(event) =>
                        handleInputChange("minRocket2X", event.target.value)
                      }
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2"
                      htmlFor="minRocket5X"
                    >
                      <div className="relative pr-2">
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
                          className="lucide lucide-rocket h-4 w-4 text-orange-400"
                        >
                          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                        </svg>
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
                          className="lucide lucide-rocket h-4 w-4 text-orange-400 absolute top-0 left-2"
                        >
                          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                        </svg>
                      </div>
                      Min 5x
                    </label>
                    <input
                      type="text"
                      className="flex h-9 rounded-md border px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-slate-800 border-slate-700 w-full"
                      name="minRocket5X"
                      id="minRocket5X"
                      placeholder="Min 5x trades"
                      value={settings.minRocket5X}
                      onChange={(event) =>
                        handleInputChange("minRocket5X", event.target.value)
                      }
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2"
                      htmlFor="minRocket10X"
                    >
                      <div className="relative pr-4">
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
                          className="lucide lucide-rocket h-4 w-4 text-red-500"
                        >
                          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                        </svg>
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
                          className="lucide lucide-rocket h-4 w-4 text-red-500 absolute top-0 left-2"
                        >
                          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                        </svg>
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
                          className="lucide lucide-rocket h-4 w-4 text-red-500 absolute top-0 left-4"
                        >
                          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                        </svg>
                      </div>
                      Min 10x
                    </label>
                    <input
                      type="text"
                      className="flex h-9 rounded-md border px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-slate-800 border-slate-700 w-full"
                      name="minRocket10X"
                      id="minRocket10X"
                      placeholder="Min 10x trades"
                      value={settings.minRocket10X}
                      onChange={(event) =>
                        handleInputChange("minRocket10X", event.target.value)
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-2 self-end flex flex-col justify-between h-full">
                <div className="flex flex-col">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2"
                    htmlFor="fastTrades"
                  >
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
                      className="lucide lucide-zap h-4 w-4 text-yellow-500"
                    >
                      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                    </svg>
                    Max % Fast Trades
                  </label>
                  <label className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-xs text-slate-400 pt-0.5">
                    <span className="text-xxs">
                      Fast trade is a trade {"<"} 1 min.
                    </span>
                  </label>
                </div>
                <div>
                  <input
                    type="text"
                    className="flex h-9 rounded-md border px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-slate-800 border-slate-700 w-full"
                    name="fastTrades"
                    id="fastTrades"
                    placeholder="Not Set"
                    value={settings.fastTrades}
                    onChange={(event) =>
                      handleInputChange("fastTrades", event.target.value)
                    }
                  />
                </div>
              </div>
              <div className="space-y-2 self-end flex flex-col justify-between h-full">
                <div className="flex flex-col">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2"
                    htmlFor="rockets"
                  >
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
                      className="lucide lucide-rocket h-4 w-4 text-green-500"
                    >
                      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                    </svg>
                    Min % Rockets
                  </label>
                </div>
                <div>
                  <input
                    type="text"
                    className="flex h-9 rounded-md border px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-slate-800 border-slate-700 w-full"
                    name="rockets"
                    id="rockets"
                    placeholder="0%"
                    value={settings.rockets}
                    onChange={(event) =>
                      handleInputChange("rockets", event.target.value)
                    }
                  />
                </div>
              </div>
              <div className="space-y-2 self-end flex flex-col justify-between h-full">
                <div className="flex flex-col">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2"
                    htmlFor="minAverageBuy"
                  >
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
                      className="lucide lucide-wallet h-4 w-4 text-yellow-500"
                    >
                      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
                      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
                    </svg>
                    Min Avg Buy
                  </label>
                </div>
                <div>
                  <input
                    type="text"
                    className="flex h-9 rounded-md border px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-slate-800 border-slate-700 w-full"
                    name="minAverageBuy"
                    id="minAverageBuy"
                    placeholder="Not Set"
                    value={settings.minAverageBuy}
                    onChange={(event) =>
                      handleInputChange("minAverageBuy", event.target.value)
                    }
                  />
                </div>
              </div>
              <div className="space-y-2 self-end flex flex-col justify-between h-full">
                <div className="flex flex-col">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2"
                    htmlFor="maxAverageBuy"
                  >
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
                      className="lucide lucide-wallet h-4 w-4 text-yellow-500"
                    >
                      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
                      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
                    </svg>
                    Max Avg Buy
                  </label>
                </div>
                <div>
                  <input
                    type="text"
                    className="flex h-9 rounded-md border px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-slate-800 border-slate-700 w-full"
                    name="maxAverageBuy"
                    id="maxAverageBuy"
                    placeholder="Inf"
                    value={settings.maxAverageBuy}
                    onChange={(event) =>
                      handleInputChange("maxAverageBuy", event.target.value)
                    }
                  />
                </div>
              </div>
              <div className="space-y-2 self-end flex flex-col justify-between h-full">
                <div className="flex flex-col">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2"
                    htmlFor="minMedianBuy"
                  >
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
                      className="lucide lucide-wallet h-4 w-4 text-fuchsia-500"
                    >
                      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
                      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
                    </svg>
                    Min Median Buy
                  </label>
                </div>
                <div>
                  <input
                    type="text"
                    className="flex h-9 rounded-md border px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-slate-800 border-slate-700 w-full"
                    name="minMedianBuy"
                    id="minMedianBuy"
                    placeholder="Not Set"
                    value={settings.minMedianBuy}
                    onChange={(event) =>
                      handleInputChange("minMedianBuy", event.target.value)
                    }
                  />
                </div>
              </div>
              <div className="space-y-2 self-end flex flex-col justify-between h-full">
                <div className="flex flex-col">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2"
                    htmlFor="maxMedianBuy"
                  >
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
                      className="lucide lucide-wallet h-4 w-4 text-fuchsia-500"
                    >
                      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
                      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
                    </svg>
                    Max Median Buy
                  </label>
                </div>
                <div>
                  <input
                    type="text"
                    className="flex h-9 rounded-md border px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-slate-800 border-slate-700 w-full"
                    name="maxMedianBuy"
                    id="maxMedianBuy"
                    placeholder="Inf"
                    value={settings.maxMedianBuy}
                    onChange={(event) =>
                      handleInputChange("maxMedianBuy", event.target.value)
                    }
                  />
                </div>
              </div>
              <div className="space-y-2 self-end flex flex-col justify-between h-full">
                <div className="flex flex-col">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2"
                    htmlFor="minBal"
                  >
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
                      className="lucide lucide-piggy-bank h-4 w-4 text-yellow-300"
                    >
                      <path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z"></path>
                      <path d="M2 9v1c0 1.1.9 2 2 2h1"></path>
                      <path d="M16 1h.01"></path>
                    </svg>
                    Min Sol Balance
                  </label>
                </div>
                <div>
                  <input
                    type="text"
                    className="flex h-9 rounded-md border px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-slate-800 border-slate-700 w-full"
                    name="minBal"
                    id="minBal"
                    placeholder="Not Set"
                    value={settings.minBal}
                    onChange={(event) =>
                      handleInputChange("minBal", event.target.value)
                    }
                  />
                </div>
              </div>
              <div className="space-y-2 self-end flex flex-col justify-between h-full">
                <div className="flex flex-col">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2"
                    htmlFor="maxBal"
                  >
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
                      className="lucide lucide-piggy-bank h-4 w-4 text-yellow-300"
                    >
                      <path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z"></path>
                      <path d="M2 9v1c0 1.1.9 2 2 2h1"></path>
                      <path d="M16 11h.01"></path>
                    </svg>
                    Max Sol Balance
                  </label>
                </div>
                <div>
                  <input
                    type="text"
                    className="flex h-9 rounded-md border px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-slate-800 border-slate-700 w-full"
                    name="maxBal"
                    id="maxBal"
                    placeholder="Inf"
                    value={settings.maxBal}
                    onChange={(event) =>
                      handleInputChange("maxBal", event.target.value)
                    }
                  />
                </div>
              </div>
              <div className="space-y-2 self-end flex flex-col justify-between h-full col-span-2">
                <div className="flex flex-col">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2"
                    htmlFor="maxSoldMoreThanBoughtPercentage"
                  >
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
                      className="lucide lucide-trending-down h-4 w-4 text-red-500"
                    >
                      <polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline>
                      <polyline points="16 17 22 17 22 11"></polyline>
                    </svg>
                    Max Sold {">"} Bought (%)
                  </label>
                </div>
                <div>
                  <input
                    type="text"
                    className="flex h-9 rounded-md border px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-slate-800 border-slate-700 w-full"
                    name="maxSoldMoreThanBoughtPercentage"
                    id="maxSoldMoreThanBoughtPercentage"
                    placeholder="Not Set"
                    value={settings.maxSoldMoreThanBoughtPercentage}
                    onChange={(event) =>
                      handleInputChange(
                        "maxSoldMoreThanBoughtPercentage",
                        event.target.value
                      )
                    }
                  />
                </div>
              </div>
              <div className="space-y-2 self-end flex flex-col justify-between h-full">
                <div className="flex flex-col">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2"
                    htmlFor="minSolSpentPerTrade"
                  >
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
                      className="lucide lucide-wallet h-4 w-4 text-green-300"
                    >
                      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
                      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
                    </svg>
                    Min Sol Per Trade
                  </label>
                  <label className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-xs text-slate-400 pt-0.5">
                    <span className="text-xxs">
                      Ignore trades lower than this SOL value for stat
                      calculations
                    </span>
                  </label>
                </div>
                <div>
                  <input
                    type="text"
                    className="flex h-9 rounded-md border px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-slate-800 border-slate-700 w-full"
                    name="minSolSpentPerTrade"
                    id="minSolSpentPerTrade"
                    placeholder="Not Set"
                    value={settings.minSolSpentPerTrade}
                    onChange={(event) =>
                      handleInputChange(
                        "minSolSpentPerTrade",
                        event.target.value
                      )
                    }
                  />
                </div>
              </div>
              <div className="space-y-2 self-end flex flex-col justify-between h-full">
                <div className="flex flex-col">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2"
                    htmlFor="maxOngoingTradesPercentage"
                  >
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
                      className="lucide lucide-chart-line h-4 w-4 text-orange-300"
                    >
                      <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                      <path d="m19 9-5 5-4-4-3 3"></path>
                    </svg>
                    Ongoing Trades %
                  </label>
                  <label className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-xs text-slate-400 pt-0.5">
                    <span className="text-xxs">
                      Max % of trades that are not finished yet
                    </span>
                  </label>
                </div>
                <div>
                  <input
                    type="text"
                    className="flex h-9 rounded-md border px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-slate-800 border-slate-700 w-full"
                    name="maxOngoingTradesPercentage"
                    id="maxOngoingTradesPercentage"
                    placeholder="Not Set"
                    value={settings.maxOngoingTradesPercentage}
                    onChange={(event) =>
                      handleInputChange(
                        "maxOngoingTradesPercentage",
                        event.target.value
                      )
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-2 py-4">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2  text-slate-100"
              htmlFor="sortBy"
            >
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
                className="lucide lucide-list h-4 w-4 text-gray-400"
              >
                <path d="M3 12h.01"></path>
                <path d="M3 18h.01"></path>
                <path d="M3 6h.01"></path>
                <path d="M8 12h13"></path>
                <path d="M8 18h13"></path>
                <path d="M8 6h13"></path>
              </svg>
              Sort By
            </label>
            <div>
              <button
                type="button"
                role="combobox"
                aria-controls="radix-:rb:"
                aria-expanded="false"
                aria-autocomplete="none"
                dir="ltr"
                data-state="closed"
                className="flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 bg-slate-800 border-slate-700 text-white"
                id="sortBy"
                onClick={() => {
                  // Handle dropdown toggle
                }}
              >
                <span style={{ pointerEvents: "none" }}>
                  {sortByOptions.find(
                    (option) => option.value === settings.sortBy
                  )?.label || "WinRate"}
                </span>
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
                  className="lucide lucide-chevron-down h-4 w-4 opacity-50"
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
              <select
                aria-hidden="true"
                tabIndex={-1}
                style={{
                  position: "absolute",
                  border: "0px",
                  width: "1px",
                  height: "1px",
                  padding: "0px",
                  margin: "-1px",
                  overflow: "hidden",
                  clip: "rect(0px, 0px, 0px, 0px)",
                  whiteSpace: "nowrap",
                  overflowWrap: "normal",
                }}
                value={settings.sortBy}
                onChange={(event) =>
                  handleInputChange("sortBy", event.target.value)
                }
              >
                {sortByOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2  text-slate-100"
                htmlFor="addTxtFile"
              >
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
                  className="lucide lucide-rows4 h-4 w-4 text-green-600 "
                >
                  <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                  <path d="M21 7.5H3"></path>
                  <path d="M21 12H3"></path>
                  <path d="M21 16.5H3"></path>
                </svg>
                Additionally export buyers .txt file
              </label>
              <div className="space-y-1">
                <div>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={settings.addTxtFile}
                    data-state={settings.addTxtFile ? "checked" : "unchecked"}
                    value="on"
                    className="peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-300"
                    id="addTxtFile"
                    onClick={() =>
                      handleCheckboxChange("addTxtFile", !settings.addTxtFile)
                    }
                  >
                    <span className="sr-only">
                      Toggle export buyers .txt file
                    </span>
                    <span
                      aria-hidden="true"
                      className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ease-in-out data-[state=checked]:translate-x-4"
                    ></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Dropdown>
      </div>
    </div>
  );
};

export default SettingsForm;
