// my-telegram-mini-app/app/components/NameInput.tsx
import React from "react";

interface NameInputProps {
  label?: string;
  name: string;
  id: string;
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

const NameInput: React.FC<NameInputProps> = ({
  label = "Name",
  name,
  id,
  placeholder = "Enter name",
  value,
  onChange,
  disabled = false,
}) => {
  return (
    <div className="space-y-2 py-4">
      <label
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2"
        htmlFor={id}
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
          className="lucide lucide-letter-text text-yellow-500"
        >
          <path d="M15 12h6"></path>
          <path d="M15 6h6"></path>
          <path d="m3 13 3.553-7.724a.5.5 0 0 1 .894 0L11 13"></path>
          <path d="M3 18h18"></path>
          <path d="M4 11h6"></path>
        </svg>
        {label}
      </label>
      <div>
        <input
          className="flex h-9 w-full rounded-md border px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-slate-800 border-slate-700"
          name={name}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export default NameInput;
