import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Row, Col, Container, Button } from 'react-bootstrap'
import Layout from '../components/Layout'

class Success extends React.Component {
    render() {
        const siteTitle = get(this, 'props.data.site.siteMetadata.title')
        const siteDescription = get(
            this,
            'props.data.site.siteMetadata.description'
        )

        return (
            <Layout>
                <Helmet
                    htmlAttributes={{ lang: 'en' }}
                    meta={[{ name: 'description', content: siteDescription }]}
                    title={`Contact | ${siteTitle}`}
                />

                <Container>
                    <Row className="justify-content-center">
                        <Col>
                            <h2>Well, golly gee shucks. Thanks for reaching out! </h2>
                            <h2>Yesiree, your message submission was successful.</h2>

                        </Col>
                    </Row>
                </Container>
            </Layout>

        )
    }
}

export default Success
