import Select from "react-select";

function ContentCategory() {
  const categories = [
    { value: "all", label: "All Categories" },
    { value: "gaming", label: "Gaming" },
    { value: "education", label: "Education" },
    { value: "tech-ai", label: "Tech & AI" },
    { value: "finance", label: "Finance" },
    { value: "entertainment", label: "Entertainment" },
    { value: "vlogs-lifestyle", label: "Vlogs & Lifestyle" },
    { value: "music", label: "Music" },
    { value: "shorts", label: "Shorts" },
    { value: "kids-content", label: "Kids Content" },
    { value: "news-commentary", label: "News & Commentary" },
  ];

  const customStyle = {
    control: (base, state) => ({
      ...base,
      width: "370px",
      backgroundColor: "#171717",
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
      backgroundColor: "#171717",
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
          : "#171717",
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
      backgroundColor: "#171717",
      maxHeight: "300px",

      // Scrollbar
      "&::-webkit-scrollbar": {
        width: "6px",
      },

      "&::-webkit-scrollbar-track": {
        background: "#171717",
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

  return (
    <div className="mt-3 cursor-pointer">
      <Select
        options={categories}
        styles={customStyle}
        placeholder="Select category..."
        isSearchable
      />
    </div>
  );
}

export default ContentCategory;
