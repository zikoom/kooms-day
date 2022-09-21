
import PropsChild from "./PropsChild";

function PropsParent(){
  let name = "haha";
  let age = 50;

  return (
    <div>
      <div>

      </div>
      <div>
        <h1>프롭스 !!</h1>
        <PropsChild name={name} age={age} />
      </div>
    </div>
  )
}

export default PropsParent;