import "./ToggleButton.css";

const ToggleButton = ({ isOn, onToggle, label }) => (
  <button className="toggleButton" data-on={isOn} onClick={onToggle}>
    <div className="toggle">
      <div />
    </div>
    <div className="label">{label}</div>
  </button>
);

export default ToggleButton;
