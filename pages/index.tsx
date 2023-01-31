import { useState } from 'react';
import { Select, SelectOption } from '../components/select';
import styles from '../styles/Home.module.css';

const options = [
  { label: "First", value: 1 },
  { label: "Second", value: 2 },
  { label: "Third", value: 3 },
  { label: "Fourth", value: 4 },
  { label: "Fifth", value: 5 },
]

export default function Home() {

  const [value1, setValue1] = useState<SelectOption[]>([options[0]])
  const [value2, setValue2] = useState<SelectOption | undefined>(options[0])

  return (
    <div className={styles.container}>
      
      <Select
        multiple
        options={options}
        value={value1}
        onChange={o => setValue1(o)}
      />
      <br />
      <Select options={options} value={value2} onChange={o => setValue2(o)} />
      

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
