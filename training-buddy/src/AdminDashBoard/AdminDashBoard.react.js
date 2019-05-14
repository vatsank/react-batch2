import React from 'react';
import Heading from '../Heading/Heading.react';
import Content from '../Content/Content.react';
import Footer from '../Footer/Footer.react';


class AdminDashBoard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div >
               <Heading majHeading={"Training Buddy"}></Heading>
               <Content></Content>
               <Footer designer={'Ramesh Info Systems'} 
                        copyRight={"2019-2020"}></Footer>
            </div>
        );
    }
}

export default AdminDashBoard;