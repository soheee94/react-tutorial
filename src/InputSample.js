import React, { useState, useRef } from 'react';


function InputSample(){
    const [inputs, setInputs] = useState({
        name : '',
        nickname : ''
    })
    const { name, nickname } = inputs;
    const nameInput = useRef();
    const onChange = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs, 
            [name] : value
        })
        // 기존상태를 복사하고, 새로운 상태를 덮어씌우기! > 불변성을 지킨다
        // 대괄호를 써주면 저 안에 name이 될 수도 있고, nickname이 될 수도 있다
    }
    const onReset = () => {
        setInputs({
            name : '',
            nickname : ''
        });

        nameInput.current.focus();
    }
    return(
        <div>
            <input placeholder="이름" name="name" onChange={onChange} value={name} ref={nameInput}/>
            <input placeholder="닉네임" name="nickname" onChange={onChange} value={nickname}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    )
}

export default InputSample;