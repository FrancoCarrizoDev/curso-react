import { useEffect } from "react";
import { useState } from "react";

export default function Home() {
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = (event) => {
    setWidth(event.target.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const onInput = (event) => {
    console.log(event);
  };

  return (
    <div>
      <h1>{width}</h1>

      <input onKeyDown={onInput} />
    </div>
  );
}
