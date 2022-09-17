import { debounce } from 'lodash';
import React, { useRef } from 'react';

function Debounce() {
  const inputRef = useRef(null);

  const fetchExpensiveAPI = debounce((e) => {
    const currentInput = e.target.value;

    if (!currentInput) return;
    console.log('EXPENSIVE CALCULATION');
  }, 600);

  // const debounceFunction = debounce(fetchExpensiveAPI, 600);

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        onChange={fetchExpensiveAPI}
        placeholder="Search me"
      />
    </div>
  );
}

export default Debounce;
