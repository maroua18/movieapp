import React, { Component } from 'react'

export default class Star extends Component {

    Rating =()=>{
        let arr=[]
        for(let i=0;i<5;i++)
         if(i<this.props.rating)
   arr.push(<span className='star-yellow'>★</span>)
   else
   arr.push(<span className='star-white'>☆</span>)
   return arr   
    }
    render() {
        return (
           <i>{this.Rating()}</i>
        )
        }}