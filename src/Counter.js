import React, { useState} from 'react';

function Counter(){
    const onIncrease = () => {
        console.log('+1');
    }
    const onDecrease = () => {
        console.log('-1');
    }
    return (
        <div>
            <h1>0</h1>
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