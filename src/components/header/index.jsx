import styled from "styled-components";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { FaLocationDot } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import Logo from "../../assets/Logo.svg";

const Container = styled.header`
height: 8rem;
width: 100%;

position: fixed;
z-index: 5;
top: 0;

justify-content: space-between;
align-items: center;
display: flex;

background-color: #ffff;
padding: 3.2rem 14rem;

.actions {
align-items: center;
display: flex;
gap: 1.2rem;


.location {
 width: fit-content;
 height: 3.8rem;

 align-items: center;
 display: flex;
 gap: .4rem;

 background-color: #EBE5F9;
 border-radius: .6rem;
 padding: .8rem;

 svg {
  font-size: 2rem;
  color: #8047F8;
 }

 p {
  font-family: 'Roboto', sans-serif;
  font-size: 1.4rem;
  color: #4B2995;

  user-select: none;
 }
}

.cart {
 position: relative;
 height: 3.8rem;
 width: 3.8rem;

 justify-content: center;
 align-items: center;
 display: flex;

 background-color: #F1E9C9;
 border-radius: .6rem;

 svg {
  font-size: 2.2rem;
  color: #C47F17;
 }

 .counter {
  height: 2rem;
  width: 2rem;

  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  color: #FFFFFF;

  background-color: #C47F17;
  border-radius: 50%;

  justify-content: center;
  align-items: center;
  display: flex;

  position: absolute;
  right: -.8rem;
  top: -.8rem;
 }

 &:hover {
  filter: brightness(90%);
  cursor: pointer;

  .counter {
   filter: brightness(110%);
  }
 }
}

}
`

export function Header({refresh}){
    const [counter, setCounter] = useState(0);

    useEffect(()=> {
      const Items = JSON.parse(localStorage.getItem('Items'));

      if (Items) setCounter(Items.length || 0);
      
    }, [refresh])

    return(
     <Container>
      <Link to='/'>
       <img src={Logo}/>
      </Link>

      <div className="actions">
       <div className="location">
        <FaLocationDot/>
        <p>Caruaru, PE</p>
       </div>

      <Link to='/check'>
       <div className="cart">
        { counter ? 
         <div className="counter">
          {counter}
         </div>
        :
         null
        }
        <FaShoppingCart />
       </div>
      </Link>
      </div>
     </Container>
    )
};