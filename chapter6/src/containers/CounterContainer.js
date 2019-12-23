import React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { increase, decrease, setDiff } from '../modules/counter';
import Counter from '../components/Counter';

function CounterContainer() {
  // useSelector는 리덕스 스토어의 상태를 조회
  // state의 값은 store.getState() 함수를 호출했을 때 나타나는 결과물과 동일

  // 최적화 방법 2. shallowEqual 사용
  const { number, diff } = useSelector(
    state => ({
      number: state.counter.number,
      diff: state.counter.diff,
    }),
    shallowEqual,
  );

  // 최적화 방법 1.
  // const number = useSelector(state => state.counter.number);
  // const diff = useSelector(state => state.counter.diff);

  // useDispatch는 리덕스 스토어의 dispatch를 함수에서 사용할 수 있게!
  const dispatch = useDispatch();
  // 액션 디스패치
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
  );
}

export default CounterContainer;
