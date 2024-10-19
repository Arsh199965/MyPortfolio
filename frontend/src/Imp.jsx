import React from "react";

const BrokenText = ({ text, cname }) => {
  return text.split("").map((char, index) => {
    if (char === "|") {
      return <br key={index}></br>;
    }
    return (
      <span key={index} className={cname}>
        {char}
      </span>
    );
  });
};

export default BrokenText;
