import React from 'react'
import Modal from './Modal'
import { useGlobalContext } from '../Context'





const Form = () => {
  const {isModalOpen,handleSubmit,handleChange,nameError,cardNumberError,expDateError, cvcNumberError,showError}= useGlobalContext()

  
     
  
  return (
<div className='form'>
  {isModalOpen?( <Modal/>) : (
<form onSubmit={handleSubmit}>
    <div>
    <label className="form-label" htmlFor='cardHolder'>CARDHOLDER NAME</label>
    <input className={nameError.show? 'error' : 'input'} name='cardHolder' id='cardHolder' type="text" placeholder=" e.g Jane Appleseed"  onChange={handleChange} maxLength={20}/>
    { showError && <div className={nameError.type}> <p>{nameError.msg}</p></div> } 

  </div>

  <div>
    <label className="form-label" htmlFor='cardNumber' >CARD NUMBER</label>
    <input  className={cardNumberError.show? 'error' : 'input'} name='cardNumber' id='cardNumber' type="text" placeholder=" e.g 1234 5678 9123 0000" onChange={handleChange} maxLength={16}/>
     { showError && <div className={cardNumberError.type}> <p>{cardNumberError.msg}</p></div> }  

</div>

<div>
  <label className="form-label"  htmlFor='expDate' >EXP. DATE (MM/YY) <span>CVC</span></label>
  
  <div>
  <div className="cvc-input ">
    <div className="exp-input"> 
     <div >
      <input className={expDateError.show? 'error' :null} type="text" placeholder=" MM" id='expMonth' name='expMonth' onChange={handleChange} maxLength={2}/>
     </div>
     
     <div>
      <input className={expDateError.show? 'error' :null} id='expYear' name='expYear' type="text" placeholder=" YY" onChange={handleChange} maxLength={2}/>
  
    </div>
    
   

    
    
     </div>

    
     
  
    <div className="cvc-number-input " > 
      <input className={cvcNumberError.show? 'error' : 'input'} id='cvcNumber' name='cvcNumber' type="text" placeholder=" e.g 123" onChange={handleChange} maxLength={3}/>    </div>
  </div>
  <div className="alert-message">
    {expDateError.show &&  <div className={expDateError.type}> <p>{expDateError.msg}</p></div> }
    { showError && <div className={cvcNumberError.type}> <p>{cvcNumberError.msg}</p></div> }  

  
</div>  
  </div>
 

    </div>

    <div className="btn-container">
      <button type='submit' className="confirm-btn">Confirm</button>
  </div>

</form>)}


</div> 
 )
}

export default Form