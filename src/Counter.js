import React, { useState } from 'react';

function Counter(){
    const [number, setNumber] = useState(0);
    // number를 0으로 하겠다 > 파라미터가 기본값
    // setNumber는 현재 상태 업데이트
    // useState 는 배열 반환 > 첫번째 현재 상태 / 두번째 변경 함수
    // 배열 구조 분해
    // const numberState = useState(0)
    // const number = numberState[0]
    // const setNumber = numberState[1]

    const onIncrease = () => {
        // setNumber(number + 1);
        setNumber(prevNumber => prevNumber+1); //성능 최적화와 관련
        // console.log('+1');
    }
    const onDecrease = () => {
        setNumber(number -1 );
        // console.log('-1');
    }
    return (
        <div>
            <h1>{number}</h1>
            {/* 
            onClick쓸 때 click 대문자
            onIncrease() 이렇게 쓰면 실행되자마자 함수 호출, 우리는 클릭 될 때만 호출되길 원하기 때문에 ()를 쓰지 않는다.
            ()를 쓰면 클릭 됬을 때 실행이 안됨
            */}
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}

export default Counter;