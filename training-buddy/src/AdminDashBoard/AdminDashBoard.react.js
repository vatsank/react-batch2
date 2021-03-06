import React from 'react';
import Heading from '../Heading/Heading.react';
import Content from '../Content/Content.react';
import Footer from '../Footer/Footer.react';


class AdminDashBoard extends React.Component {
    constructor(props) {
        super(props);
       
        let userStatus = sessionStorage.getItem('logged');

        if(userStatus !== 'yes'){
            props.history.push('/')
        }
    }

     render() {
        return (
            <div className='container'>
                    <div className="row">
                      <Content></Content>
                    </div>
                
                <div className='row'>
                    <Footer designer={'Ramesh Info Systems'} 
                    copyRight={"2019-2020"}></Footer>
                </div>
               </div>              
             
           
        );
    }
}

export default AdminDashBoard;