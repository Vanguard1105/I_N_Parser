// my-telegram-mini-app/app/components/TableSettingsForm.tsx
import React, { useState, useCallback } from "react";
import CustomDropdown from "./CustomDropdown";
import DragItem from "./DragItem";

const TableSettingsForm: React.FC = () => {
  const [settings, setSettings] = useState({
    dateFormatOptions: "string",
    freezeHeader: false,
    freezeFirstColumn: false,
    zebraStripe: false,
    freezeFirstColumn1: false,
    tokenGroup: false,
    tokenHightlight: false,
    tokenZebraStripe: false,
    mainCheck: false,
    columnCheck: false,
    distributionCheck: false,
  });

  const handleInputChange = (name: string, value: any) => {
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

  const dateFormatOptions = [
    { value: "string", label: "Jan 25 14:12:13" },
    { value: "date", label: "19.01.24 14:12:13" },
  ];
  const [selectedSource, setSelectedSource] = useState("all");

  const handleSourceChange = (value: string) => {
    setSelectedSource(value);
    handleInputChange("dateFormatOptions", value); // Update settings with the new source
  };

  return (
    <div className="flex flex-col bg-slate-900 mt-4 w-[calc(100% - 8px)] mx-1 px-2 text-slate-100 text-[14px]">
      <div className="justify-between px-2 pt-6 pb-2 w-full items-center">
        <div className="text-[24px]">Table Configuration</div>
      </div>
      <div className="py-2">
        <div className="text-[20px] px-2">Shared</div>
        <div className="space-y-2 p-2">
          <div>Date Format</div>
          <CustomDropdown
            options={dateFormatOptions}
            value={selectedSource}
            onChange={handleSourceChange}
          />
        </div>
      </div>
      <div className="py-2 px-2">
        <div className="text-[20px] pb-4">Summary Page</div>
        <div className="space-y-2 bg-[#33415580] rounded-lg p-4">
          <div className="text-[16px]">Page Settings</div>
          <div className="flex flex-row justify-between">
            <div>Freeze Header </div>
            <div className="space-y-1">
              <div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={settings.freezeHeader}
                  data-state={settings.freezeHeader ? "checked" : "unchecked"}
                  value="on"
                  className="peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-300"
                  id="freezeHeader"
                  onClick={() =>
                    handleCheckboxChange("freezeHeader", !settings.freezeHeader)
                  }
                >
                  <span className="sr-only">
                    Toggle export buyers .txt file
                  </span>
                  <span
                    aria-hidden="true"
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ease-in-out ${
                      settings.freezeHeader ? "translate-x-4" : "translate-x-0"
                    }`}
                  ></span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div>Freeze First Column</div>
            <div className="space-y-1">
              <div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={settings.freezeFirstColumn}
                  data-state={
                    settings.freezeFirstColumn ? "checked" : "unchecked"
                  }
                  value="on"
                  className="peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-300"
                  id="freezeFirstColumn"
                  onClick={() =>
                    handleCheckboxChange(
                      "freezeFirstColumn",
                      !settings.freezeFirstColumn
                    )
                  }
                >
                  <span className="sr-only">
                    Toggle export buyers .txt file
                  </span>
                  <span
                    aria-hidden="true"
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ease-in-out ${
                      settings.freezeFirstColumn
                        ? "translate-x-4"
                        : "translate-x-0"
                    }`}
                  ></span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div>Zebra Striping</div>
            <div className="space-y-1">
              <div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={settings.zebraStripe}
                  data-state={settings.zebraStripe ? "checked" : "unchecked"}
                  value="on"
                  className="peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-300"
                  id="zebraStripe"
                  onClick={() =>
                    handleCheckboxChange("zebraStripe", !settings.zebraStripe)
                  }
                >
                  <span className="sr-only">
                    Toggle export buyers .txt file
                  </span>
                  <span
                    aria-hidden="true"
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ease-in-out ${
                      settings.zebraStripe ? "translate-x-4" : "translate-x-0"
                    }`}
                  ></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-2 px-2">
        <div className="text-[20px] pb-4">Details Page</div>
        <div className="space-y-2 bg-[#33415580] rounded-lg p-4">
          <div className="text-[16px]">Page Settings</div>
          <div className="flex flex-row justify-between">
            <div>Freeze First Column </div>
            <div className="space-y-1">
              <div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={settings.freezeFirstColumn1}
                  data-state={
                    settings.freezeFirstColumn1 ? "checked" : "unchecked"
                  }
                  value="on"
                  className="peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-300"
                  id="freezeFirstColumn1"
                  onClick={() =>
                    handleCheckboxChange(
                      "freezeFirstColumn1",
                      !settings.freezeFirstColumn1
                    )
                  }
                >
                  <span className="sr-only">
                    Toggle export buyers .txt file
                  </span>
                  <span
                    aria-hidden="true"
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ease-in-out ${
                      settings.freezeFirstColumn1
                        ? "translate-x-4"
                        : "translate-x-0"
                    }`}
                  ></span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-2 p-4">
          <div className="text-[16px]">Token Settings</div>
          <div className="flex flex-row justify-between">
            <div>Group Trades By Day</div>
            <div className="space-y-1">
              <div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={settings.tokenGroup}
                  data-state={settings.tokenGroup ? "checked" : "unchecked"}
                  value="on"
                  className="peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-300"
                  id="tokenGroup"
                  onClick={() =>
                    handleCheckboxChange("tokenGroup", !settings.tokenGroup)
                  }
                >
                  <span className="sr-only">
                    Toggle export buyers .txt file
                  </span>
                  <span
                    aria-hidden="true"
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ease-in-out ${
                      settings.tokenGroup ? "translate-x-4" : "translate-x-0"
                    }`}
                  ></span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div>Zebra Striping</div>
            <div className="space-y-1">
              <div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={settings.tokenZebraStripe}
                  data-state={
                    settings.tokenZebraStripe ? "checked" : "unchecked"
                  }
                  value="on"
                  className="peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-300"
                  id="tokenZebraStripe"
                  onClick={() =>
                    handleCheckboxChange(
                      "tokenZebraStripe",
                      !settings.tokenZebraStripe
                    )
                  }
                >
                  <span className="sr-only">
                    Toggle export buyers .txt file
                  </span>
                  <span
                    aria-hidden="true"
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ease-in-out ${
                      settings.tokenZebraStripe
                        ? "translate-x-4"
                        : "translate-x-0"
                    }`}
                  ></span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div>Highlight token row for unfinished trades</div>
            <div className="space-y-1">
              <div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={settings.tokenHightlight}
                  data-state={
                    settings.tokenHightlight ? "checked" : "unchecked"
                  }
                  value="on"
                  className="peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-300"
                  id="tokenHightlight"
                  onClick={() =>
                    handleCheckboxChange(
                      "tokenHightlight",
                      !settings.tokenHightlight
                    )
                  }
                >
                  <span className="sr-only">
                    Toggle export buyers .txt file
                  </span>
                  <span
                    aria-hidden="true"
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ease-in-out ${
                      settings.tokenHightlight
                        ? "translate-x-4"
                        : "translate-x-0"
                    }`}
                  ></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-2 space-y-2">
        <DragItem
          title="Main"
          id="mainCheck"
          checked={settings.mainCheck}
          onChange={handleInputChange}
        />
        <DragItem
          title="Tokens Columns settings"
          id="columnCheck"
          checked={settings.columnCheck}
          onChange={handleInputChange}
        />
        <DragItem
          title="Distribution"
          id="distributionCheck"
          checked={settings.distributionCheck}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex flex-row px-2 space-x-4">
        <div className="flex justify-center rounded-md bg-blue-600 hover:bg-blue-700 hover:cursor-pointer my-4 px-4 py-1.5 text-slate-100 w-[50%]">
          Save
        </div>
        <div className="flex justify-center rounded-md bg-red-500 hover:bg-red-600 hover:cursor-pointer my-4 px-4 py-1.5 text-slate-100 w-[50%]">
          Reset
        </div>
      </div>
    </div>
  );
};

export default TableSettingsForm;
