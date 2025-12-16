import { useEffect, useState } from "react";
import { Card } from "../assets/Components/Card.jsx";

const Home = () => {
  

  const [weapon, setWeapon] = useState([])

  const getWeapons = async () => {

    try {
      const response = await fetch("https://valorant-api.com/v1/weapons")
      if (response.ok) {
        const information = await response.json()
        setWeapon(information.data)
      } else {
        alert("no se puedo encontrar las armas", response.statusText)
      }

    } catch (error) {
      alert("paso algo", error)
    }
  }

  useEffect(() => {
    getWeapons()
  })

  return (
    <>
      <div className="container-fluid h-100"></div>
      <div className="row aling-items-center"></div>
      <div className="col d-flex justify-content-center text-center"></div>
      <h2>weapons api</h2>

      <div className="row"> {weapon.map((weapon, index) => {
        return (
          <div className="col d-flex justify-content-center" key={index}>
            <Card item={weapon}/>
          </div>
          
        )
      })}</div>
      
      


    </>
  );
};

export default Home;
