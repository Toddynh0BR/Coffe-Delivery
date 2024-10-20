import styled from "styled-components";

export const Container = styled.div`
padding-top: 8rem;
`

export const Main = styled.main`
width: 100%;

padding: 5rem 14rem;

align-items: top;
display: flex;
gap: 3rem;
`

export const Box = styled.div`
height: fit-content;
width: fit-content;

flex-direction: column;
display: flex;
gap: 2rem;

h4 {
 font-family: 'Baloo 2', sans-serif;
 font-size: 1.8rem;
 font-weight: bold;
 color: #403937;
}

h2 {
 font-family: 'Baloo 2', sans-serif;
 font-size: 3.2rem;
 font-weight: 800;
 color: #C47F17;
}

.afterSpan {
 font-family: 'Roboto', sans-serif;
 font-size: 2rem;
 color: #403937;
}

.title {
 flex-direction: column;
 display: flex;

 margin-bottom: 2rem;
}

.gradiantBox {
 width: 52.6rem;
 height: 27rem;

 padding: .1rem;
 border-radius: .6rem 3.6rem;
 background: rgb(219,172,44);
 background: linear-gradient(120deg, rgba(219,172,44,1) 0%, rgba(128,71,248,1) 100%);

 .box {
  height: 100%;
  width: 100%;

  flex-direction: column;
  display: flex;
  gap: 3.2rem;

  border-radius: .6rem 3.6rem;
  background-color: #FFFFFF;
  padding: 4rem;

  .row {
   align-items: center;
   display: flex;
   gap: 1.2rem;

   .icon {
    height: 3.2rem;
    width: 3.2rem;

    border-radius: 50%;
    justify-content: center;
    align-items: center;
    display: flex;

    svg {
     font-size: 1.6rem;
     color: #FAFAFA;
    }
   }

   .i1 {
    background-color: #8047F8;
   }
   .i2 {
    background-color: #DBAC2C;
   }
   .i3 {
    background-color: #C47F17;
   }

   p {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    color: #574F4D;

    strong {
     font-weight: bold;
    }
   }
  }
 }
}

.img {
margin-top: 10.5rem;
}
`

export const Info = styled.div`
width: 64rem;

background-color: #F3F2F2;
border-radius: .6rem;
padding: 4rem;

flex-direction: column;
display: flex;
gap: 1.6rem;

.title {
 width: 100%;

 margin-bottom: 1.6rem;
 display: flex;
 gap: .8rem;

 svg {
  font-size: 2.2rem;
  color: #C47F17;
 }

 p {
  font-family: 'Roboto', sans-serif;
  font-size: 1.4rem;
  color: #574F4D;

  strong {
   font-size: 1.6rem;
   color: #403937;
  }
 }
}

.input-wrapper {
 height: 4.2rem;
 width: 100%;

 input {
 height: 100%;

 background-color: #EDEDED;
 border: 1px solid #E6E5E5;
 border-radius: .4rem;
 outline: none;
 padding: 1rem;

 font-family: 'Roboto';
 font-size: 1.4rem;
 color: #574F4D;

 &:focus {
  border: 1px solid #C47F17;
 }
 }

 input[type=number]::-webkit-inner-spin-button, 
 input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none;
  margin: 0; 
 }
}

.inputs {
 align-items: center;
 display: flex;
 gap: 1.2rem;
}

.cep {
 width: 20rem;
}

.street {
 width: 100%;
}

.number {
 width: 20rem;
}

.complement {
 width: 34.8rem;
}

.comp {
 position: relative;

 p {
  position: absolute;
  right: 1rem;
  top: 35%;

  font-family: 'Roboto', sans-serif;
  font-style: italic;
  font-size: 1.2rem;
  color: #8D8686;
 }
}

.bairro {
 width: 20rem;
}

.city {
 width: 27.6rem;
}

.UF {
 width: 6rem;
}
`

export const Payment = styled.div`
width: 64rem;

background-color: #F3F2F2;
border-radius: .6rem;
padding: 4rem;

.title {
 width: 100%;

 margin-bottom: 1.6rem;
 display: flex;
 gap: .8rem;

 svg {
  font-size: 2.2rem;
  color: #8047F8;
 }

 p {
  font-family: 'Roboto', sans-serif;
  font-size: 1.4rem;
  color: #574F4D;

  strong {
   font-size: 1.6rem;
   color: #403937;
  }
 }
}

.forms {
 width: 100%;

 align-items: center;
 display: flex;
 gap: 1.2rem;
}

.payment {
 height: 5.1rem;
 width: 17.6rem;

 border: 1px solid transparent;
 background-color: #E6E5E5;
 border-radius: .6rem;
 padding: 1.5rem;

 align-items: center;
 display: flex;
 gap: 1rem;

 svg {
  font-size: 1.6rem;
  color: #8047F8;
 }

 p {
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  white-space: nowrap;
  font-size: 1.2rem;
  color: #574F4D;

  user-select: none;
 }

 &:hover {
  background-color: #D7D5D5;
  cursor: pointer;
 }
}

&[data-type="money"]{
 .money {
  background-color: #EBE5F9;
  border: 1px solid #8047F8;
 }
}
&[data-type="credit"]{
 .credit {
  background-color: #EBE5F9;
  border: 1px solid #8047F8;
 }
}
&[data-type="debit"]{
 .debit {
  background-color: #EBE5F9;
  border: 1px solid #8047F8;
 }
}
`

export const Orders = styled.div`
width: 44.8rem;

border-radius: .6rem 4.4rem;
background-color: #F3F2F2;
padding: 4rem;

flex-direction: column;
display: flex;
gap: 1.2rem;

h3 {
 font-family: 'Roboto', sans-serif;
 font-size: 1.6rem;
 color: #403937;
}

ul {
 min-height: 16rem;
 max-height: 20rem;
 overflow: auto;

 margin-bottom: 1.2rem;
 padding-right: 1rem;

 flex-direction: column;
 display: flex;
 gap: 2.4rem;
}

li {
 list-style: none;
 width: 100%;

 border-bottom: 1px solid #E6E5E5;
 padding: 1rem 0rem 2.4rem;

 align-items: center;
 position: relative;
 display: flex;
 gap: 1rem;

 img {
  height: 6.4rem;
  width: 6.4rem;
 }

 .others {
  flex-direction: column;
  display: flex;
  gap: 1rem;

  span {
   font-family: 'Roboto', sans-serif;
   font-size: 1.6rem;
   color: #403937;
  }

  .actions {
   align-items: center;
   display: flex;
   gap: .8rem;

   .quantity {
    width: fit-content;
    height: 3.2rem;

    background-color: #E6E5E5;
    border-radius: .6rem;
    padding: .8rem;

    align-items: center;
    display: flex;
    gap: 1rem;

    svg {
     font-size: 1.4rem;
     cursor: pointer;
     color: #8047F8;
    }

    P {
     font-family: 'Roboto', sans-serif;
     font-size: 1.6rem;
     color: #272221;
   
     user-select: none;
    }
   }

   .remove {
    height: 3.2rem;
    width: 9.1rem;

    border: 1px solid transparent;
    background-color: #E6E5E5;
    border-radius: .6rem;

    justify-content: center;
    align-items: center;
    display: flex;
    gap: .5rem;

    svg {
     font-size: 1.6rem;
     color: #8047F8;
    }

    p {
     font-family: 'Roboto', sans-serif;
     text-transform: uppercase;
     white-space: nowrap;
     font-size: 1.2rem;
     color: #574F4D;

     user-select: none;
    }

 &:hover {
  background-color: #D7D5D5;
  cursor: pointer;
 }
   }
  }
 }

 .price {
  font-family: 'Roboto', sans-serif;
  font-size: 1.6rem;
  font-weight: bold;
  color: #574F4D;

  position: absolute;
  top: 1rem;
  right: 0;
 }
}

.total1 {
 width: 100%;

 justify-content: space-between;
 align-items: center;
 display: flex;

 p {
  font-family: 'Roboto', sans-serif;
  font-size: 1.4rem;
  color: #574F4D;
 }
}

.total2 {
 width: 100%;

 justify-content: space-between;
 align-items: center;
 display: flex;

 p {
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 2rem;
  color: #403937;
 }
}

button {
 height: 4.6rem;
 width: 100%;

 background-color: #DBAC2C;
 border-radius: .6rem;
 margin-top: 1.2rem;
 border: none;

 font-family: 'Roboto', sans-serif;
 font-size: 1.4rem;
 font-weight: bold;
 color: #FFFFFF;

 &:hover {
  background-color: #C47F17;
  cursor: pointer;
 }
}
`