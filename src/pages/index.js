import React from "react"

import { Link } from 'gatsby'

import Layout from '../Components/layout'

const IndexPage = () => {
    return  (
        <Layout>
            <h1>Hello</h1>
            <h2>I'm Qudusayo, a  full-stack developer  living  in the giant of Africa</h2>
            <p>Neead a developer? <Link to='/contact'>Contact me</Link></p>
        </Layout>
    )
}

export default IndexPage;