const THEMES = ["light", "dark"];

function Colors({ theme, setTheme }) {
  const onButtonClick = (selectedTheme) => () => {
    setTheme(selectedTheme);
  };

  const getIcon = (themeOption) => {
    return themeOption === "light" ? "light_mode" : "dark_mode";
  };

  return (
    <div className="flex gap-2">
      {THEMES.map((themeOption) => (
        <button
          type="button"
          key={themeOption}
          onClick={onButtonClick(themeOption)}
          className={`px-4 py-2 font-medium transition-all duration-200 text-2xl hover:scale-110 ${
            theme === themeOption
              ? "opacity-100"
              : "opacity-60 hover:opacity-80"
          }`}
        >
          <span className="material-icons text-2xl">
            {getIcon(themeOption)}
          </span>
        </button>
      ))}
    </div>
  );
}

export default Colors;
