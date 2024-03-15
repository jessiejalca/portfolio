function Toggle({ isChecked, onToggle }) {
  return (
    <div className={`toggle ${isChecked ? "toggleOn" : ""}`} onClick={onToggle}>
      <div className={`switch ${isChecked ? "switchOn" : "switchOff"}`}></div>
    </div>
  )
}

export default Toggle
