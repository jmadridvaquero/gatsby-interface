import React from 'react'
import Helmet from 'react-helmet'
import Pricing from '../Pricing'
import PropTypes from 'prop-types'

const PricingPageTemplate = ({
  title,
  meta_title,
  meta_description,
  pricing,
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
                <h1 className='title'>
                  Animation et formation
                </h1>
                <p>Voici un petit desciptif de l'animation et de la formation</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Venenatis lectus magna fringilla urna porttitor rhoncus dolor. Elit eget gravida cum sociis natoque penatibus. Convallis tellus id interdum velit. Sollicitudin tempor id eu nisl nunc. Placerat vestibulum lectus mauris ultrices eros in cursus turpis. Nulla porttitor massa id neque aliquam vestibulum morbi blandit. In dictum non consectetur a erat nam at lectus. Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit. Odio aenean sed adipiscing diam donec adipiscing tristique risus nec.</p>
              <button className="btn btn-primary">En savoir plus</button>
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
                <h2 className='has-text-weight-semibold is-size-2'>
                  {pricing.heading}
                </h2>
                <p className='is-size-5'>{pricing.description}</p>
                <Pricing data={pricing.plans} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

PricingPageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
}

export default PricingPageTemplate
