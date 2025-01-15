import React from "react";

const Switcher = ({
  checked,
  setIsChecked,
}: {
  checked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleCheckboxChange = () => {
    setIsChecked(!checked);
  };

  return (
    <>
      <label className="themeSwitcherTwo shadow-card inline-flex cursor-pointer select-none items-center justify-center rounded-md bg-white p-1">
        <input
          type="checkbox"
          className="sr-only"
          checked={checked}
          onChange={handleCheckboxChange}
        />
        <span
          className={`flex items-center space-x-[px] rounded-md py-2 px-[10px] text-sm font-medium ${
            !checked
              ? "text-primary bg-[#F96C3B] text-white font-bold"
              : "text-body-color"
          }`}
        >
          Mês
        </span>
        <span
          className={`flex items-center space-x-[6px] rounded-md py-2 px-[10px] text-sm font-medium ${
            checked
              ? "text-primary bg-[#F96C3B] text-white font-bold"
              : "text-body-color"
          }`}
        >
          Ano
        </span>
      </label>
    </>
  );
};

export default Switcher;
