import styled from "styled-components";

import { useState } from "react";

import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { FiMinus, FiPlus } from "react-icons/fi";

const Container = styled.div`
width: 25.6rem;

flex-direction: column;
align-items: center;
display: flex;
gap: 1rem;

background-color: #F3F2F2;
border-radius: .6rem 3.6rem;
padding: 0 1.5rem 2rem;

img {
 margin-top: -2rem;
 
 user-select: none;
}

.tags {
 width: 100%;

 justify-content: center;
 align-items: center;
 flex-wrap: wrap;
 display: flex;
 gap: .4rem;

 .tag {
  width: fit-content;
  height: 2.1rem;

  justify-content: center;
  align-items: center;
  display: flex;

  background-color: #F1E9C9;
  border-radius: 2.5rem;
  padding: 0 1rem;

  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  font-weight: bold;
  color: #C47F17;
  font-size: 1rem;

  user-select: none;
 }
}

h4 {
 font-family: 'Baloo 2', sans-serif;
 line-height: 130%;
 font-weight: bold;
 color: #403937;
 font-size: 2rem;
}

p {
 font-family: 'Roboto', sans-serif;
 font-size: 1.4rem;
 color: #8D8686;

 text-align: center;
}

.buy {
 width: 100%;

 margin-top: 2rem;

 justify-content: space-between;
 display: flex;

 p {
  font-size: 1.4rem;
  color: #574F4D;

  strong {
   font-family: 'Baloo 2', sans-serif;
   font-weight: 800;
   font-size: 2.4rem;
  }
 }

 .functions {
  align-items: center;
  display: flex;
  gap: .8rem;
 }

 .quantity {
  width: fit-content;
  height: 3.8rem;

  background-color: #E6E5E5;
  border-radius: .6rem;
  padding: 1rem;

  align-items: center;
  display: flex;
  gap: 1rem;

  svg {
   color: #8047F8;
   font-size: 2rem;
   cursor: pointer;
  }

  span {
   font-family: 'Roboto', sans-serif;
   font-size: 1.6rem;
   color: #272221;
   
   user-select: none;
  }
 }

 .add {
  height: 3.8rem;
  width: 3.8rem;

  justify-content: center;
  align-items: center;
  display: flex;

  background-color: #4B2995;
  border-radius: .6rem;

  svg {
   font-size: 2.2rem;
   color: #F3F2F2;
  }

  &:hover {
   cursor: pointer;
   filter: brightness(90%);
  }
 }
}
`

export function Card({id, img, name, description, price, tags, onclick}){
    const [quantity, setQuantity] = useState(1);

    function handlePlus() {
     setQuantity(prevState => prevState + 1)
    };

    function handleMinus() {
     if (quantity == 1) return;

     setQuantity(prevState => prevState - 1)
    };

    function handleAdd() {
      let Items = JSON.parse(localStorage.getItem('Items'));
    
      if (!Items) Items = [];
    
      const existingItemIndex = Items.findIndex(item => item.id === id);
    
      if (existingItemIndex !== -1) {

        Items[existingItemIndex].quantity += quantity;
      } else {

        Items.push({
          id,
          img,
          name,
          price,
          quantity
        });
      }
    
      localStorage.setItem('Items', JSON.stringify(Items));
      setQuantity(1);
    }
    
    function formatarComoDecimal(valor) {
        const formatador = new Intl.NumberFormat('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    
        return formatador.format(valor);
    };

    return(
     <Container>
      <img src={img} alt={String(img)} />
      <div className="tags">
       { tags ? 
         tags.map((item, index) => (
         <div className="tag" key={index}>
          {item}
         </div>
        ))
       :
        null
       }
      </div>
      <h4>{name}</h4>
      <p>{description}</p>

      <div className="buy">
        <p>R$ <strong>{formatarComoDecimal(price)}</strong></p>

        <div className="functions">
         <div className="quantity">
          <FiMinus onClick={handleMinus}/>
          <span>{quantity}</span>
          <FiPlus onClick={handlePlus}/>
         </div>

         <div className="add" onClick={()=> {handleAdd(); onclick()}}>
          <PiShoppingCartSimpleFill/>
         </div>
        </div>
      </div>
     </Container>
    )
}