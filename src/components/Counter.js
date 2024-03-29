import React from "react"

const Counter = ({number, diff, onIncrease, onDecrease, onSetDiff}) => {
  // e.target.value 의 타입은 문자열이기 때문에 숫자로 변환
  const onChange = e => {
    console.log(e)
    onSetDiff(parseInt(e.target.value, 10));
  }
  return (
    <div>
      <h1>{number}</h1>
      <div>
        <input type="number" value={diff} min="1" onChange={onChange} />
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
      </div>
    </div>
  )
}

export default Counter;