import React from "react";
import DirectionsDropdown from "./Dropdown/DirectionsDropdown";
import ExamTime from "./ExamTime/ExamTime";
import s from "./Header.module.scss";

async function Header() {
  return (
    <div className={s.container}>
      <div className={s.row}>
        <div className={s.examHeader}>
          <div className={s.column}>
            <div className={s.examSection}>
              <div className={s.dropdown}>
                <DirectionsDropdown />
              </div>
            </div>
          </div>
          <div className={s.column}>
            <ExamTime />
          </div>
          <div className={s.column}>
            <div className={s.examTool}>
              <p>Annotate :</p>
              <p>More :</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
