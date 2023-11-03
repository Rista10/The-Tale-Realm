import React from 'react'
import NavBar from '../../components/navBar/navBar'
import Footer from '../../components/footer/footer'
import PopularStories from '../../components/popularStories/poPularStories'
import FeaturedStories from '../../components/featuredStories/featuredStories'
import TrendingStories from '../../components/trendingStories/trendingStories'
import Side from '../../components/side/side'
import ProfileCard from '../../components/profileCard/profileCard'

const HomeAfterLogin = () => {
  return (
    <div>
      <NavBar/>
      <ProfileCard/>
      

    </div>
  )
}

export default HomeAfterLogin