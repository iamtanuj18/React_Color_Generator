import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState();
  const bcg = rgb.join(",");
  const hex = rgbToHex(...rgb);
  const hexValue = `#${hexColor}`;
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 500);
    return () => clearTimeout(timeout);
  }, [alert]);
  return (
    <article
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
      className={`color ${index > 10 && `color-light`}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
    >
      <p className="percecnt-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert">copied to the clipboard</p>}
    </article>
  );
};

export default SingleColor;
