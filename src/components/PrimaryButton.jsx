const PrimaryButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 rounded-xl bg-primary text-white font-semibold
                 hover:bg-[#e62626] transition-all duration-300
                 cursor-pointer active:scale-95"
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
