import "./ToggleButton.css";

const ToggleButton = ({ isOn, onToggle, label, dataTestid }) => (
  <button
    data-test-id={dataTestid}
    data-on={isOn}
    className="toggleButton"
    onClick={onToggle}
  >
    <div className="toggle">
      <div />
    </div>
    <div className="label">{label}</div>
  </button>
);

export default ToggleButton;
