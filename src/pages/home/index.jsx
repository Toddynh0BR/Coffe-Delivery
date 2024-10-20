import * as S from "./style";

import { useState } from "react";

import { Header } from "../../components/header";
import { Card } from "../../components/card";

import { PiPackageFill, PiCoffeeFill, PiTimerFill } from "react-icons/pi";
import { FaShoppingCart } from "react-icons/fa";
import Image from "../../assets/Imagem.svg";

import ChocolateQuente from "../../assets/Type=Chocolate Quente.svg";
import CafécomLeite from "../../assets/Type=Café com Leite.svg";
import Cremoso from "../../assets/Type=Expresso Cremoso.svg";
import Tradicional from "../../assets/Type=Expresso.svg";
import Capuccino from "../../assets/Type=Capuccino.svg";
import Americano from "../../assets/Type=Americano.svg";
import Macchiato from "../../assets/Type=Macchiato.svg";
import Gelado from "../../assets/Type=Café Gelado.svg";
import Mocaccino from "../../assets/Type=Expresso.svg";
import Havaiano from "../../assets/Type=Havaiano.svg";
import Irlandês from "../../assets/Type=Irlandês.svg";
import Cubano from "../../assets/Type=Cubano.svg";
import Latte from "../../assets/Type=Latte.svg";
import Árabe from "../../assets/Type=Árabe.svg";

export function Home(){
    const [products, setProducts] = useState([
     {
      id: 1,
      img: Tradicional,  
      name: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
      tags: ['Tradicional']
     },
     {
      id: 2,
      img: Americano,  
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: 15.5,
      tags: ['Tradicional']
     },
     {
      id: 3,
      img: Cremoso,  
      name: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      price: 10,
      tags: ['Tradicional']
     },
     {
      id: 4,
      img: Gelado,  
      name: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      price: 9.9,
      tags: ['Tradicional', 'Gelado']
     },
     {
      id: 5,
      img: CafécomLeite,  
      name: 'Café com Leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      price: 4,
      tags: ['Tradicional', 'Com leite']
     },
     {
      id: 6,
      img: Latte,  
      name: 'Latte',
      description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      price: 15,
      tags: ['Tradicional', 'Com leite']
     },
     {
      id: 7,
      img: Capuccino,  
      name: 'Capuccino',
      description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
      price: 9.9,
      tags: ['Tradicional', 'Com leite']
     },
     {
      id: 8,
      img: Macchiato,  
      name: 'Macchiato',
      description: 'Café expresso misturado com um pouco de leite quente e espuma',
      price: 8.9,
      tags: ['Tradicional', 'Com leite']
     },
     {
      id: 9,
      img: Mocaccino,  
      name: 'Mocaccino',
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      price: 7.5,
      tags: ['Tradicional', 'Com leite']
     },
     {
      id: 10,
      img: ChocolateQuente,  
      name: 'Chocolate Quente',
      description: 'Bebida feita com chocolate dissolvido no leite quente e café',
      price: 5.5,
      tags: ['Tradicional', 'Com leite']
     },
     {
      id: 11,
      img: Cubano,  
      name: 'Cubano',
      description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
      price: 20,
      tags: ['Tradicional', 'Alcóolico','Gelado']
     },
     {
      id: 12,
      img: Havaiano,  
      name: 'Havaiano',
      description: 'Bebida adocicada preparada com café e leite de coco',
      price: 15,
      tags: ['Especial']
     },
     {
      id: 13,
      img: Árabe,  
      name: 'Árabe',
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      price: 10,
      tags: ['Especial']
     },
     {
      id: 14,
      img: Irlandês,  
      name: 'Irlandês',
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      price: 2.5,
      tags: ['Especial', 'Alcóolico']
     },
    ]);
    const [refresh, setRefresh] = useState(1);

    return(
     <S.Container>
      <Header
       refresh={refresh}
      />

      <S.Intro>
       
       <div className="Title">
        <h2>Encontre o café perfeito para qualquer hora do dia</h2>
        <span>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>
       </div>

       <div className="Items">
        <div className="item">
         <div className="icon i1">
          <FaShoppingCart/>
         </div>
         <p>Compra simples e segura</p>
        </div>

        <div className="item">
         <div className="icon i2">
          <PiPackageFill/>
         </div>
         <p>Embalagem mantém o café intacto</p>
        </div>

        <div className="item">
         <div className="icon i3">
          <PiTimerFill/>
         </div>
         <p>Entrega rápida e rastreada</p>
        </div>

        <div className="item">
         <div className="icon i4">
          <PiCoffeeFill/>
         </div>
         <p>O café chega fresquinho até você</p>
        </div>

       </div>

       <img src={Image} />
      </S.Intro>

      <S.Main>
       <div className="Title">
        <h3>Nossos cafés</h3>
       </div>

       <div className="products">
        { products.length ?
         products.map(item => (
         <Card
          id={item.id}
          key={item.id}
          img={item.img}
          name={item.name}
          tags={item.tags}
          price={item.price}
          description={item.description}
          onclick={()=> setRefresh(prevState => prevState + 1)}
         />
        )) 
        :
         null
        }
       </div>
      </S.Main>
     </S.Container>
    )
}