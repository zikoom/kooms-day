import { useSelector } from "react-redux"

export default function Counter(){

  const count = useSelector((state) => {console.log('useSelecter state: ', state); return state.counter.value});
  console.log('state.count: ', count);
  return (
    <div>Counter</div>
  )
}