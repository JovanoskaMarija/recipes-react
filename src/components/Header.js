import React from "react";
import '../style/Header.css';
import '@material/react-material-icon/dist/material-icon.css';

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="left">
          <div>
            <i className="material-icons menu">menu</i>
          </div>
          <div>
            <p className="title">Crunch Hub</p>
          </div>
        </div>
        <div className="right">
          <div className="">
            {/* <i className="fas fa-search"></i> */}
            <i className="material-icons search">search</i>
          </div>
          <div className="vertical-line"></div>
          <div className="">
            {/* <i className="far fa-user"></i> */}
            <i className="material-icons favourites">perm_identity</i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
