import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data);
  const [btn, setBtn] = useState(true);
  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        {btn ? <button onClick={() => {
          return (setPeople([]), setBtn(false))
        }}>clear all</button> :
          <button onClick={() => {
            return (
              setPeople(data), setBtn(true)
            )
          }}
          >refresh </button>
        }


      </section>
    </main >
  );
}

export default App;
