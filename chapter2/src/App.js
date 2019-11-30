import React, { useState } from 'react';
import CheckBox from './component/CheckBox';

function App() {
  const [check, setCheck] = useState(false);
  const onChange = e => {
    setCheck(e.target.checked);
  };
  return (
    <div>
      <CheckBox onChange={onChange} checked={check}></CheckBox>
      <p>
        <b>check : </b>
        {check ? 'true' : 'false'}
      </p>
    </div>
  );
}

export default App;
