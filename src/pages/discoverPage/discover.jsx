import React from 'react'
import NavBar from '../../components/navBar/navBar'
import Footer from '../../components/footer/footer'
import PopularStories from '../../components/popularStories/poPularStories'
import FeaturedStories from '../../components/featuredStories/featuredStories'
import TrendingStories from '../../components/trendingStories/trendingStories'
import Side from '../../components/side/side'
import './discover.css'

const Discover = () => {
  return (
    <div>
      <NavBar/>
      <main>
      <div className='container'>
          <section className='mainContent'>
            <h2>Discover Stories</h2>
            <PopularStories/>
            <FeaturedStories/>
            <TrendingStories/>
          </section>
          <section className='sideContent'>
        <Side/>
          </section>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default Discover