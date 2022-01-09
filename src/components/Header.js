import "./Header.css";
import punkLogo from "../assets/header/cryptopunk-logo.png";
import searchIcon from "../assets/header/search.png";
import themeSwitch from "../assets/header/theme-switch.png";
function Header() {
  return (
    <header className="header">
      <div className="logoContainer">
        <img src={punkLogo} className="punkLogo" alt="" />
      </div>

      <div className="searchBar">
        <div className="searchIconContainer">
          <img src={searchIcon} alt="" />
        </div>
        <input
          type="text"
          className="searchInput"
          placeholder="Collection, Item or User..."
        />
      </div>

      <div className="headerItems">
        <p>Drops</p>
        <p>MarketPlace</p>
        <p>Create</p>
      </div>

      <div className="headerActions">
        <div className="themeSwitchContainer">
          <img src={themeSwitch} alt="" />
        </div>
      </div>
      <div className="loginButton">GET IN</div>
    </header>
  );
}

export default Header;
