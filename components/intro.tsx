import { SITE_TITLE_SUFFIX } from "../lib/constants";
import React, { Component } from "react";
import { CSSProperties, useEffect, useState } from "react";

let slogans: string[] = [
  "Personal Slogan Goes Here",
  "Just here for the buffet.",
  "This is another intro here",
  "5G cured my hiccups.",
  "Taco Tuesdays are back!",
];

let getRand: () => string = function () {
  return slogans[Math.floor(Math.random() * slogans.length)];
};

function Intro() {
  const [displayText, setText] = useState("");

  useEffect(() => setText(getRand()), []);

  const style: CSSProperties = {
    visibility: displayText.length == 0 ? "hidden" : "visible",
  };

  return (
    <section className="flex-col md:flex-col flex items-left md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-5xl font-bold tracking-tighter leading-tight md:pr-8">
        {SITE_TITLE_SUFFIX}
      </h1>
      <h2 style={style}>{displayText}</h2>
    </section>
  );
}

export default Intro;
