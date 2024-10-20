import styled from "styled-components";
import backgroundImage from "../../assets/Background.svg"

export const Container = styled.div`
padding-top: 8rem;
`

export const Intro = styled.div`
height: 54.4rem;
width: 100%;

background-image: url(${backgroundImage});
background-repeat: no-repeat;
background-position: center;
background-size: cover;

padding: 0 14rem;

grid-template-rows: 19.2rem 8.4rem;
grid-template-columns: 1fr 1fr;
justify-items: center;
align-content: center;
align-items: center;
grid-template-areas: 
"title image"
"items image";
display: grid;
row-gap: 7rem;

.Title {
 width: 58.8rem;

 grid-area: title;

 h2 {
 font-family: 'Baloo 2', sans-serif;
 line-height: 130%;
 font-size: 4.8rem;
 font-weight: 800;
 color: #272221;

 margin-bottom: 1.6rem;
 }

 span {
  font-family: 'Roboto', sans-serif;
  font-size: 2rem;
  color: #403937;
 }
}

.Items {
 width: 56.7rem;

 grid-template-columns: repeat(2, 1fr);
 column-gap: 4rem;
 row-gap: 2rem;
 display: grid;
 grid-area: items;

.item {
 align-items: center;
 display: flex;
 gap: 1.2rem;

 p {
  font-family: 'Roboto', sans-serif;
  white-space: nowrap;
  font-size: 1.6rem;
  color: #574F4D;
 }

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
  background-color: #C47F17;
 }
 .i2 {
  background-color: #574F4D;
 }
 .i3 {
  background-color: #DBAC2C;
 }
 .i4 {
  background-color: #8047F8;
 }
}
}

img {
 grid-area: image;
}
`

export const Main = styled.main`
width: 100%;

flex-direction: column;
display: flex;
gap: 3rem;

margin-bottom: 10rem;
padding: 0 14rem;

.Title {
 width: 100%;

 h3 {
  font-family: 'Baloo 2', sans-serif;
  line-height: 130%;
  font-size: 3.2rem;
  font-weight: 800;
  color: #272221;
 }
}

.products {
 width: 100%;

 grid-template-columns: repeat(4, 1fr);
 column-gap: 3.2rem;
 row-gap: 4rem;
 display: grid;
}


`