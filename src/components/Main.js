import PropTypes from 'prop-types'
import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import reflexoPlantaire from '../images/reflexoPlantaire.jpg'
import guasha from '../images/guasha.jpg'
import palmaire from '../images/palmaire.jpg'
import asca from '../images/asca.png'
import formationdutao from '../images/formationdutao.png'

// On utilise gatsby-plugin-image pour optimiser le chargement des images
export function ImageJodie() {
  return <StaticImage src="../images/jodie.jpg" placeholder="dominantColor" alt="Moi-même" />
}

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
            <ImageJodie />
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
            non plus seulement mon entourage mais toutes personnes dans le besoin ou désirant <b>rééquilibrer et redynamiser son corps et son organisme</b>.<br />
            Par la suite, j'ai voulu approfondir ma technique, je me suis donc également formée sur la <b>diététique du Tao</b>. C'est un complément qui me paraissait essentiel pour pouvoir conseiller toutes personnes ayant des troubles liés à leur système digestif ou celles désireuses de réguler leur poids ou changer leurs habitudes alimentaires pour être en meilleure santé.»


          </p>
          <p>
            <u>Mes diplômes :</u> <br />
            <i class="fa fa-check" /> <b>Réflexologie Plantaire Thérapeutique</b> – à l’Institut de Médecine Naturelle de Genève, selon les exigences ASCA.<br />
            <i class="fa fa-check" /> <b>Certificat Réflexologie Plantaire, Palmaire & Abdominale appliquée à l’Énergétique Chinoise</b> incluant le Gua Sha et la Moxibustion.<br />

            <i class="fa fa-check" /> <b>Certificat Diététique du Tao.</b>
            <br /><br />
            <img src={formationdutao} alt="Formation du Tao" />
            <img src={asca} style={{ float: 'right' }} alt="ASCA" />
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
            <img src={reflexoPlantaire} alt="Reflexologie plantaire" />
          </span>
          <p>
            <h2 style={{ textAlign: "left" }}>Principe de la Médecine Traditionnelle Chinoise et de la Réflexologie </h2>


            <br />
            La Médecine Traditionnelle Chinoise (MTC) est basée sur la philosophie du Tao (<i>la voie du milieu, de l'équilibre</i>) et l’harmonie des forces de la nature dans l’organisme et son environnement. Ces deux derniers ayant le même fonctionnement, la MTC se penche sur l’équilibre des 5 éléments qui les rassemble (Bois, Feu, Terre, Métal, Eau). <br />
            Avec l’acupuncture, la moxibustion et l’énergétique, la réflexologie est le geste thérapeutique le plus ancien de la médecine chinoise.
            La technique de réflexologie chinoise à laquelle j'ai été formée a été mise au point par l’<b>Institut Rwo Shr International de Taïwan</b>, reconnu par l'Organisation Mondiale de la Santé.<br />
            Il repose sur la notion de vecteur d’énergie reliant les extrémités des mains et des pieds aux organes et aux entrailles par des zones appelées "zones réflexes".<br />
            Elle a pour but de stimuler, auto-réguler, soigner et maintenir en santé le corps par la pression de ces zones réflexes. Le soin plantaire est accompagné par le drainage des méridiens (<i>réseau de vaisseaux à travers lequel l'énergie vitale "Qi" circule</i>), le drainage lymphatique (<i>système nerveux</i>) et l’acupression manuelle des points d’acupunctures essentiels dans l’objectif de rééquilibrer l’organisme dans son ensemble.
            Aujourd’hui nous sommes de plus en plus sédentaires, nous portons des chaussures qui ne sont pas toujours adapatées, la plante de nos pieds n'est donc plus autant stimulée. C’est pourquoi il peut être nécessaire de rééquilibrer notre corps par la Réflexologie, étant une médecine aussi bien curative que préventive.<br />
          </p>
          <p>
            <h2>Pour qui ?</h2>
            Toute personne désirant prendre soin de son corps et de son esprit.<br /><br />
            <h4><i className="icon fa-solid fa-exclamation-triangle" /> Contre-indications <i className="icon fa-solid fa-exclamation-triangle" /></h4>
            <ul>
              <li>Femmes enceintes de moins de 8 mois (<i>à 8 mois et plus le soin peut cependant aider le bébé à bien se positionner ou à déclencher l'accouchement si le terme est dépassé</i>)</li>
              <li>Personne ayant un Pacemaker</li>
              <li>Massage moins profond sur des personnes souffrant de graves problème de cœur, de reins ou de diabète</li>
              <li>Déconseillé les 3 premiers jours des menstruations (<i>car le soin augmente le débit  sanguin</i>)</li>
            </ul>
          </p>
          <p>
            <h2> Bienfaits du soin réflexe </h2>
            <ul>
              <li>Évacuer les toxines, diminuer les douleurs du corps</li>
              <li>Stimuler les mouvements interne du corps, retrouver un bon fonctionnement de son système digestif</li>
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
              <img src={reflexoPlantaire} alt="Reflexologie plantaire" />
            </span>
            Action immédiate sur les organes et viscères du corps. <b>En Médecine Traditionnelle le pied est le reflet de la santé physique, psychique, mentale et émotionnelle</b>, c’est le tableau de commande de l’organisme.
            Le soin contribue à restaurer la capacité du corps à s’autoréguler en permettant au flux énergétique de traverser le corps et les organes correspondants.
            En stimulant les zones réflexes perturbées <b>on aide à émiliminer les toxines de l’organisme, détruire les dépôts cristallins tout en renforçant la fonction des organes excréteurs pour en faciliter l’évacuation</b>.<br />
            <br />
            <h4 style={{ cursor: 'pointer' }} onClick={() => {
              var x = document.getElementById("tarif0");
              var arrow = document.getElementsByClassName("rotate")[0];
              if (x.style.display === "none") {
                x.style.display = "block";
                arrow.classList.add('down');
              } else {
                x.style.display = "none";
                arrow.classList.remove('down');
              }
            }}><i className='icon fa-arrow-right rotate'></i> Tarifs</h4>
            <p id="tarif0" style={{ display: "none" }}>
              → 35€ la séance découverte <br />
              → 50€ la séance <br />
              → 120€ les 3 séances (<i>il est recommandé de faire 3 séances sur 2 semaines pour un soin approfondi</i>)
            </p>
          </p>

          {/* Réflexologie palmaire */}
          <p>
            <h3>Réflexologie palmaire </h3>
            <span className="image main">
              <img src={palmaire} alt="Réflexologie palmaire" />
            </span>
            Les actions sont les mêmes que la Réflexologie plantaire mais moins directes car la <b>méthode est plus douce</b>, avec des points d’acupuncture différents.<br />
            Conseillé pour les personnes ayant des récentes fractures, mycoses, inflammations ou enflures au niveau du pied.<br />
            Cette technique peut être suivie d’une séance de Gua Sha.<br />
            <br />
            <h4 style={{ cursor: 'pointer' }} onClick={() => {
              var x = document.getElementById("tarif1");
              var arrow = document.getElementsByClassName("rotate")[1];
              if (x.style.display === "none") {
                x.style.display = "block";
                arrow.classList.add('down');
              } else {
                x.style.display = "none";
                arrow.classList.remove('down');
              }
            }}><i className='icon fa-arrow-right rotate'></i> Tarifs</h4>
            <p id="tarif1" style={{ display: "none" }}>
              → 40€ la séance
            </p>
          </p>

          {/* Gua Sha */}
          <p>
            <h3>Gua Sha 刮痧 </h3>
            <span className="image main">
              <img src={guasha} alt="Cuillère Gua Sha" />
            </span>
            Signifiant «Gratter l’énergie toxique», cette technique cherche à <b>relâcher l’énergie toxique emprisonnée dans les muscles et le derme, à rétablir la circulation du Qi (<i>énergie vitale qui circule dans les méridiens</i>), à défaire les stases de sang dans les capillaires, à réduire la chaleur et l’inflammation, à éliminer le froid et calmer la douleur</b>.<br />
            Le Gua Sha permet de traiter la surface avant de soigner l’interne, il est donc conseillé de faire une séance de Gua Sha quelques jours avant une séance de réflexologie plantaire. Il peut également se cumuler avec une séance de réflexologie palmaire ou de Dan Tian. <br />
            <br />
            <h4 style={{ cursor: 'pointer' }} onClick={() => {
              var x = document.getElementById("tarif2");
              var arrow = document.getElementsByClassName("rotate")[2];
              if (x.style.display === "none") {
                x.style.display = "block";
                arrow.classList.add('down');
              } else {
                x.style.display = "none";
                arrow.classList.remove('down');
              }
            }}><i className='icon fa-arrow-right rotate'></i> Tarifs</h4>
            <p id="tarif2" style={{ display: "none" }}>
              → 20€ la séance <br />
              → 40€ Gua Sha + Dan Tian <br />
              → 55€ Gua Sha + Réflexologie palmaire <br />
            </p>
            <h4 style={{ cursor: 'pointer' }} onClick={() => {
              var x = document.getElementById("contreIndication");
              var arrow = document.getElementsByClassName("rotate")[3];
              if (x.style.display === "none") {
                x.style.display = "block";
                arrow.classList.add('down');
              } else {
                x.style.display = "none";
                arrow.classList.remove('down');
              }
            }}><i className='icon fa-arrow-right rotate'></i> Contre indications</h4>
            <p id="contreIndication" style={{ display: "none" }}>
              <ul>
                <li> Femme enceinte</li>
                <li> Grande fatigue ou faiblesse, hypotension</li>
                <li> Hypoglycémie</li>
                <li> Désordre ou maladies du sang (<i>leucémie, thrombopénie…</i>)</li>
                <li> Maladie cardio-vascualire (<i>AVC, entérite, infarctus…</i>)</li>
                <li> Insuffisance rénale</li>
                <li> Cirrhose du foie</li>
                <li> Ascites</li>
                <li> Personne sous anticoagulant</li>
                <li> Phlébite ou thrombose veineuse</li>
                <li> Sur des varices, lésions, blessures, brûlures (<i>coup de soleil</i>), urticaire, éruption, eczéma, psoriasis au niveau du dos</li>
              </ul>
            </p>
            <h4 style={{ cursor: 'pointer' }} onClick={() => {
              var x = document.getElementById("apresGuaSha");
              var arrow = document.getElementsByClassName("rotate")[4];
              if (x.style.display === "none") {
                x.style.display = "block";
                arrow.classList.add('down');
              } else {
                x.style.display = "none";
                arrow.classList.remove('down');
              }
            }}><i className='icon fa-arrow-right rotate'></i> Après le Gua Sha</h4>
            <p id="apresGuaSha" style={{ display: "none" }}>
              <ul>
                <li> Eviter le changement de température extrême juste après la séance</li>
                <li> Pas de douche les 5 heures qui suivent</li>
                <li> Bien se couvrir en cas de vent ou de froid</li>
                <li> Pas de bain aux sels d’epsom</li>
                <li> Pas de laitage en cas de rhume, pas d’alcool, pas de nourriture ou boissons froide</li>
                <li> Se reposer !</li>
              </ul>
            </p>
          </p>

          {/* Dan Tian */}
          <p>
            <h3>Dan Tian - les huit portes du vent </h3>
            Le nombril est au centre d’un réseau de connexions qui se déploient depuis l’abdomen vers le reste du corps.
            Cette technique <b>active la circulation du Qi</b> dans tout l’abdomen et <b>relâche les tensions dans la région du nombril</b> en permettant aux énergies perverses de quitter les organes et le corps.<br />
            Il permet également de <b>diagnostiquer quels sont les viscères en dysfonctionnement et de les harmoniser</b>.<br />
            <br />
            <h4 style={{ cursor: 'pointer' }} onClick={() => {
              var x = document.getElementById("tarif5");
              var arrow = document.getElementsByClassName("rotate")[5];
              if (x.style.display === "none") {
                x.style.display = "block";
                arrow.classList.add('down');
              } else {
                x.style.display = "none";
                arrow.classList.remove('down');
              }
            }}><i className='icon fa-arrow-right rotate'></i> Tarifs</h4>
            <p id="tarif5" style={{ display: "none" }}>
              → 15€ la séance<br />
              → 30€ Gua Sha + Dan Tian<br />
            </p>
          </p>

          {/* Moxibustion */}
          {/* <p>
            <h3>Moxibustion </h3>
            Action qui consiste à chauffer certains points d’acupuncture à l’aide de moxas (à base de plantes Artemisia Vulgaris).<br />
            C'est une pratique de prévention et de soin pour rééquilibrer les excès et les déficiences d’énergies dans le corps. <br />
            <br />
            → 25€ la séance
          </p> */}
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Prendre rendez-vous</h2>
          <p>
            Les séances se dérouleront <b>à votre domicile</b>.<br />
            Je me déplace dans un rayon d'environ <b>20km autour de Nort-sur-Erdre</b>.<br />
          </p>
          <h3>Mes horaires </h3>
          <p>
            Du lundi au vendredi de 17h à 20h. <br />
            Possibilité de prendre rendez-vous le samedi sur demande.
          </p>

          <h2 className="major">Me contacter</h2>
          <b>Merci de préciser votre commune de domicile et vos disponibilités afin que nous décidions ensemble d'une date.</b>
          <br /><br />
          <h3>Par téléphone</h3>
          <i class="icon fa-phone"></i> 06 58 00 23 62
          <br /><br />
          <h3>Par mail</h3>
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
