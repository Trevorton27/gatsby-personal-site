import React from 'react'
import Menu from './Menu'
import Footer from './Footer'
import '../styles/style.css';

class Layout extends React.Component {
  render() {
    const { children } = this.props;
   
    return (
      <div className="body">
     
        <Menu />
        <br />
        {children}
        <Footer />
      </div>
    )
  }
}

export default Layout
