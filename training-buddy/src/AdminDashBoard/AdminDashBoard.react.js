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
               <Heading></Heading>
               <Content></Content>
               <Footer></Footer>
            </div>
        );
    }
}

export default AdminDashBoard;