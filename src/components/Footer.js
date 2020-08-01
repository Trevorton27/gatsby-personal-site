import React, { Component } from 'react'

// const styles = {
//   rootContainer: {
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     fontSize: 14,
//     letterSpacing: 2,
//     color: 'gray',
//     paddingTop: 20,
//     minHeight: '5em',
//     backgroundColor: '#343a40',
//     color: '#fff',
//     position: 'absolute',
//     bottom: 0,
//     width: '100%'
//   },
// }

export class Footer extends Component {
  render() {
    return (
      <div className="container">
        
      <div className="footer row align-items-end"">
        Built with&nbsp;
        <a href="https://gatsbyjs.org" target="_blank">
          GatsbyJS
        </a> 
        &nbsp; by Trevor Mearns 
      </div>
    )
  }
}

export default Footer
