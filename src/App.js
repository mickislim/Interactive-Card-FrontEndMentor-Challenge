


import React, {  useEffect, useState } from 'react'
import Form from './Components/Form'
import Card from './Components/Card'
import Modal from './Components/Modal'
import Attribute from './Components/Attribute'








const App = () => {
  const [user,setUser] = useState({name:'', cardNumber:'',expMonth:'',expYear:'',cvc:''})
  const [isUserActive,setIsUserActive] = useState(null)
  const [nameError,setNameError] = useState({show:null, type:'', msg:""})
  const [cardNumberError,setCardNumberError] = useState({show:null, type:'', msg:""})
  const [expDateError, setExpDateError] = useState({show:null, type:'',msg:''})
  const [cvcError,setCvcError ]=useState({show:null,type:'',msg:''})
   

  
const handleChange = (e) => {
  const { name, value } = e.target;

  if (name === 'cardNumber') {
    const formattedCardNumber = value.replace(/\s/g, '').match(/.{1,4}/g)?.join(' ') || '';
    setUser({ ...user, [name]: formattedCardNumber });
  } else {
    setUser({ ...user, [name]: value });
   
  }
};



const handleSubmit = (e) => {
  e.preventDefault();

  const { name, cardNumber, expMonth, expYear, cvc } = user;

  if (!name) {
    setNameError({ show: true, type: 'error', msg: 'Name cannot be blank' });
    setIsUserActive(null);
  }

  if (!expMonth || !expYear) {
    setExpDateError({ show: true, type: 'error', msg: `Can't be blank` });
    setIsUserActive(null);
  }

  if (!cvc) {
    setCvcError({ show: true, type: 'error', msg: `Can't be blank` });
    setIsUserActive(null);
  }

  
  if(/[a-zA-Z]/.test(cardNumber)) {
    setCardNumberError({ show: true, type: 'error', msg: 'Wrong format, numbers only' }); 
       setIsUserActive(null);
  }else if (cardNumber.length < 16){
    setCardNumberError({ show: true, type: 'error', msg: 'Input 16 numbers' });
    setIsUserActive(null);
  }else{
    setCardNumberError({ show: null, type: '', msg: '' })
    setIsUserActive(null)
  }

  if (name && expMonth && expYear && cvc ) {
    setIsUserActive(true)
    
  }

 

};

useEffect(() => {
 
    setCardNumberError({ show: false });
     setCvcError({ show: null });
     setNameError({ show: null });
     setExpDateError({ show: false });
   }, [user,isUserActive]);
  


const {name, cardNumber, expMonth,expYear,cvc}= user

  return (
    

    <div className="container">
     <article className="article">
       <div className="main-grid">
         <Card cvc={cvc} {...user} expMonth={expMonth} expYear={expYear} username={name} cardNumber={cardNumber} isUserActive={isUserActive}  />
         <div className="form-grid">
 
     {isUserActive? (<Modal  setIsUserActive={setIsUserActive}/>

     ): (
    
        <Form handleSubmit={handleSubmit} handleChange={handleChange} {...cvcError} cvcErrorShow={cvcError.show} cvcErrorType={cvcError.type} cvcErrorMsg={cvcError.msg} {...expDateError} expDateErrorShow={expDateError.show} expDateErrorType={expDateError.type} expDateErrorMsg={expDateError.msg} cardNumberErrorShow={cardNumberError.show} cardNumberErrorType={cardNumberError.type} cardNumberErrorMsg={cardNumberError.msg} {...cardNumberError}
    
         nameErrorShow={nameError.show} nameErrorMsg={nameError.msg} nameErrorType={nameError.type} {...nameError} {...user}/>

     )

     }   
      
       </div>
  
    
            
         
     
      </div>
       </article>
        <Attribute/> 
    
      </div>
    
  
  )
}

export default App