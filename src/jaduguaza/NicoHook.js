import { useEffect, useState } from "react";
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

  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);

  const {currentItem, changeItem} = useTab(1, contents);
  const nameInputHook = useInput('', (text) => {return text.length <= 10});

  const sayHello = () => {console.log('hallo~ App renderd.')}
  useEffect(sayHello, [aNumber])

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
      <div className="use-effect">
        <button onClick={() => setNumber(cur => cur + 1)}>{number}</button>
        <button onClick={() => setAnumber(cur => cur + 1)}>{aNumber}</button>
      </div>
    </div>
  )
}

export default NicoHook;