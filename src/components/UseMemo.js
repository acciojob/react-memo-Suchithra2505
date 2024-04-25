import React, { useState, useMemo } from 'react';

const UseMemo = () => {
  const [count, setCount] = useState(0);

  const isEven = useMemo(() => {
    return count % 2 === 0;
  }, [count]);

  return (
    <div id="calc">
      <h2>UseMemo Example</h2>
      <p>Counter: {count}</p>
      <p>{isEven ? 'Even' : 'Odd'}</p>
      <button onClick={() => setCount(count + 1)} id="incr-cnt">{count}</button>
    </div>
  );
};

export default UseMemo;
