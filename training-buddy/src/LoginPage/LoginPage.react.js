import React,{useState} from 'react';
import { Redirect } from 'react-router-dom';
import SelectButton from '../SelectButton/SelectButton.react';

const LoginPage = (props) => {

  const items ={name:'userRole',optionsList:[{optValue:"CHN",dispValue:"Chennai"},{optValue:"SBC",dispValue:"Bangalore"}]};
    const [formData,setValues] = useState({
        userName:'',
        passWord:'',
        "role":''
    });

    const handleSubmit = (event) =>{

        event.preventDefault();
        console.log(formData);
  const  {userName,passWord,role} = formData;

      if(userName ==='india' && passWord ==='india' && role === 'admin'){

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
            <label htmlFor="">Role</label>

            <SelectButton items={items} action={handleChange}></SelectButton>
            <div>
                 <button type='submit'>Login</button>
            </div>
        </form>
        </div>
    );

}

export default LoginPage;