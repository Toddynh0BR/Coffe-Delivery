import * as S from "./style";

import { useState, useEffect, useRef } from "react";
import 'jquery-mask-plugin';
import $ from 'jquery';

import { PiMapPinLine, PiCurrencyDollar, PiCreditCard, PiMoney, PiBank, PiTrash, PiMapPinFill, PiTimerFill } from "react-icons/pi";
import { FiMinus, FiPlus } from "react-icons/fi";
import man from "../../assets/Illustration.svg";

import { Header } from "../../components/header";

export function Checkout(){
    const [confirmed, setConfirmed] = useState(false);
    const [payment, setPayment] = useState('');
    const [refresh, setRefresh] = useState(1);
    const [orders, setOrders] = useState([]);

    const [uf, setUF] = useState('');
    const [cep, setCep] = useState('');
    const [city, setCity] = useState('');
    const [neigh, setNeigh] = useState('');
    const [street, setStreet] = useState('');
    const [number, setNumber] = useState('');
    const [complement, setComplement] = useState('');

    const inputRef = useRef(null);

    function formatarComoDecimal(valor) {
        const formatador = new Intl.NumberFormat('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    
        return formatador.format(valor);
    };

    function calcularTotal(items) {
        return items.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    function handleDeleteOrder(id) {
        const Items = JSON.parse(localStorage.getItem('Items'));

        const filteredItems = Items.filter(item=> item.id != id)

        localStorage.setItem('Items', JSON.stringify(filteredItems || []));
        setOrders(filteredItems || []);
    };

    function handleConfirm() {
     if (!uf || !cep || !city || !neigh || ! street || !number || !complement || !payment) return alert('Preencha todos os campos');
     
     if (payment == 'credit') setPayment('Cartão de crédito');
     if (payment == 'debit') setPayment('Cartão de débito');
     if (payment == 'money') setPayment('Dinheiro');
     
     setConfirmed(true)
     localStorage.removeItem('Items')
    };

    useEffect(() => {
      const Items = JSON.parse(localStorage.getItem('Items'));

      if (Items) setOrders(Items || []);

      $(inputRef.current).mask('00000-000'); 
    }, []);

    return(
     <S.Container>
      <Header
       refresh={refresh}
      />

      <S.Main>
       { confirmed ? 
        <>
         <S.Box>
          <div className="title">
           <h2>Uhu! Pedido confirmado</h2>
           <span className="afterSpan">Agora é só aguardar que logo o café chegará até você</span>
           </div>
          <div className="gradiantBox">
            <div className="box">
             <div className="row">
              <div className="icon i1">
               <PiMapPinFill/>
              </div>
              <p>Entrega em <strong>Rua {street}, {number}</strong> <br /> {neigh} - {city}, {uf}</p>
             </div>

             <div className="row">
              <div className="icon i2">
               <PiTimerFill/>
              </div>
              <p>Previsão de entrega <br /> <strong>20 min - 30 min</strong></p>
             </div>

             <div className="row">
              <div className="icon i3">
               <PiCurrencyDollar/>
              </div>
              <p>Pagamento na entrega <br /> <strong>{payment}</strong></p>
             </div>
            </div>
          </div>
         </S.Box>

         <S.Box>
          <div className="img">
           <img src={man} alt="" />
          </div>
         </S.Box>
        </>
        :
        <>
               <S.Box>
        <h4>Complete seu pedido</h4>

        <S.Info>
         <div className="title">
          <PiMapPinLine/>
          <p><strong>Endereço de Entrega</strong>
          <br/>
              Informe o endereço onde deseja receber seu pedido
          </p>
         
         </div>

         <div className="input-wrapper">
          <input 
           id="cep"
           ref={inputRef}
           className="cep"
           placeholder="CEP"
           onChange={(e)=> setCep(e.target.value)}
           onInput={(e)=> setCep(e.target.value)}
          />
         </div>

         <div className="input-wrapper">
          <input 
           id="street"
           placeholder="Rua"
           className="street"
           autocomplete="street-address"
           onChange={(e)=> setStreet(e.target.value)}
           onInput={(e)=> setStreet(e.target.value)}
          />
         </div>

         <div className="inputs">
          <div className="input-wrapper">
           <input 
            id="number"
            className="number"
            placeholder="Numero"
            type="number"
            autocomplete="address-line2"
            onChange={(e)=> setNumber(e.target.value)}
            onInput={(e)=> setNumber(e.target.value)}
           />
          </div>

          <div className="input-wrapper comp">
           <input 
            maxLength={30}
            id="complement"
            className="complement"
            placeholder="Complemento"
            autocomplete="address-line2" 
            onChange={(e)=> setComplement(e.target.value)}
            onInput={(e)=> setComplement(e.target.value)}
           />
           <p>Opcional</p>
          </div>
         </div>

         <div className="inputs">
          <div className="input-wrapper">
           <input 
            id="bairro"
            placeholder="Bairro"
            className="bairro"
            autocomplete="address-level3"
            onChange={(e)=> setNeigh(e.target.value)}
            onInput={(e)=> setNeigh(e.target.value)}
           />
          </div>

          <div className="input-wrapper">
           <input 
            id="city"
            className="city"
            placeholder="Cidade"
            autocomplete="address-level2"
            onChange={(e)=> setCity(e.target.value)}
            onInput={(e)=> setCity(e.target.value)}
           />
          </div>

          <div className="input-wrapper">
           <input 
            id="UF"
            className="UF"
            maxLength={2}
            placeholder="UF"
            autocomplete="address-level1"
            onChange={(e)=> setUF(e.target.value)}
            onInput={(e)=> setUF(e.target.value)}
           />
          </div>
         </div>
        </S.Info>

        <S.Payment data-type={payment}>
         <div className="title">
          <PiCurrencyDollar/>
          <p><strong>Pagamento</strong>
          <br/>
             O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
         
         </div>

         <div className="forms">
          <div className="payment credit" onClick={()=> setPayment('credit')}>
           <PiCreditCard/>
           <p>Cartão de crédito</p>
          </div>

          <div className="payment debit" onClick={()=> setPayment('debit')}>
           <PiBank/>
           <p>Cartão de débito</p>
          </div>

          <div className="payment money" onClick={()=> setPayment('money')}>
           <PiMoney/>
           <p>Dinheiro</p>
          </div>
         </div>
        </S.Payment>
       </S.Box>

       <S.Box>
        <h4>Cafés selecionados</h4>

        <S.Orders>
         <ul>
          { orders.length ? 
           orders.map(item => (
            <li key={item.id}>
             <img src={item.img} alt="coffe" />

             <div className="others">
              <span>{item.name}</span>

              <div className="actions">
                <div className="quantity">
                <FiMinus onClick={() => {
                 let Items = JSON.parse(localStorage.getItem('Items'));

                 const itemIndex = Items.findIndex(i => i.id === item.id);

                 if (itemIndex !== -1) {
                   if (Items[itemIndex].quantity === 1) return;

                   Items[itemIndex].quantity -= 1;

                   localStorage.setItem('Items', JSON.stringify(Items));
                   setOrders(Items || []);
                 }
               }} />

               <p>{item.quantity}</p>

               <FiPlus onClick={() => {
                 let Items = JSON.parse(localStorage.getItem('Items'));
               
                 const itemIndex = Items.findIndex(i => i.id === item.id);
            
                 Items[itemIndex].quantity += 1;
            
                 localStorage.setItem('Items', JSON.stringify(Items));
                 setOrders(Items || []);
                }} />               
                </div>

                <div className="remove" onClick={()=> {handleDeleteOrder(item.id); setRefresh(prevState=> prevState + 1)}}>
                 <PiTrash/>
                 <p>Remover</p>
                </div>
              </div>
             </div>

             <p className="price">R$ {formatarComoDecimal(item.quantity * item.price)}</p>
            </li>
           ))
          :
           <h3>Nenhum café selecionado</h3>
          }
         </ul>

         { orders.length ?
         <>
          <span className="total1"><p>Total de itens</p> <p>R$ {formatarComoDecimal(calcularTotal(orders))}</p></span>
          <span className="total1"><p>Entrega</p> <p>R$ 3,50</p></span>
 
          <span className="total2"><p>Total</p> <p>R$ {formatarComoDecimal(calcularTotal(orders) + 3.5)}</p></span>
 
          <button onClick={handleConfirm}>Confirmar pedido</button>
         </>
         :
          null
         }

        </S.Orders>
       </S.Box>
        </>
       }
      </S.Main>
     </S.Container>
    )
}