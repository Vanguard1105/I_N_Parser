// my-telegram-mini-app/app/components/SettingsForm.tsx
import React, { useState, useCallback } from "react";
import Dropdown from "./Dropdown";
import ParameterInput from "./ParameterInput";
import CustomDropdown from "./CustomDropdown";
import NameInput from "./NameInput";
import Slider from "./Slider";
import LabelWithIcon from "./LabelWithIcon";
import moment from "moment-timezone";

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
    minAvgTradeDuration: 0,
    maxAvgTradeDuration: 0,
    minMedianTradeDuration: 0,
    maxMedianTradeDuration: 0,
    minAvgFirstTxMCAP: "",
    maxAvgFirstTxMCAP: "",
    minAvgLastTxMCAP: "",
    maxAvgLastTxMCAP: "",
    afkEnable: true,
    timezone: "Europe/Berlin",
    timesPerDay: "1 Per Day at 8:00 AM",
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

  const handleRocketChange = (value: string) => {
    handleInputChange("rocketIs", value);
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
  const [isSliding, setIsSliding] = useState(false);

  // Handle mouse down event
  const handleMouseDown = () => {
    setIsSliding(true);
  };
  // Calculate the percentage of the current value relative to the maximum
  const currentValue = Number(settings.rocketIs);
  const percentage = ((currentValue - 100) / (10000 - 100)) * 100;

  // Calculate the filled portion styles
  const filledStyle: React.CSSProperties = {
    position: "absolute" as "absolute", // Ensuring TypeScript accepts the value
    height: "100%",
    backgroundColor: "green", // Change color based on filled percentage
    width: `${Math.min(percentage, 100)}%`, // Fill from 0% to current percentage
    left: 0,
  };
  // Calculate and set rocketIs value based on mouse movement
  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      if (isSliding) {
        const sliderRect = document
          .getElementById("slider")
          ?.getBoundingClientRect();
        if (sliderRect) {
          const sliderWidth = sliderRect.width;
          const offsetX = event.clientX - sliderRect.left;
          const percentage = Math.min(Math.max(offsetX / sliderWidth, 0), 1); // clamp percentage
          const newValue = Math.round(percentage * (10000 - 100) + 100); // Calculate new value between 100 and 10000
          handleRocketChange(newValue.toString());
        }
      }
    },
    [isSliding]
  );

  // Handle mouse up event
  const handleMouseUp = () => {
    setIsSliding(false);
  };

  // Hook for adding and cleaning up event listeners
  React.useEffect(() => {
    if (isSliding) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isSliding, handleMouseMove]);

  // Handle click directly on the slider track
  const handleSliderClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const sliderRect = event.currentTarget.getBoundingClientRect();
    const sliderWidth = sliderRect.width;
    const offsetX = event.clientX - sliderRect.left;
    const percentage = Math.min(Math.max(offsetX / sliderWidth, 0), 1);
    const newValue = Math.round(percentage * (10000 - 100) + 100); // Calculate new value directly from click
    handleRocketChange(newValue.toString());
  };
  const sourceOptions = [
    { value: "all", label: "All" },
    { value: "pumpfun", label: "Pump Fun Migrated" },
    { value: "dexscreener", label: "Dexscreener" },
  ];
  const [selectedSource, setSelectedSource] = useState("all");

  const handleSourceChange = (value: string) => {
    setSelectedSource(value);
    handleInputChange("source", value); // Update settings with the new source
  };
  const options = [{ value: "6793b79af4b7571a5e546eec", label: "vanguard_1" }];

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

  const timezoneOptions = moment.tz.names().map((tz) => ({
    value: tz,
    label: tz,
  }));
  const [selectedTimezone, setSelectedTimezone] = useState("Europe/Berlin");

  const handleTimezoneChange = (value: string) => {
    setSelectedTimezone(value);
    handleInputChange("timezone", value); // Update settings with the new timezone
  };

  const timesPerDayOptions = [
    { value: "24", label: "1 Per Day at 8:00 AM" },
    { value: "12", label: "Every 12 hours" },
    { value: "8", label: "Every 8 hours" },
    { value: "4", label: "Every 4 hours" },
  ];
  const [selectedTimesPerDay, setSelectedTimesPerDay] = useState("24");

  const handleTimesPerDayChange = (value: string) => {
    setSelectedTimesPerDay(value);
    handleInputChange("timesPerDay", value); // Update settings with the new timesPerDay
  };
  return (
    <div className="flex flex-col bg-slate-900 mt-4 w-[calc(100% - 8px)] h-[100%] mx-1 px-2">
      <div className="flex flex-row justify-between p-2 w-full items-center">
        <div className="text-white">Setting Menu</div>
        <div className="flex flex-row gap-2 py-5">
          <div className="flex flex-row text-green-400 items-center hover:text-green-500 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="svg-custom-style lucide lucide-circle-plus"
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
              viewBox="0 0 24 24"
              className="svg-custom-style lucide lucide-copy"
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
              viewBox="0 0 24 24"
              className="svg-custom-style lucide lucide-settings h-4 w-4 text-gray-400"
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
                  viewBox="0 0 24 24"
                  className="svg-custom-style lucide lucide-clock h-4 w-4 text-blue-500"
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
                  viewBox="0 0 24 24"
                  className="svg-custom-style lucide lucide-chart-bar h-4 w-4 text-red-500"
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
                  viewBox="0 0 24 24"
                  className="svg-custom-style lucide lucide-chart-bar h-4 w-4 text-red-500"
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
                  viewBox="0 0 24 24"
                  className="svg-custom-style lucide lucide-trending-up h-4 w-4 text-purple-500"
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
                  viewBox="0 0 24 24"
                  className="svg-custom-style lucide lucide-trending-up h-4 w-4 text-purple-500"
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
                  viewBox="0 0 24 24"
                  className="svg-custom-style lucide lucide-trending-up h-4 w-4 text-purple-500"
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
                  viewBox="0 0 24 24"
                  className="svg-custom-style lucide lucide-trending-up h-4 w-4 text-purple-500"
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
                  viewBox="0 0 24 24"
                  className="svg-custom-style lucide lucide-hash h-4 w-4 text-blue-500"
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
                  viewBox="0 0 24 24"
                  className="svg-custom-style lucide lucide-hash h-4 w-4 text-blue-500"
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
              viewBox="0 0 24 24"
              className="svg-custom-style lucide lucide-crown h-4 w-4 text-yellow-400"
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
                    viewBox="0 0 24 24"
                    className="svg-custom-style lucide lucide-rocket h-4 w-4 text-red-500"
                  >
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                  </svg>
                  Rocket is ≥{/* <u> */} {settings.rocketIs} % ({" "}
                  {Math.floor(Number(settings.rocketIs) / 100)}x ) {/* </u> */}
                  ROI in one trade
                </label>
                <div>
                  <span
                    dir="ltr"
                    className="relative flex w-full touch-none select-none items-center py-2 cursor-pointer"
                    id="slider" // Added ID for reference
                    onClick={handleSliderClick} // Handle click on slider
                  >
                    <span
                      data-orientation="horizontal"
                      className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-gray-600"
                    >
                      <span
                        data-orientation="horizontal"
                        style={filledStyle} // Apply filled style
                      ></span>
                    </span>
                    <span
                      style={{
                        transform: "translateX(-50%)",
                        position: "absolute",
                        left: `${Math.min(Math.max(((currentValue - 100) / (10000 - 100)) * 100, 0), 100)}%`, // Adjust left position based on value
                      }}
                    >
                      <span
                        role="slider"
                        aria-valuemin={100}
                        aria-valuemax={10000}
                        aria-orientation="horizontal"
                        tabIndex={0}
                        className="block h-4 w-4 rounded-full border bg-white shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-300 disabled:pointer-events-none disabled:opacity-50"
                        aria-valuenow={currentValue}
                        onMouseDown={handleMouseDown} // Start sliding
                      ></span>
                    </span>
                  </span>
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
                        viewBox="0 0 24 24"
                        className="svg-custom-style lucide lucide-rocket h-4 w-4 text-yellow-300"
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
                          viewBox="0 0 24 24"
                          className="svg-custom-style lucide lucide-rocket h-4 w-4 text-orange-400"
                        >
                          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="svg-custom-style lucide lucide-rocket h-4 w-4 text-orange-400 absolute top-0 left-2"
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
                          viewBox="0 0 24 24"
                          className="svg-custom-style lucide lucide-rocket h-4 w-4 text-red-500"
                        >
                          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="svg-custom-style lucide lucide-rocket h-4 w-4 text-red-500 absolute top-0 left-2"
                        >
                          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="svg-custom-style lucide lucide-rocket h-4 w-4 text-red-500 absolute top-0 left-4"
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
                      viewBox="0 0 24 24"
                      className="svg-custom-style lucide lucide-zap h-4 w-4 text-yellow-500"
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
                      viewBox="0 0 24 24"
                      className="svg-custom-style lucide lucide-rocket h-4 w-4 text-green-500"
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
                      viewBox="0 0 24 24"
                      className="svg-custom-style lucide lucide-wallet h-4 w-4 text-yellow-500"
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
                      viewBox="0 0 24 24"
                      className="svg-custom-style lucide lucide-wallet h-4 w-4 text-yellow-500"
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
                      viewBox="0 0 24 24"
                      className="svg-custom-style lucide lucide-wallet h-4 w-4 text-fuchsia-500"
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
                      viewBox="0 0 24 24"
                      className="svg-custom-style lucide lucide-wallet h-4 w-4 text-fuchsia-500"
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
                      viewBox="0 0 24 24"
                      className="svg-custom-style lucide lucide-piggy-bank h-4 w-4 text-yellow-300"
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
                      viewBox="0 0 24 24"
                      className="svg-custom-style lucide lucide-piggy-bank h-4 w-4 text-yellow-300"
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
                      viewBox="0 0 24 24"
                      className="svg-custom-style lucide lucide-trending-down h-4 w-4 text-red-500"
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
                      viewBox="0 0 24 24"
                      className="svg-custom-style lucide lucide-wallet h-4 w-4 text-green-300"
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
                      viewBox="0 0 24 24"
                      className="svg-custom-style lucide lucide-chart-line h-4 w-4 text-orange-300"
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
                viewBox="0 0 24 24"
                className="svg-custom-style lucide lucide-list h-4 w-4 text-gray-400"
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
            <CustomDropdown
              options={sortByOptions}
              value={settings.sortBy}
              onChange={(value) => handleInputChange("sortBy", value)}
            />
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2  text-slate-100"
                htmlFor="addTxtFile"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="svg-custom-style lucide lucide-rows4 h-4 w-4 text-green-600 "
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
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ease-in-out ${
                        settings.addTxtFile ? "translate-x-4" : "translate-x-0"
                      }`}
                    ></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Dropdown
            title="DURATION PARAMETERS"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="svg-custom-style lucide lucide-timer h-4 w-4 text-green-400"
              >
                <line x1="10" x2="14" y1="2" y2="2" />
                <line x1="12" x2="15" y1="14" y2="11" />
                <circle cx="12" cy="14" r="8" />
              </svg>
            }
          >
            <div className="space-y-2 py-2">
              <div className="space-y-2">
                <LabelWithIcon
                  label={`Min Avg Trade Duration (minutes) ${settings.minAvgTradeDuration != 0 ? `${settings.minAvgTradeDuration}m` : "Not set"}`}
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="svg-custom-style lucide lucide-clock h-4 w-4 text-green-500 svg-custom-style"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  }
                  htmlFor="minAvgTradeDuration"
                />
                <Slider
                  name="minAvgTradeDuration"
                  value={settings.minAvgTradeDuration}
                  onChange={handleInputChange}
                  min={0}
                  max={60}
                />
              </div>
              <div className="space-y-2">
                <LabelWithIcon
                  label={`Max Avg Trade Duration (minutes) ${settings.maxAvgTradeDuration != 0 ? `${settings.maxAvgTradeDuration}m` : "Not set"}`}
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="svg-custom-style lucide lucide-clock h-4 w-4 text-yellow-500 svg-custom-style"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  }
                  htmlFor="maxAvgTradeDuration"
                />
                <Slider
                  name="maxAvgTradeDuration"
                  value={settings.maxAvgTradeDuration}
                  onChange={handleInputChange}
                  min={0}
                  max={60}
                />
              </div>
              <div className="space-y-2">
                <LabelWithIcon
                  label={`Min Median Trade Duration (minutes) ${settings.minMedianTradeDuration != 0 ? `${settings.minMedianTradeDuration}m` : "Not set"}`}
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="svg-custom-style lucide lucide-clock1 h-4 w-4 text-green-500 svg-custom-style"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  }
                  htmlFor="minMedianTradeDuration"
                />
                <Slider
                  name="minMedianTradeDuration"
                  value={settings.minMedianTradeDuration}
                  onChange={handleInputChange}
                  min={0}
                  max={60}
                />
              </div>
              <div className="space-y-2">
                <LabelWithIcon
                  label={`Max Median Trade Duration (minutes) ${settings.maxMedianTradeDuration != 0 ? `${settings.maxMedianTradeDuration}m` : "Not set"}`}
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="svg-custom-style lucide lucide-clock1 h-4 w-4 text-yellow-500 svg-custom-style"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  }
                  htmlFor="maxMedianTradeDuration"
                />
                <Slider
                  name="maxMedianTradeDuration"
                  value={settings.maxMedianTradeDuration}
                  onChange={handleInputChange}
                  min={0}
                  max={60}
                />
              </div>
            </div>
          </Dropdown>
          <Dropdown
            title="MCAP PARAMETERS"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="svg-custom-style lucide lucide-chart-bar-big h-4 w-4 text-red-400"
              >
                <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                <rect x="7" y="13" width="9" height="4" rx="1"></rect>
                <rect x="7" y="5" width="12" height="4" rx="1"></rect>
              </svg>
            }
          >
            <div className="grid grid-cols-2 gap-4 text-slate-100">
              <ParameterInput
                label="Min Avg First TX MCAP"
                name="minAvgFirstTxMCAP"
                value={settings.minAvgFirstTxMCAP}
                onChange={(event) =>
                  handleInputChange("minAvgFirstTxMCAP", event.target.value)
                }
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="svg-custom-style lucide lucide-chart-bar h-4 w-4 text-blue-500"
                  >
                    <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                    <path d="M7 16h8"></path>
                    <path d="M7 11h12"></path>
                    <path d="M7 6h3"></path>
                  </svg>
                }
              />
              <ParameterInput
                label="Max Avg First TX MCAP"
                name="maxAvgFirstTxMCAP"
                value={settings.maxAvgFirstTxMCAP}
                onChange={(event) =>
                  handleInputChange("maxAvgFirstTxMCAP", event.target.value)
                }
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="svg-custom-style lucide lucide-chart-bar h-4 w-4 text-blue-500"
                  >
                    <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                    <path d="M7 16h8"></path>
                    <path d="M7 11h12"></path>
                    <path d="M7 6h3"></path>
                  </svg>
                }
              />
              <ParameterInput
                label="Min Avg Last TX MCAP"
                name="minAvgLastTxMCAP"
                value={settings.minAvgLastTxMCAP}
                onChange={(event) =>
                  handleInputChange("minAvgLastTxMCAP", event.target.value)
                }
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="svg-custom-style lucide lucide-chart-bar h-4 w-4 text-purple-500"
                  >
                    <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                    <path d="M7 16h8"></path>
                    <path d="M7 11h12"></path>
                    <path d="M7 6h3"></path>
                  </svg>
                }
              />
              <ParameterInput
                label="Max Avg Last TX MCAP"
                name="maxAvgLastTxMCAP"
                value={settings.maxAvgLastTxMCAP}
                onChange={(event) =>
                  handleInputChange("maxAvgLastTxMCAP", event.target.value)
                }
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="svg-custom-style lucide lucide-chart-bar h-4 w-4 text-purple-500"
                  >
                    <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                    <path d="M7 16h8"></path>
                    <path d="M7 11h12"></path>
                    <path d="M7 6h3"></path>
                  </svg>
                }
              />
            </div>
          </Dropdown>
        </Dropdown>
        <Dropdown
          title="AFK MODE PARAMS"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="svg-custom-style lucide lucide-keyboard h-4 w-4 text-gray-400"
            >
              <path d="M10 8h.01" />
              <path d="M12 12h.01" />
              <path d="M14 8h.01" />
              <path d="M16 12h.01" />
              <path d="M18 8h.01" />
              <path d="M6 8h.01" />
              <path d="M7 16h10" />
              <path d="M8 12h.01" />
              <rect width="20" height="16" x="2" y="4" rx="2" />
            </svg>
          }
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2  text-slate-100"
                htmlFor="addTxtFile"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="svg-custom-style lucide lucide-clock h-4 w-4 text-green-500 "
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                AFK Mode Enabled
              </label>
              <div className="space-y-1">
                <div>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={settings.afkEnable}
                    data-state={settings.afkEnable ? "checked" : "unchecked"}
                    value="on"
                    className="peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-300"
                    id="afkEnable"
                    onClick={() =>
                      handleCheckboxChange("afkEnable", !settings.afkEnable)
                    }
                  >
                    <span className="sr-only">Enable AFK Mode</span>
                    <span
                      aria-hidden="true"
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ease-in-out ${
                        settings.afkEnable ? "translate-x-4" : "translate-x-0"
                      }`}
                    ></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4 py-2">
            <LabelWithIcon
              label={`Timezone`}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="svg-custom-style lucide lucide-clock h-4 w-4 text-blue-500 svg-custom-style"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              }
              htmlFor="minAvgTradeDuration"
            />
            <CustomDropdown
              options={timezoneOptions}
              value={selectedTimezone}
              onChange={handleTimezoneChange}
            />
          </div>
          <div className="space-y-4 py-2">
            <LabelWithIcon
              label={`Source`}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="svg-custom-style lucide lucide-clock h-4 w-4 text-blue-500 svg-custom-style"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              }
              htmlFor="sourceOptions"
            />
            <CustomDropdown
              options={sourceOptions}
              value={selectedSource}
              onChange={handleSourceChange}
            />
          </div>
          <div className="space-y-4 py-2">
            <LabelWithIcon
              label={`Times Per Day`}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="svg-custom-style lucide lucide-clock h-4 w-4 text-yellow-500"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              }
              htmlFor="sourceOptions"
            />
            <CustomDropdown
              options={timesPerDayOptions}
              value={selectedTimesPerDay}
              onChange={handleTimesPerDayChange}
            />
          </div>
        </Dropdown>
      </div>
    </div>
  );
};

export default SettingsForm;
