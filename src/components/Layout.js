import React from 'react'
import Header from '../components/Header'
import Navbar from './Navbar'
import Footer from './Footer'
import Style from '../styles/style.css';

class Layout extends React.Component {
  render() {
    const { children } = this.props;
   
    return (
      <div className="body">
        <Header />
        <Navbar />
        <br />
        {children}
        <Footer />
      </div>
    )
  }
}

export default Layout
