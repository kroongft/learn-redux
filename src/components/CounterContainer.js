import React from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { decrease, increase, setDiff } from '../modules/counter';
import Counter from './Counter';

function CounterContainer() {
  // useSelector는 리덕스 스토어의 상태를 조회하는 Hook입니다.
  // state의 값은 store.getState() 함수를 호출했을 때 나타나는 결과물과 동일합니다.
  const { number, diff } = useSelector(state => ({
    number: state.counter.number,
    diff: state.counter.diff
  }), shallowEqual);

  // useSelector의 두번째 파라미터는 equalityFn 인데
  // 이전 값과 다음 값을 비교하여 true가 나오면 리렌더링을 하지 않고, false가 나오면 리렌더링을 합니다.
  // shallowEqual은 react-redux의 내장함수로써 객체안의 가장 겉에 있는 값들을 모두 비교해줍니다.

  // useDispatch는 리덕스 스토어의 dispatch를 함수에서 사용할 수 있게 해주는 Hook입니다.
  const dispatch = useDispatch();
  // 각 액션들을 디스패치하는 함수들을 만드세요.

  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = diff => dispatch(setDiff(diff));

  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  )
}

export default CounterContainer;