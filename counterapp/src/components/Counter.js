import React, {useState} from 'react'
import {connect} from 'react-redux';
import {Add ,Sub} from '../ActionCreators';


const Counter = (props) => 
{
    const [counter, setCounter] = useState(1);
    return (
        <div>
            <h2> counter : {props.count}  </h2>
         
            <input type="text" value = {counter}  onChange = { e => setCounter(e.target.value)}/>
            <button onClick={() => props.Add(counter)}> Add </button>
            <button onClick = {() => props.Sub(counter)}> remove </button>

        </div>
    )
}

const mapStateToProps = state => {
     return {
          count : state.count 
     }
}

const mapDispatchToProps = dispatch => {
    return {
     Add : counter => dispatch(Add(counter)),
     Sub : counter => dispatch(Sub(counter)),
    }
 }


export default connect(mapStateToProps, mapDispatchToProps)(Counter);

