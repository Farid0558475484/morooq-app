"use client";
import React, { useState } from "react";
import Button from "../../../../components/Button/Button";
import s from "./Dropdown.module.scss";

function DirectionsDropdown() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevOpen) => !prevOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <>
      <Button appearance="pink" onClick={toggleDropdown}>
        Directions
      </Button>
      {isDropdownOpen && (
        <div className={s.dropdownMenu}>
          <div className={s.dropdownMenuItem}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <Button appearance="pink" onClick={closeDropdown}>
              Close
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

export default DirectionsDropdown;
