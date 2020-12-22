import React, { useEffect } from "react";
import "./assets/styles/components/header.scss";
import TypeWriter from "./typewriter";
export default function Header({ callback }) {
  useEffect(() => {
    TypeWriter({
      words: ["click me", "click me", "[../..]}", "click me :)", '[.../42_:*-]'],
      SpeedSchrtr: 100,
      SpeedWord: 4000,
      query: ".header--b",
    });
  }, []);
  return (
    <div className="header">
      <img src="" alt="" className="header--logo" />
      <div className="header--box">
        <a className="header--link" href="/">
          hello <div className="link-a" />
        </a>
        <button
          className="header--link header--b"
          style={{ border: "1px white solid", background: "none" }}
          onClick={callback}
        >
          [+-/*]
          <div className="link-a" />
        </button>
      </div>
    </div>
  );
}
