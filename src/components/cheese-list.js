import React, { Component } from "react";



export default class CheeseList extends React.Component {


render() {
  const cheeses = this.props.cheeses.map((cheese, index) => {
    return (<li key={index}>
      {cheese}
    </li>)
  });

  return (
    <div>
      <ul>
        {cheeses}      
      </ul>
    </div>
  )
  }
}


// CheeseList.defaultProps = {
//   cheeses: [
//     'Bath Blue',
//     'Barkham Blue',
//     'Buxton Blue',
//     'Cheshire Blue',
//     'Devon Blue',
//     'Dorset Blue Vinney',
//     'Dovedale',
//     'Exmoor Blue',
//     'Harbourne Blue',
//     'Lanark Blue',
//     'Lymeswold',
//     'Oxford Blue',
//     'Shropshire Blue',
//     'Stichelton',
//     'Stilton',
//     'Blue Wensleydale',
//     'Yorkshire Blue'
//   ]
// }