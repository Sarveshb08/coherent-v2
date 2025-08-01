import React from "react";

export type TabItem = {
  label: string;
  icon?: React.ReactNode;
  disabled?: boolean;
};

export interface TabsProps {
  items: TabItem[];
  activeIndex: number;
  onChange: (index: number) => void;
  showIcons?: boolean;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  items,
  activeIndex,
  onChange,
  showIcons = false,
  className,
}) => {
  return (
    <div
      className={`flex w-[360px] bg-white rounded-lg overflow-x-auto border border-gray-200 ${className || ""}`}
      style={{ minHeight: 48 }}
    >
      {items.map((item, idx) => {
        const isActive = idx === activeIndex;
        return (
          <button
            key={item.label + idx}
            className={`flex items-center justify-center gap-2 px-4 py-3 w-[90px] h-[48px] font-medium text-[16px] transition-colors duration-150 rounded-none focus:outline-none
              ${isActive ? "text-[#6200EE]" : "text-gray-900"}
              ${isActive ? "border-b-2 border-[#6200EE] bg-white" : "border-b-2 border-transparent bg-white"}
              ${item.disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-50"}
            `}
            disabled={item.disabled}
            onClick={() => !item.disabled && onChange(idx)}
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {showIcons && item.icon && (
              <span className="mr-2 flex items-center">{item.icon}</span>
            )}
            <span>{item.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
