import React, { Component } from 'react'

const styles = {
  rootContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    fontSize: 10,
    textTransform: 'uppercase',
    letterSpacing: 2,
    color: 'gray',
    paddingTop: 15,
    minHeight: '6em',
    backgroundColor: '#343a40'
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
