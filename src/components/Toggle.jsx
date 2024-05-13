function Toggle({ name, isChecked, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="toggle-box toggle-long prevent-select">
      <div
        className={`toggle ${isChecked ? "toggleOn" : ""}`}
        onClick={onToggle}>
        <div className={`switch ${isChecked ? "switchOn" : "switchOff"}`}></div>
      </div>
      <label htmlFor="toggle" className="toggleLabel">
        {name}
      </label>
    </button>
  )
}

export default Toggle
