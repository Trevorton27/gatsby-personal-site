import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Row, Col, Form, Button } from 'react-bootstrap'
import Layout from '../components/Layout'
import Menu from '../components/Menu';
class Contact extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )

    return (
      <div>
         <Menu top="sticky" />
      <Layout>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`Contact | ${siteTitle}`}
        />
        
        <h1 id="contact-title">Contact</h1>
        <br />
        <div id="contact-form-wrapper" >
        <Form name="Contact Form"  data-netlify="true" data-netlify-honeypot="bot-field" method="POST" action="/success">
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="Contact Form" />
          <Row className="fluid" id="contact-form-names-field">
            <Col>
              <Form.Control placeholder="First name" name="first-name" />
            </Col>
            <Col>
              <Form.Control placeholder="Last name" name="last-name" />
            </Col>
          </Row>
          <br />
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" name="message" />
          </Form.Group>
          <Row>
            <Col>
              <Button variant="secondary" type="submit" className="float-right" id="contact-form-button">
                Submit
            </Button>
            </Col>
          </Row>
        </Form>
        </div>
      
      </Layout>
      </div>
     
    )
  }
}

export default Contact

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
