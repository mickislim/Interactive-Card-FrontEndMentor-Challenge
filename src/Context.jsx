
import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext()

export const useGlobalContext =()=> useContext(GlobalContext)
const AppContext = ({ children }) => {


   const [user,setUser]= useState({cardHolder:'',cardNumber:'',expMonth:'',expYear:'',cvcNumber:''})
   const [isModalOpen,setIsModalOpen]= useState(false)
   const [isUserActive,setIsUserActive]= useState(false)
   const [nameError,setNameError] = useState({show:false,msg:'',type:''})
   const [cardNumberError,setCardNumberError] = useState({show:false,msg:'',type:''})
   const [expDateError,setExpDateError] = useState({show:false,msg:'',type:''})
   const [cvcNumberError,setCvcNumberError] = useState({show:false,msg:'',type:''})
const [showError,setShowError]= useState(false)
  





   const handleSubmit=(e)=>{
  e.preventDefault()


  let isError = false

  if(!user.cardHolder){
isError = true
setShowError(true)
    setNameError({show:true,msg:'cant be blank', type:'name-error'})
  }else{
    setNameError({show:false,msg:'', type:''})
  }
 
 
  if (!user.cardNumber || user.cardNumber.replace(/\s/g, '').length !== 16) {
    setCardNumberError({
      show: true,
      msg: 'Card number must be 16 digits',
      type: 'number-error'
    });
    setShowError(true)

isError = true

  } else  if(/[a-zA-Z]/.test(user.cardNumber)){
    setCardNumberError({
      show: true,
      msg: 'Cannot contain letters',
      type: 'number-error'
    });
isError= true  
setShowError(true)
}

  else {
    setCardNumberError({ show: false, msg: '', type: '' });
  }


 

  if(!user.expMonth || !user.expYear){
    setShowError(true)

isError = true
    setExpDateError({show:true,msg:'cant be blank', type:'mm-message-error'})
  }else{
    setExpDateError({show:false,msg:'', type:''})

  }

  if(!user.cvcNumber){
isError = true
setShowError(true)

    setCvcNumberError({show:true,msg:'cant be blank', type:'cvc-message-error'})
  }else{
    setCvcNumberError({show:false,msg:'', type:''})

  }

  
   if (!isError) {


     setIsModalOpen(true);
    setIsUserActive(true);
    
   }
  
   

 
}
  
const handleChange = (e) => {
  const { name, value } = e.target;
  

  setUser((prevUser) => ({
    ...prevUser,
    [name]: name === 'cardNumber' ? value.replace(/\s/g, '').match(/.{1,4}/g)?.join(' ') || '' : value,
  }));


};



const closeModal=()=>{
  setIsUserActive(false)
  setIsModalOpen(false)
  setUser({cardHolder:'',cardNumber:'',expMonth:'',expYear:'',cvcNumber:''})
}

   return (
     <GlobalContext.Provider
       value={{
        
        user,
         handleSubmit,
         handleChange,
        
         isModalOpen,
         setIsModalOpen,
         isUserActive,
         nameError,
         cardNumberError,
         expDateError,
         cvcNumberError,
         closeModal,showError
       
      
       }}
     >
       {children}
     </GlobalContext.Provider>
   );
 };
 
 




export default AppContext