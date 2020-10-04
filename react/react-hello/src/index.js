import React from 'react';
import ReactDOM from 'react-dom';


function HelloWorld(){
  return (
    <div>
      <Hello/>!
    </div>
  );
}

function Hello(){
  const name = "World!";
  return(
  <span>Hello {name}</span>
  );
}

ReactDOM.render(<HelloWorld/>, document.querySelector('#root'));