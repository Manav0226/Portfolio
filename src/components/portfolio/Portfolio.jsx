import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/skytexh.gif'
import IMG2 from '../../assets/portfolio3.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/shopskytexh.png'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Sky Texh (⚡Only Desktop)',
    subtitle:'(Space Exploration Company)',
    github: 'https://github.com/Manav0226/Sky-Texh',
    demo: 'https://sky-tech.herokuapp.com/sky-texh.html'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Crypto Currency Dashbard',
    subtitle:'',
    github: 'https://github.com',
    demo: 'https://dribble.com'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Crypto Currency Dashbard',
    subtitle:'',
    github: 'https://github.com',
    demo: 'https://dribble.com'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Sky Texh Shop (⚡Only Desktop)',
    subtitle:'(Shopping Website)',
    github: 'https://github.com/Manav0226/Sky-Texh',
    demo: 'https://sky-tech.herokuapp.com/index.html'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Crypto Currency Dashbard',
    subtitle:'',
    github: 'https://github.com',
    demo: 'https://dribble.com'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Crypto Currency Dashbard',
    subtitle:'',
    github: 'https://github.com',
    demo: 'https://dribble.com'
  },
  
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({id, image, title,subtitle, github, demo}) => {
            return (
            <article key={id} className='portfolio_items'>
            <div className="porfolio_item-img">
              <img src={image} alt={title} />
            </div>
            <h3>{title}<h6><i>{subtitle}</i></h6></h3>
            <div className="portfolio_item-cta">
            <a href={github} className='btn' target='blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='blank'>Live Demo</a>
            </div>
          </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio