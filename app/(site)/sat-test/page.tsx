import React from "react";
import Link from "next/link";
import Button from "../components/Button/Button";
import P from "../components/P/P";
import s from "./SatText.module.scss";

interface SatInfoItemProps {
  title: string;
  content: string;
}

function SatInfoItem({ title, content }: SatInfoItemProps): JSX.Element {
  return (
    <div className={s.satInfoItem}>
      <h3>{title}</h3>
      <P appearance="white">{content}</P>
    </div>
  );
}

async function SatText() {
  return (
    <div className={s.satTest}>
      <div className={s.satTitle}>
        <h1>Sat Test Preview</h1>
      </div>

      <div className={s.satContent}>
        <div className={s.satInfo}>
          <SatInfoItem
            title="Explore the Morooq App"
            content="The Morooq app is a free, official SAT® practice resource that allows you to take a full-length practice test, score your results, and get personalized practice recommendations."
          />
          <SatInfoItem
            title="Take Your Time"
            content="The SAT is a timed test, so allow yourself 3 hours and 20 minutes for the entire test. If you have the time, take a few minutes to look over the test. Try to relax and stay calm."
          />
          <SatInfoItem
            title="Test Your Assistive Technology"
            content="If you’re approved to test with accommodations, your testing experience may differ from the standard test experience."
          />
        </div>
        <div className={s.navButtons}>
          <Link href="/">
            <Button appearance="pink">Prev</Button>
          </Link>
          <Link href="/exam">
            <Button appearance="pink">Next</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SatText;
