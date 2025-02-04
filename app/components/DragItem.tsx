// my-telegram-mini-app/app/components/DragItem.tsx
import React, { useState, useCallback, useEffect } from "react";

interface DragItemProps {
  title: string;
  id: string;
  checked: boolean;
  onChange: (name: string, value: boolean) => void;
}

const DragItem: React.FC<DragItemProps> = ({
  title,
  id,
  checked,
  onChange,
}) => {
  return (
    <div
      role="button"
      tabIndex={0}
      aria-disabled="false"
      aria-roledescription="sortable"
      aria-describedby="DndDescribedBy-0"
      className="draggable px-2 bg-slate-800 rounded-md flex items-center justify-between cursor-move"
    >
      <div
        data-state="closed"
        data-disabled=""
        data-orientation="vertical"
        className="border-b border-slate-800 w-full"
      >
        <div className="flex w-full items-center justify-between">
          <div className="w-full">
            <h3
              data-orientation="vertical"
              data-state="closed"
              data-disabled=""
            >
              <button
                type="button"
                aria-controls="radix-:rf:"
                aria-expanded="false"
                data-state="closed"
                data-disabled=""
                disabled
                data-orientation="vertical"
                id="radix-:re:"
                className="flex-1 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180 py-4 px-2 bg-slate-800 w-full text-white rounded-md flex items-center justify-between mb-2"
                data-radix-collection-item=""
              >
                {title}
              </button>
            </h3>
          </div>
          <div className="flex items-center pr-4">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-slate-600 bg-transparent text-slate-100 focus:ring-slate-500 focus:ring-offset-slate-800 accent-slate-600"
              checked={checked}
              onChange={(e) => onChange(id, e.target.checked)}
            />
          </div>
        </div>
        <div
          data-state="closed"
          data-disabled=""
          id="radix-:rf:"
          hidden
          role="region"
          aria-labelledby="radix-:re:"
          data-orientation="vertical"
          className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
        />
      </div>
      <div className="text-slate-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-grip-vertical"
        >
          <circle cx={9} cy={12} r={1}></circle>
          <circle cx={9} cy={5} r={1}></circle>
          <circle cx={9} cy={19} r={1}></circle>
          <circle cx={15} cy={12} r={1}></circle>
          <circle cx={15} cy={5} r={1}></circle>
          <circle cx={15} cy={19} r={1}></circle>
        </svg>
      </div>
    </div>
  );
};

export default DragItem;
