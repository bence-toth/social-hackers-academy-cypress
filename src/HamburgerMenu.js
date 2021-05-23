import "./HamburgerMenu.css";

const HamburgerMenu = ({ isOpen, onClick }) => (
  <button
    className="hamburgerMenu"
    data-settings-open={isOpen}
    onClick={onClick}
  >
    <div></div>
    <div></div>
    <div></div>
  </button>
);

export default HamburgerMenu;
