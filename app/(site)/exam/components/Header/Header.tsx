import React from "react";
import DirectionsDropdown from "./Dropdown/DirectionsDropdown";
import ExamTime from "./ExamTime/ExamTime";
import P from "./../../../components/P/P";
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
              <P appearance="grey">Annotate :</P>
              <P appearance="grey">More :</P>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
