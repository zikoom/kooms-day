import { useState } from "react";

function Overlay(){
  const [fade, setFade] = useState(false);
  setTimeout(() => {
    setFade(true);
  }, 1500);

  return (
    <div className={"overlay " + (fade ? 'fadeout' : '')}></div>
  )
}

export default Overlay;