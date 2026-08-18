import Select, { components } from "react-select";
import { getData } from "country-list";
function Test() {
  const countries = getData().map((country) => ({
    value: country.code,
    label: country.name,
    code: country.code,
  }));

  const customStyle = {
    control: (base, state) => ({
      ...base,
      width: "370px",
      backgroundColor: "#151A24",
      border: state.isFocused ? "1px solid #ff2d2d" : "1px solid #374151",
      borderRadius: "8px",
      boxShadow: "none",
      cursor: "pointer",

      "&:hover": {
        borderColor: "#ff2d2d",
      },
    }),

    menu: (base) => ({
      ...base,
      width: "370px",
      backgroundColor: "#151A24",
      border: "1px solid #374151",
      borderRadius: "8px",
      overflow: "hidden",
    }),

    option: (base, state) => ({
      ...base,
      color: "#E5E7EB",
      backgroundColor: state.isSelected
        ? "#ff2d2d"
        : state.isFocused
          ? "#252B38"
          : "#151A24",
      padding: "12px 14px",
      borderRadius: "6px",
      cursor: "pointer",

      "&:active": {
        backgroundColor: "#ff2d2d",
      },
    }),

    singleValue: (base) => ({
      ...base,
      color: "#E5E7EB",
    }),

    placeholder: (base) => ({
      ...base,
      color: "#94A3B8",
    }),

    input: (base) => ({
      ...base,
      color: "#E5E7EB",
    }),

    dropdownIndicator: (base, state) => ({
      ...base,
      color: "#ff2d2d",
      transition: "transform 0.2s ease",

      transform: state.selectProps.menuIsOpen
        ? "rotate(180deg)"
        : "rotate(0deg)",

      "&:hover": {
        color: "#ff2d2d",
      },
    }),

    indicatorSeparator: (base) => ({
      ...base,
      backgroundColor: "#374151",
    }),

    menuList: (base) => ({
      ...base,
      backgroundColor: "#151A24",
      maxHeight: "300px",

      // Scrollbar
      "&::-webkit-scrollbar": {
        width: "6px",
      },

      "&::-webkit-scrollbar-track": {
        background: "#151A24",
      },

      "&::-webkit-scrollbar-thumb": {
        background: "#374151",
        borderRadius: "10px",
      },

      "&::-webkit-scrollbar-thumb:hover": {
        background: "#ff2d2d",
      },
    }),
  };

  // customOption for country code

  const CustomOption = (props) => (
    <components.Option {...props}>
      <div className="flex items-center gap-4">
        <span className="w-8 font-medium text-slate-400">
          {props.data.code}
        </span>

        <span>{props.data.label}</span>
      </div>
    </components.Option>
  );

  return (
    <div className="mt-3 cursor-pointer">
      <Select
        options={countries}
        styles={customStyle}
        components={{ Option: CustomOption }}
      />
    </div>
  );
}

export default Test;
