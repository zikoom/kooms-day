import { useState } from "react";
import { useInput } from "../hooks/useInput";

function NicoHook(){

  const nameInputHook = useInput('koom', (text) => {return text.length <= 10});

  const contents = [
    {
      tab: "Section 1",
      content: "section 1 content"
    },
    {
      tab: "Section 2",
      content: "section 2 content"
    }
  ]

  // const useTabs = (initialTab, allTabs) => {

  //   if(!allTabs || !Array.isArray(allTabs) || !allTabs.length){
  //     return;
  //   }

  //   const [currentIndex, setCurrentIndex] = useState(initialTab);

  //   return {
  //     currentItem: allTabs[currentIndex],
  //   };

  //   const tabs = useTabs(0, contents);

  // }

  return (
    <div className="NicoHook">
      <div className="useinputhook">
        <h1>Hello</h1>
        <input placeholder="Name" {...nameInputHook}/>
      </div>
      <div className="usetabhook">
        {contents.map(section => <button key={section.tab}>{section.tab}</button>)}
        <div>
          {}
        </div>
      </div>
    </div>
  )
}

export default NicoHook;