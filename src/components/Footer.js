import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright"> Créer avec <a href="https://www.gatsbyjs.org/">Gatsby.js</a> et beaucoup de <i class="icon fa-solid fa-heart"></i> par <a href="https://thibaud-larriere.netlify.app">DevDurable</a></p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
