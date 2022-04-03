import PropTypes from 'prop-types'
import React from 'react'
import jodie from '../images/jodie.jpg'
import pic02 from '../images/pic02.jpg'
import reflexologiePlantaire from '../images/reflexologie-plantaire.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Un peu plus sur moi</h2>
          <span className="image main">
            <img src={jodie} alt="Moi-même" />
          </span>

          <h3>Jodie | 26 ans | Réflexologue</h3>

          <p>
            « J’ai toujours eu un attrait pour <b>le soin, l’aide à la personne</b>,
            en particulier ces dernières années où j’ai voulu également <b>prendre soin de moi-même et être à l’écoute de mon corps</b>.
            C’est pourquoi j’ai décidé de me former pour en apprendre plus sur mon corps et son fonctionnement.<br />
            C’est par cette démarche que je suis tombée sur une <b>formation de Réflexologie appliquée à la Médecine Traditionnelle Chinoise</b>,
            où je me suis tout de suite sentie à ma place.<br />
            Au cours de cette dernière j’ai beaucoup appris, sur le corps, les maladies, le fonctionnement des organes ou ce que provoque leurs dysfonctionnements.
            Nous avons également approfondi la médecine et la pensée chinoise, leur façon de prévenir et de guérir les corps humains, puis les techniques, les méridiens et les points d’acupunctures. <br />
            Tant de choses qui, une fois appliquées ont fait preuve de <b>guérisons impressionnantes</b> sur certains de mes consultants.
            J’ai été si surprise des bienfaits que j’ai voulu en faire mon métier, pour <b>pouvoir soigner</b>,
            non plus seulement mon entourage mais toutes personnes dans le besoin ou désirant <b>rééquilibrer et redynamiser son corps et son organisme</b>.»
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">La Réflexologie</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            <h2>Principe de la Réflexologie et de la MTC </h2>
            Réflexologie appliquée à la Médecine Traditionnelle Chinoise, issu du Tao. Méthode de soin très complète mise au point par l’Institut Rwo Shr International* de Taïwan, qui s’appuie sur la réflexologie ancestrale. Méthode naturelle et globale, autant préventive que curative.
            Un soin stimulant les zones réflexes des pieds, les méridiens et les points d’acupunctures essentiels  pour rééquilibrer et dynamiser l’organisme dans son ensemble.
          </p>
          <p>
            <h2>Pour qui ?</h2>
            Bébés, enfants, adolescents, adultes. <br />
            <i className="icon fa-solid fa-exclamation-triangle"></i> 
            A éviter sur les femmes enceintes de moins de 8 mois.
          </p>
          <p>
            <h2> Bienfaits du soin réflexe </h2>
            <ul>
              <li>Évacuer les toxines, diminuer les douleurs du corps</li>
              <li>Stimuler les mouvements interne du corps</li>
              <li>Tonifier les organes en difficulté et favoriser une meilleure coordination entre eux</li>
              <li>Équilibrer les excès et les déficiences dans chaque système du corps</li>
              <li>Relancer la circulation sanguine et lymphatique</li>
              <li>Générer de l’énergie dynamique</li>
              <li>Diminuer le stress, les insomnies, les mauvais rêves</li>
              <li>Harmoniser la sphère émotionnelle et psychique</li>
            </ul>
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Mes soins</h2>

          {/* Réflexologie plantaire */}
          <p>
            <h3>Réflexologie plantaire </h3>
            <span className="image main">
              <img src={reflexologiePlantaire} alt="" />
            </span>
            Action immédiate sur les organes et viscères du corps. En Médecine Traditionnelle le pied est le reflet de la santé physique, psychique, mentale et émotionnelle, c’est le tableau de commande de l’organisme. Le soin contribue à restaurer la capacité du corps à s’autoréguler en permettant au flux énergétique de traverser le corps et les organes correspondants. <br />
            En stimulant les zones réflexes perturbées on aide à débarrasser les toxines de l’organisme, détruire les dépôts cristallins tout en renforçant la fonction des organes excréteurs pour en faciliter l’évacuation. <br />
            <br />→ 50€ la séance – 120€ les 3 séances
          </p>

          {/* Réflexologie palmaire */}
          <p>
            <h3>Réflexologie palmaire </h3>
            Méthode plus douce pouvant suivre une séance de Gua Sha. <br />
            → 40€ la séance
          </p>

          {/* Gua Sha */}
          <p>
            <h3>Gua Sha </h3>
            <span className="image main">
              <img src={reflexologiePlantaire} alt="" />
            </span>
            « Gratter l’énergie toxique », technique qui cherche à relâcher l’énergie toxique emprisonnée dans les muscles et le derme, rétablie la circulation du Qi, défaire les stases de sang dans les capillaires, réduire la chaleur et l’inflammation, éliminer le froid et calmer la douleur.
            Permet de traiter la surface avant de soigner l’interne (conseillé de faire une séance de Gua Sha quelques jours avant une séance de réflexologie plantaire ou peut être fait dans une même séance avec réflexologie palmaire ou Dan Tian)<br />
            <br />→ 20€ la séance, 55€ Gua Sha + Réflexologie palmaire, 40€ Gua Sha + Dan Tian
          </p>

          {/* Dan Tian */}
          <p>
            <h3>Dan Tian - les huit portes du vent </h3>
            Le nombril est au centre d’un réseau de connexions qui se déploie depuis l’abdomen vers le reste du corps.
            Technique qui active la circulation du Qi (énergie vitale qui circule dans les méridiens) dans tout l’abdomen et relâche les tensions dans la région du nombril en permettant aux énergies perverses de quitter les organes et le corps.
            Permet également de diagnostiquer les viscères en dysfonctionnement et les harmoniser.<br />
            <br />→ 20€ la séance, 40€ Gua Sha + Dan Tian
          </p>

          {/* Moxibustion */}
          <p>
            <h3>Moxibustion </h3>
            Action qui consiste à chauffer les points d’acupuncture à l’aide de moxas (à base de plantes Artemisia Vulgaris). Pratique de prévention et de soin pour rééquilibrer les excès et les déficiences d’énergies dans le corps.<br />
            <br />→ 25€ la séance
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <div className="field half first">
              <label htmlFor="name">Nom</label>
              <input type="text" name="name" id="name" required />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" required />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4" required></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Envoyer" className="special" />
              </li>
              <li>
                <input type="reset" value="Effacer" />
              </li>
            </ul>
          </form>
          {/* <ul className="icons">
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
          </ul> */}
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
