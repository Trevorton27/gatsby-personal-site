import React, { Component } from 'react'

const styles = {
  rootContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    fontSize: 14,
    letterSpacing: 2,
    color: 'gray',
    paddingTop: 20,
    minHeight: '6em',
    backgroundColor: '#343a40',
    color: '#fff'
  },
}

export class Footer extends Component {
  render() {
    return (
      <div style={styles.rootContainer}>
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
