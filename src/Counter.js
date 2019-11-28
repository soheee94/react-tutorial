import React, { useReducer, Component } from 'react';

// 클래스형
class Counter extends Component{
    state = {
        counter : 0
    }
    handleIncrease = () =>{
      this.setState(state => ({
          counter : state.counter+1
      })) 
    }
    handleDecrease = () =>{
        this.setState(state => ({
            counter : state.counter-1
        }))
    }

    render(){
        return(
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleIncrease}>+1</button>
                <button onClick={this.handleDecrease}>-1</button>
            </div>
        )
    };
}

// 함수형
// function reducer(state, action){
//     switch (action.type){
//         case 'INCREMENT' :
//             return state +1;
//         case 'DECREMENT' :
//             return state-1;
//         default :
//             throw new Error('Unhandled action');
//     }
// }

// function Counter(){
//     const [number, dispatch] = useReducer(reducer, 0);
//     // const [number, setNumber] = useState(0);
//     // number를 0으로 하겠다 > 파라미터가 기본값
//     // setNumber는 현재 상태 업데이트
//     // useState 는 배열 반환 > 첫번째 현재 상태 / 두번째 변경 함수
//     // 배열 구조 분해
//     // const numberState = useState(0)
//     // const number = numberState[0]
//     // const setNumber = numberState[1]

//     const onIncrease = () => {
//         // setNumber(number + 1);
//         // setNumber(prevNumber => prevNumber+1); //성능 최적화와 관련
//         // console.log('+1');
//         dispatch({
//             type: 'INCREMENT'
//         })
//     }
//     const onDecrease = () => {
//         // setNumber(number -1 );
//         // console.log('-1');
//         dispatch({
//             type: 'DECREMENT'
//         })
//     }
//     return (
//         <div>
//             <h1>{number}</h1>
//             {/* 
//             onClick쓸 때 click 대문자
//             onIncrease() 이렇게 쓰면 실행되자마자 함수 호출, 우리는 클릭 될 때만 호출되길 원하기 때문에 ()를 쓰지 않는다.
//             ()를 쓰면 클릭 됬을 때 실행이 안됨
//             */}
//             <button onClick={onIncrease}>+1</button>
//             <button onClick={onDecrease}>-1</button>
//         </div>
//     )
// }

export default Counter;