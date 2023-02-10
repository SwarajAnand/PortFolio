import React, { useState } from "react";
import "./css/header.css";
import Mobile from "./Mobile";
import Web from "./Web";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header">
      <div className="logo"> Developer</div>
      <div className="menu">
        <div className="web-menu">
          <Web />
        </div>
        <div className="mobile-menu">
          {/* <Mobile /> */}
          <div onClick={() => setIsOpen(!isOpen)}>
            <i class="fi fi-rr-menu-burger menu-icon"></i>
          </div>
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  );
}

export default Header;
