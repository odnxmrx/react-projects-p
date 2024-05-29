import React, { useEffect, useState } from "react";
import styles from "./RandomColor.module.css";

function RandomColor() {

  //type of code generator
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");


  function randomNumberGenerator(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    /**
     * To create a # followed with 6 hexadecimal numbers
     * 0-9 A-F
    */
    const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hexValues[randomNumberGenerator(hexValues.length)];
    }

    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const r = randomNumberGenerator(256);
    const g = randomNumberGenerator(256);
    const b = randomNumberGenerator(256);

    setColor(`rgb(${r}, ${g}, ${b})`)
  }

  //force update on new color generation when toggle the "hex" / "rgb" button selection
  useEffect(() => {
    typeOfColor === "hex" ?
      handleCreateRandomHexColor()
      :
      handleCreateRandomRgbColor();
  }, [typeOfColor])

  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      background: color,
    }}>
      {/* className={styles.container}> */}
      <button onClick={typeOfColor === "hex" ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>Generate Random Color</button>
      <button onClick={() => setTypeOfColor("hex")}>Generate HEX Random Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Generate RGB Random Color</button>


      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <h1>{typeOfColor === "hex" ? "HEX Color:" : "RGB Color:"}</h1>
        <br />
        <h2>{color}</h2>
      </div>

    </div>
  )
}

export default RandomColor;
