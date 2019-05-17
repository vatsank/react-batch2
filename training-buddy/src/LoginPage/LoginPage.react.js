import React,{useState} from 'react';
import { Redirect } from 'react-router-dom';

const LoginPage = (props) => {

    const [formData,setValues] = useState({
        userName:'',
        passWord:''
    });

    const handleSubmit = (event) =>{

        event.preventDefault();
  const  {userName,passWord} = formData;

      if(userName ==='india' && passWord ==='india'){

        sessionStorage.setItem('logged','yes');
        
          props.history.push('/admin')
 
      } 

    }        
     
        const handleChange =  (event) =>{
    
          setValues({...formData,[event.target.name]:event.target.value})
          
        }
    
    return (
        <div >
        <form onSubmit={handleSubmit}>
            <div>
               <label htmlFor="">User Name</label>
               <input type="text" name='userName' onChange={handleChange} 
                 value={formData.userName}
               />
            </div>
            <div>
                 <label htmlFor="">PassWord</label>
                 <input type="password" name='passWord'
                  value={formData.passWord}
                 onChange={handleChange}/>
            </div>
            
            <div>
                 <button type='submit'>Login</button>
            </div>
        </form>
        </div>
    );

}

export default LoginPage;