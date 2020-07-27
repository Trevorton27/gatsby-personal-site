import React from 'react'
import Menu from './Menu'
import Footer from './Footer'

import '../styles/style.css';
import { Container } from 'react-bootstrap';

class Layout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div>
       
        <Container className="body">
          <br />
          {children}
        </Container>
        <Footer />
      </div>
    )
  }
}

export default Layout
