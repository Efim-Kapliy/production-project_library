import { useState } from 'react';

import classes from './Counter.module.scss';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1 className={classes.text}>{count}</h1>
      <button className={classes.button} onClick={increment}>
        increment
      </button>
      <button className={classes.button} onClick={decrement}>
        decrement
      </button>
    </div>
  );
};

export default Counter;
