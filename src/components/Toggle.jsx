function Toggle({ name, isChecked, onToggle }) {
  // Create a unique ID for the toggle button
  // by converting the name to lowercase and replacing spaces with hyphens
  const id = name.toLowerCase().replace(" ", "-") + "-toggle"

  return (
    <button
      id={id}
      onClick={onToggle}
      className="toggle-box toggle-long prevent-select">
      <div
        className={`toggle ${isChecked ? "toggleOn" : ""}`}
        onClick={onToggle}>
        <div className={`switch ${isChecked ? "switchOn" : "switchOff"}`}></div>
      </div>
      <label htmlFor={id} className="toggleLabel">
        {name}
      </label>
    </button>
  )
}

export default Toggle
