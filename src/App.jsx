// src/App.jsx
import { useState } from 'react'

import './App.css'

const team = []
const money = 100
const zombieFighters = [
  {
    name: 'Survivor',
    price: 12,
    strength: 6,
    agility: 4,
    img: 'https://via.placeholder.com/150/92c952',
  },
  {
    name: 'Scavenger',
    price: 10,
    strength: 5,
    agility: 5,
    img: 'https://via.placeholder.com/150/771796',
  },
  {
    name: 'Shadow',
    price: 18,
    strength: 7,
    agility: 8,
    img: 'https://via.placeholder.com/150/24f355',
  },
  {
    name: 'Tracker',
    price: 14,
    strength: 7,
    agility: 6,
    img: 'https://via.placeholder.com/150/d32776',
  },
  {
    name: 'Sharpshooter',
    price: 20,
    strength: 6,
    agility: 8,
    img: 'https://via.placeholder.com/150/1ee8a4',
  },
  {
    name: 'Medic',
    price: 15,
    strength: 5,
    agility: 7,
    img: 'https://via.placeholder.com/150/66b7d2',
  },
  {
    name: 'Engineer',
    price: 16,
    strength: 6,
    agility: 5,
    img: 'https://via.placeholder.com/150/56acb2',
  },
  {
    name: 'Brawler',
    price: 11,
    strength: 8,
    agility: 3,
    img: 'https://via.placeholder.com/150/8985dc',
  },
  {
    name: 'Infiltrator',
    price: 17,
    strength: 5,
    agility: 9,
    img: 'https://via.placeholder.com/150/392537',
  },
  {
    name: 'Leader',
    price: 22,
    strength: 7,
    agility: 6,
    img: 'https://via.placeholder.com/150/602b9e',
  },
];

const Fighters = (props) => {

  const { name, price, strength, agility, img } = props
  return (
    <>
          <li key={price}>
            <p><img src={img}/></p>
            <p>{name}</p>
            <p>Price: {price}</p>
            <p>Strenght: {strength}</p>
            <p>Agility: {agility}</p>
            {props.handleAddFighter 
            ? <button onClick={() => props.handleAddFighter(props)}>Add</button> 
            : <button onClick={() => props.handleRemoveFighter(props)}>Remove</button>
            }
          </li>
    </>
  )
}

const App = () => {
  const [availableFighters, setAvailableFighters] = useState(zombieFighters)
  const [unavailbleFighters, setUnavailbleFighters] = useState(team)
  
  const handleAddFighter = (fighter) => {
    console.log(fighter)
    setUnavailbleFighters([...unavailbleFighters, fighter])
    setAvailableFighters(availableFighters.filter(el => el.price !== fighter.price))
  }

  const handleRemoveFighter = fighter => {
    setAvailableFighters(unavailbleFighters.filter(el => el.price !== fighter.price))
    setAvailableFighters([...availableFighters, fighter])
  }

  return (
    <>
      <h2>Availble Money: {money}</h2>
      <h2>Fighters:</h2>
        <section>
          <ul>
          {zombieFighters.map((fighter) => (
            <Fighters key={fighter.name} {...fighter}
            handleAddFighter={handleAddFighter}
            handleRemoveFighter={handleRemoveFighter}
            />
          ))}
          </ul>
        </section>
    </>
  );
}

export default App
