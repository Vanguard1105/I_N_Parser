import { useState } from "react";

interface DropdownProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ title, icon, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-slate-700 py-2">
      <h3 data-orientation="vertical" data-state="open" className="flex">
        <button
          type="button"
          aria-controls="radix-:r5:"
          aria-expanded={isOpen}
          data-state={isOpen ? "open" : "closed"}
          data-orientation="vertical"
          id="radix-:r4:"
          className="flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all text-left [&amp;[data-state=open]>svg]:rotate-180 hover:no-underline bg-slate-900 dark:bg-slate-900"
          data-radix-collection-item=""
          onClick={toggleDropdown}
        >
          <div className="flex items-center justify-center w-full gap-2">
            {icon}
            <h2 className="text-sm uppercase tracking-wider text-slate-100 dark:text-slate-100">
              {title}
            </h2>
          </div>
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
            className={`lucide lucide-chevron-down h-4 w-4 shrink-0 text-white transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          >
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        </button>
      </h3>
      <div className={isOpen ? "block" : "hidden"}>{children}</div>
    </div>
  );
};

export default Dropdown;
