// my-telegram-mini-app/app/components/ParameterInput.tsx
import React from "react";

interface ParameterInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  icon: React.ReactNode;
  placeholder?: string;
}

const ParameterInput: React.FC<ParameterInputProps> = ({
  label,
  name,
  value,
  onChange,
  icon,
  placeholder = "Not Set",
}) => {
  return (
    <div className="space-y-2">
      <label
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2"
        htmlFor={name}
      >
        {icon}
        {label}
      </label>
      <input
        type="text"
        className="flex h-9 rounded-md border px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-slate-800 border-slate-700 w-full"
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default ParameterInput;
