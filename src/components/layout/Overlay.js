import { useState } from "react";

function Overlay(){
  const [fade, setFade] = useState(false);
  const [display, setDisplay] = useState({});
  let style = {}
  setTimeout(() => {
    setFade(true);
    setTimeout(() => {
      setDisplay({'display': 'none'})
    }, 2000);
  }, 1500);

  return (
    <div style={display} className={"overlay " + (fade ? 'fadeout' : '')}></div>
  )
}

export default Overlay;