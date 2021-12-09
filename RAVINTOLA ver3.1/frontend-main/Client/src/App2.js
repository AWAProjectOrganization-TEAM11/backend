import React, {useState, useEffect } from "react";
import "./styles.css";

import ProgressBar from './Progress'

export default function App() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue(oldValue => {
        const newValue = oldValue + 10;

        if (newValue === 100) {
          clearInterval(interval);
        }

        return newValue;
          

      });
    }, 1000);
  }, []);
  return <ProgressBar value={value} max={100} />;
}
