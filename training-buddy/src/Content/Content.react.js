import React from 'react';
import Chart from 'react-google-charts'

const columns =[
    { type: 'string', label: 'Subject' },
    {type:'number',label:'2017-18'},
    {type:'number', label:'2018-19'}
]
const rows =[
    ["java",2000,3000],
    ["Angular Js",1400,1800],
    ["ReactJS",500,200]
]
const data = [columns,...rows];
const myStyle ={
     textAlign: 'center'
};
const Content = () => {

    return (
        <div>
          <h2 style={myStyle}>Trainings Conducted in 2018-19</h2>
       <Chart chartType='BarChart'data ={data} width="100%" height="400px" ></Chart>
        </div>
    );

}

export default Content;