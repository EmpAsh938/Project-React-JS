<<<<<<< HEAD
import React from 'react';
import './App.css';
import Info from './Info'

const data = [
  {
    id: 1,
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
    name: 'Bertie Yates',
    age: '29 years',
  },
  {
    id: 2,
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
    name: 'Hester Hogan',
    age: '32 years',
  },
  {
    id: 3,
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    name: 'Larry Little',
    age: '36 years',
  },
  {
    id: 4,
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    name: 'Sean Walsh ',
    age: '34 years',
  },
  {
    id: 5,
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    name: 'Lola Gardner',
    age: '29 years',
  },
]

function App() {
  const [person, setPerson] = React.useState(data);

  return (
    <div className="main">
      <h1>{person.length} birthdays today</h1>
      {person.map(value => {
        return (
          <Info key={value.id} {...value} />
        )
      })}
      <button onClick={() => setPerson([])}>
        Clear All
      </button>
    </div>

  )
}

export default App;


=======
import { useState } from "react";
import People from "./People";
import { data } from "./data";

function App() {
  const [newData, setNewData] = useState(data);
  return (
    <main>
      <section>
        <h3> {newData.length} birthdays today</h3>
        <div className="people-container">
          {newData.map((item) => {
            return <People key={item.id} {...item} />;
          })}
          <button onClick={() => setNewData([])}>Clear All</button>
        </div>
      </section>
    </main>
  );
}

export default App;
>>>>>>> f364450 (updated projects)
