import React, { useEffect, useState } from "react";
import "./assets/styles/components/hero.scss";
import TypeWriter from "./typewriter";

export default function Hero({ enable }) {
  useEffect(() => {
    TypeWriter({
      words: ["yael cmp"],
      SpeedSchrtr: 100,
      stop: true,
      query: ".hero-t"
    });
    TypeWriter({
      words: [
        "Hi! its me, nice to meet you.",
        "i am a Frontend Developer ;)",
        "and i like to make 3d stuffs",
        "... so, just keep scrolling :)",
        "or click the button upside please :3",
        "     ",
      ],
      SpeedSchrtr: 90,
      SpeedWord: 1500,
      query: ".hero--p",
    });
  },[]);

  return (
    <div
      className={enable? "no-visible hero": "hero" }
    >
      <h3 className="hero--title hero-t"></h3>
      <div className=" hero--p"></div>
    </div>
  );
}
