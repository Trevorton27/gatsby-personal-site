import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Header from '../Components/Header';
import Menu from '../components/Menu';
import IntroVideo from '../components/IntroVideo';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/Layout'
import { Container, Row, Col, ListGroup, Card } from 'react-bootstrap'
import '../styles/style.css';


class SiteIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )

    return (
      <div>
        <Menu sticky="top" />
        <Header />
        <Layout>
          <Helmet>
            <title>{siteTitle}</title>
            <meta name="description" content={siteDescription} />
          </Helmet>
          <div className="main-container" >
          <Container >
            <Row >
             
              <Col>
                <h2>About Me.</h2>
                <br></br>
                <p> A student of life with a deep interest in software development and figuring out how things work. I love to learn and create things. I love to make new connections and to improve both myself and the world around me.
                </p><p>My life has seen me through an amazing variety of experiences and endeavors. And they have all served to enrich my appreciation of people and the potential to leverage our creativity and service to each other through technology. </p>

              </Col>

           
            </Row>
            <Row>
              <Col>
              <IntroVideo />
              </Col>
            </Row>
            <Row>
              <Col 
               >

                <h2 >Journey.</h2>
                <br></br>
              
                <ListGroup variant="flush" >
                  <ListGroup.Item className="journey-list">Born in Seattle Washington</ListGroup.Item>
                  <ListGroup.Item>Learned how to be a human</ListGroup.Item>
                  <ListGroup.Item>Went to school for instructional design & technology</ListGroup.Item>
                  <ListGroup.Item>Met a girl</ListGroup.Item>
                  <ListGroup.Item>Married aforementioned girl</ListGroup.Item>
                  <ListGroup.Item>Moved to Japan with aforementioned girl</ListGroup.Item>
                  <ListGroup.Item>Learned to speak Japanese</ListGroup.Item>
                  <ListGroup.Item>Became a daddy</ListGroup.Item>
                  <ListGroup.Item>Started a business</ListGroup.Item>
                  <ListGroup.Item>Discovered software development</ListGroup.Item>
                  <ListGroup.Item>Decided it was the way to go, man.</ListGroup.Item>
                </ListGroup>
              </Col>
            
            </Row>
            <Row>
              <Col>1 of 2</Col>
              <Col>2 of 2</Col>
            </Row>
          </Container>
          </div>
          

        </Layout>
      </div>

    );
  }
}

export default SiteIndex

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
