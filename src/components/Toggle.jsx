function Toggle({ name, isChecked, onToggle }) {
  return (
    <div onClick={onToggle} className="toggle-box prevent-select">
      <div
        className={`toggle ${isChecked ? "toggleOn" : ""}`}
        onClick={onToggle}>
        <div className={`switch ${isChecked ? "switchOn" : "switchOff"}`}></div>
      </div>
      <label htmlFor="toggle" className="toggleLabel">
        {name}
      </label>
    </div>
  )
}

export default Toggle
