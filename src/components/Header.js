import PropTypes from 'prop-types'
import React from 'react'
import logo from "../images/logo.png"

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <img src={logo}></img>
    </div>
    <div className="content">
      <div className="inner">
        <h1 style={{ textAlign : 'center' }}>Réflexolo-J</h1>
        <p style={{ textAlign : 'center' }}>
          Réflexologie appliquée à l'énergétique Chinoise<br/>
          中医
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Un peu plus sur moi
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            <i class="icon fa-solid fa-meteor"></i>La Réflexologie
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            Mes soins
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
