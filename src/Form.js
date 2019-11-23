import React, { Component } from 'react'
import Card from './Card'

export default class Form extends Component {
    constructor(props){
        super(props)
        this.state={
            userName:"",
            userNmber:"",
            validThru:""
        }
    }
    onChangeName=(event)=>{
        let regex  = /[^A-Za-z " "]/
        
        if (!event.target.value.match(regex)&&event.target.value.length<=20){
        this.setState({
            userName:event.target.value
           
        })
        // if (userName.length<=20){
        //     userName:userName
        // }
    }
    }
    espacebetween(number) {
        let t = String(number).split('')
        for (let i = 4; i < t.length; i += 5) {
            t.splice(i, 0, ' ').join('')
        }
        let x = t.join('')
        return x
    }
    onChangeNumb=(event)=>{
        let regex  = /[^0-9]/
        if (!event.target.value.match(regex)&&event.target.value.length<=16){
        this.setState({
            userNmber:event.target.value.replace(/[ ]/g, '')
        })
    }
    }
    renderValidThru = number => {
        if (isNaN(number)) {
          return;
        }
        number = number.toString();
        let test = number[0] + number[1];
        if (test > 12) return "error";
        let test2 = number[2] + number[3];
        if (number.length < 2) return number;
        return number.slice(0, 2) + "/" + number.slice(2);
      }
    onChangeDate=(event)=>{
        if (!(event.target.value.match(/[^0-9/]/gi)) && (event.target.value.length < 5))
{        this.setState({
            validThru:event.target.value
        })
        // const regex = /^\d{2}[./]\d{2}$/;
        // if (regex.test(this.state.validThru) === true) return (this.state.ValidThru);
        // else return "XX/YY";
    }
    }
   
    render() {
        return (
            <div>
                <Card 
                 name={this.state.userName}
                 number={this.espacebetween(this.state.userNmber)}
                 date={this.renderValidThru(this.state.validThru)}
                />
               <form className="form">
               <input type="text" placeholder="enter name" onChange={(event)=>this.onChangeName(event) } value={this.state.userName} />
                   <input placeholder="enter number" onChange={this.onChangeNumb} value={this.state.userNmber}/>
                   <input placeholder="enter month/year" onChange={(e)=>this.onChangeDate(e)} value={this.state.validThru} />
                   
               </form>
           </div>
        )
    }
}
