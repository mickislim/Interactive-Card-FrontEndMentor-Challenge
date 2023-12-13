

import React from 'react'

const Form = ({handleSubmit,handleChange, cvcErrorShow,cvcErrorMsg,cvcErrorType ,expDateErrorMsg, expDateErrorShow, expDateErrorType,nameErrorMsg,nameErrorShow,nameErrorType,user, cardNumberErrorShow, cardNumberErrorType, cardNumberErrorMsg}) => {
  return (
    <div className="form-register ">
         <form className="form show-form "  onSubmit={handleSubmit}> 
                 <div>  <label htmlFor="name">CARDHOLDER NAME</label>
                   <input type='text' name='name' maxLength={20} className={nameErrorShow? `error` : null} onChange={handleChange} placeholder="e.g Jane Appleseed"/> </div>
                   {nameErrorShow && <p className={nameErrorType} >{nameErrorMsg}</p>}
      
                   <div>  <label htmlFor='cardNumber'>CARD NUMBER</label>
                     <input  type='text' maxLength={16} name='cardNumber' className={cardNumberErrorShow? `error` : null}  onChange={handleChange} placeholder="e.g 1234 5678 9000"/> </div>
                     {cardNumberErrorMsg && <p className={cardNumberErrorType} >{cardNumberErrorMsg}</p>}
      
                
                     <div >  <label htmlFor="Exp-date">EXP. DATE (MM/YY) <span>CVC</span></label>
                       <div className="exp-input">
                         <input  type='text' name='expMonth' maxLength={2} className={expDateErrorShow? `error` : null} onChange={handleChange} placeholder="MM"/> 
                         <input  type='text' name='expYear'  maxLength={2} className={expDateErrorShow? `error` : null}  onChange={handleChange} placeholder=" YY"/> 
                       
                      
                     <input  type='text' name='cvc' maxLength={3} className={cvcErrorShow? `error` : null} onChange={handleChange} placeholder="e.g 123"/>
                     
                       
                       </div>
                       <div className='alert'>
                       {expDateErrorShow && <p className={expDateErrorType} >{expDateErrorMsg}</p>}
                       {cvcErrorShow && <p className={cvcErrorType} >{cvcErrorMsg}</p>}
      
        </div>
                       </div>
               <div className="btn-container">
                 <button className="btn" type='submit' >Confirm</button>
               </div>
                      
      
               </form>  
        </div>
      

  )
}

export default Form