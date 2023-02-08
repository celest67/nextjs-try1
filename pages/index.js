import React, { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [counter, setCounter] = useState(0)

  const handleOnClick = () => { 
    setCounter(counter + 1)
   }

  return (
    <div className={styles.container}>
     <h1>This is <span id="counter">{counter}</span></h1>
     <button id="buttonAdd" onClick={handleOnClick}>Add</button>
    </div>
  )
}