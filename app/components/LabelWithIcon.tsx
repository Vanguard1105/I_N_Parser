// my-telegram-mini-app/app/components/LabelWithIcon.tsx
import React from "react";

interface LabelWithIconProps {
  label: string;
  icon: React.ReactNode;
  htmlFor: string;
}

const LabelWithIcon: React.FC<LabelWithIconProps> = ({
  label,
  icon,
  htmlFor,
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className="text-sm text-slate-100 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2"
    >
      {icon}
      <span>{label}</span>
    </label>
  );
};

export default LabelWithIcon;
