import React, { Component } from 'react';

export interface Product{
    productCode:number;productName:string;
    }

    export interface Item{

        product:Product;
    }
export interface State{
    count:number;
}
class Message extends Component<Item,State> {

    constructor(props:Item){
        super(props);
        this.state ={
            count:1
        }
    }

    handleClick =(event:React.FormEvent<HTMLButtonElement>)=>{

        this.setState({count:this.state.count+1});
    }
    render() {
        return (
            <div>
            <h2>Catalog</h2>
            <h4>{this.props.product.productCode}</h4>
            <h4>{this.props.product.productName}</h4>
            <p>Quantity :<span>{this.state.count}</span></p>

            <button onClick={this.handleClick}>+</button>
            </div>
        );
    }
}

export default Message;