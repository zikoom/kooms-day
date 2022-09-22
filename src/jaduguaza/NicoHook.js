import { useState } from "react";
import { useInput } from "../hooks/useInput";

function NicoHook(){



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

  const useTab = (initialTab, allTabs) => {
    initialTab = initialTab >= allTabs.length ? allTabs.length - 1 : initialTab;
    const [currentIndex, setCurrentIndex] = useState(initialTab);


    if(!allTabs || !Array.isArray(allTabs) || !allTabs.length){
      return;
    }

    const changeItem = (idx) => {
      console.log('changeItem in: ', idx);
      idx = idx >= allTabs.length ? allTabs.length - 1 : idx;
      setCurrentIndex(idx);
    }

    return {
      currentItem: allTabs[currentIndex],
      changeItem: changeItem
    };
  }

  const {currentItem, changeItem} = useTab(1, contents);
  const nameInputHook = useInput('', (text) => {return text.length <= 10});

  return (
    <div className="NicoHook">
      <div className="useinputhook">
        <h1>Hello</h1>
        <input placeholder="Name" {...nameInputHook}/>
      </div>
      <div className="usetabhook">
        {contents.map((section, idx) => <button onClick={() => {changeItem(idx)}} key={section.tab}>{section.tab}</button>)}
        <div>{currentItem.content}</div>
      </div>
    </div>
  )
}

export default NicoHook;