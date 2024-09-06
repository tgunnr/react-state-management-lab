// src/App.jsx
import { useState } from 'react'

import './App.css'

const Fighter = (props) => {
  
  const { name, price, strength, agility, img } = props
  return (
    <>
      <li key={price}>
        <p><img src={img}/></p>
        <p>{name}</p>
        <p>Price: {price}</p>
        <p>Strength: {strength}</p>
        <p>Agility: {agility}</p>
        <button onClick={() => props.handleAddFighter(props)}>Add</button> 
      </li>
    </>
  )
}

const Team = (props) => {
  
  const { name, price, strength, agility, img } = props
  return (
    <>
      <li key={price}>
        <p><img src={img}/></p>
        <p>{name}</p>
        <p>Price: {price}</p>
        <p>Strenght: {strength}</p>
        <p>Agility: {agility}</p>
        <button onClick={() => props.handleRemoveFighter(props)}>Remove</button> 
      </li>
    </>
  )
}

const App = () => {
  const [availableFighters, setAvailableFighters] = useState([
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
  ])
  const [team, setTeam] = useState([])
  
  const [money, setMoney] = useState(100)

  const [totalAgility, setTotalAgility] = useState(0)

  const [totalStrength, setTotalStrength] = useState(0)
  
  const handleAddFighter = (fighter) => {
    if (money >= fighter.price) {
      setMoney(money - fighter.price)
      setTeam([...team, fighter])
    } else {
      console.log("Not enough money")
    }
    setTotalStrength(totalStrength+fighter.strength)
    setTotalAgility(totalAgility+fighter.agility)
    setAvailableFighters(availableFighters.filter((zombieFighter) => zombieFighter.name !== fighter.name))
  }

  const handleRemoveFighter = (fighter) => {
    setMoney(money + fighter.price)
    setTotalStrength(totalStrength - fighter.strength)
    setTotalAgility(totalAgility - fighter.agility)
    setTeam(team.filter(teammate => teammate.name !== fighter.name))
    setAvailableFighters([...availableFighters, fighter])
  }

  return (
    <>
      <h2>Availble Money: {money}</h2>
        <section>
          <h2>Total Strength: {totalStrength}</h2>
          <h2>Total Agility: {totalAgility}</h2>
          {team.length === 0 ? (
            <h2>Pick some team members!</h2>) : (<h2>Team: </h2>)
          }
          <ul>
          {team.map((fighter, index) => (
            <Team key={index} {...fighter}
            handleRemoveFighter={handleRemoveFighter}
            />
          ))}
          </ul>
          <h2>Fighters:</h2>
          <ul>
          {availableFighters.map((fighter, index) => (
            <Fighter key={index} {...fighter}
            handleAddFighter={handleAddFighter}
            />
          ))}
          </ul>
        </section>
    </>
  )
}

export default App
