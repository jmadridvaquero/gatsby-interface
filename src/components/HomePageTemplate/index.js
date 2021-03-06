import React from 'react'
import Helmet from 'react-helmet'
import Card from '../Card'
import Testimonials from '../TeamMember'
import PropTypes from 'prop-types'
import logo from '../../assets/img/logo.png'
import teamPhoto from '../../assets/img/Ellipse.png'
import TeamMember from '../TeamMember'
import Pricing from '../Pricing'


const HomePageTemplate = ({
  title,
  heading,
  description,
  offerings,
  meta_title,
  meta_description,
  testimonials,
}) => (
  <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
    </Helmet>
    <section className='hero is-primary is-bold is-medium'>
      <div className='hero-body'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='section'>
                <h1 className='text-is-black'>
                  {title}
                </h1>
                <p className="text-is-black">
                  Voici un petit descriptif du service
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='section section--gradient'>
      <div className='container'>

        <div className='section'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='content'>
                <div>
                  <h3 className='has-text-weight-semibold is-size-2'>
                    Ce que vous pouvez accomplir avec coop interface
                  </h3>                 
                </div>
                <div className="row">
                  <Card title="Etudes, analyses et recherches" description="lorem ipsum whatever" img="."/>
                  <Card title="Stratégies d’organisation" description="lorem ipsum whatever" img="."/>
                  <Card title="Soutien à la gestion humaine" description="lorem ipsum whatever" img="."/>
                  <Card title="Animation et formation" description="lorem ipsum whatever" img="."/>
                  <Card title="Évaluation" description="lorem ipsum whatever" img="."/>
                  <Card title="Un autre service" description="lorem ipsum whatever" img="."/>
                </div>
                <h3 className='has-text-weight-semibold is-size-2'>Plus de 100 clients nous ont fait confiance</h3>
                <div className="row w-100">
                  <div className="col-4"><img src={teamPhoto}/></div>
                  <div className="col-4"><img src={teamPhoto}/></div>
                  <div className="col-4"><img src={teamPhoto}/></div>
                  <div className="col-4"><img src={teamPhoto}/></div>
                  <div className="col-4"><img src={teamPhoto}/></div>
                  <div className="col-4"><img src={teamPhoto}/></div>

                </div>
                <h3 className='has-text-weight-semibold is-size-2'>Une équipe d'experts à votre disposition</h3>
                <div className="row">
                  <TeamMember name="Stéphane Guérad" title="Responsable objets perdus" img={teamPhoto} />
                  <TeamMember name="fbhf" title="hfhf" img={teamPhoto} />
                  <TeamMember name="fbhf" title="hfhf" img={teamPhoto} />
                </div>
                <Pricing/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

HomePageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  offerings: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  testimonials: PropTypes.array,

}

export default HomePageTemplate
