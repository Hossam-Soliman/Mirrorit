import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFutbol } from "@fortawesome/free-solid-svg-icons";


const AddTodo = () => {

  const addEffect = (e) => {
      document.getElementById("myinput").removeAttribute('placeholder');
  }

 
  //const addLoad = (e) =>{
    //  window.location.href = '/about'
  //}

  //setTimeout(addLoad, 5000);
   
    return(
        <div className="myForm">  
            <h1>M I R R <FontAwesomeIcon icon={faFutbol} size='sm'/> R I T . M E</h1> 
            <input id="myinput" className="mySearch" type="text" placeholder="http//:example.com" onFocus={addEffect}></input>
            <button>Go</button>
            <p>Browse internet without ads, pop-ups ...</p>
        </div>
    )
}

export default AddTodo