import React from 'react';
import ReactDOM from 'react-dom';

/// HelloWorld Start
// function HelloWorld(){
//   return (
//     <div>
//       <Hello/>!
//     </div>
//   );
// }

// function Hello(){
//   const name = "World!";
//   return(
//   <span>Hello {name}</span>
//   );
// }

/// HelloWorld End

/// Jonas Start
// function Jonas(){
//     const fName = "Jonas";
//     const lName = "Sandroos";

//     return(
//         <Person age = {27}
//                 name = {fName + " " + lName} />
//     )
// }

// const Person = props => <h1>{props.name + " " + props.age}</h1>
// ReactDOM.render(<Jonas/>, document.querySelector('#root'));
/// Jonas End

/// HelloProp Start
// function HelloProp(props){
//     return(
//         <span>Hello {props.name}</span>
//     )
// }

// ReactDOM.render(<HelloProp name="Jonas"/>, document.querySelector('#root'));
/// HelloProp End

/// HelloParameter Start
// const HelloParameter = ({name}) => (
//     <span>Hello {name}</span>
// )

// ReactDOM.render(<HelloParameter name="Jonas"/>, document.querySelector('#root'));
/// HelloParameter End

/// HelloParameter2 Start
// const HelloParameter2 = ({fName, lName}) => (
//     <span>Hello {fName} {lName}</span>
// )

// ReactDOM.render(<HelloParameter2 fName="Jonas" lName="Sandroos"/>, document.querySelector('#root'));
/// HelloParameter End

/// HelloParameter3 Start
const HelloParameter3 = (props) => {
    const {name} = props;
    return(
    <span>Hello, {name}!</span>
    )
}

ReactDOM.render(<HelloParameter3 name="Jonas Sandroos"/>, document.querySelector('#root'));
/// HelloParameter3 End

// Notes
// HelloParameter2 takes props and deconstructs it into ´({fName, lName})´ while HelloParameter3 does that inside ´const {name} = props;´.