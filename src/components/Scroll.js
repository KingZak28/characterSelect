import React from 'react';

//This component illustrates the use of children in React. props.children
const Scroll = (props) => {

  return(
    //Can add styling by creating a scroll.css but can also do it inline like this in JSX with {{}} meaning this is a js object and within that were returning
    //An object and this object can have CSS styles such as overflows.
    <div style= {{overflowY: 'scroll', border:"5px ridge black", height: "750px"}}>

      {props.children}

    </div>
  );

}

export default Scroll;
