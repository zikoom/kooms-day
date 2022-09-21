
import { useState } from "react";
import PropsChild from "./PropsChild";

function PropsParent(){

  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  const onNameChange = (e) => {setName(e.target.value)}
  const onAgeChange = (e) => {setAge(e.target.value)}

  return (
    <div>
      <div>
        <label for="name">이름을 적어주세용~ </label>
        <input type="text" id="name" onChange={onNameChange} value={name}/>
        <br/>
        <label for="age">나이를 적어주세용~ </label>
        <input type="text" id="age" onChange={onAgeChange} value={age} />


      </div>
      <div>
        {
          (age && name ? <PropsChild name={name} age={age} /> : null)
        }
      </div>
    </div>
  )
}

export default PropsParent;