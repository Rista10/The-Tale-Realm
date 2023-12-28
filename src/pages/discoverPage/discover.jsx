
import NavBar from '../../components/navBar/navBar'
import PopularStories from '../../components/popularStories/poPularStories'
import FeaturedStories from '../../components/featuredStories/featuredStories'
import TrendingStories from '../../components/trendingStories/trendingStories'
import './discover.css'
import MoreFromAuthor from '../../components/moreFromAuthor/moreFromAuthor'
import Category from '../../components/category/category'
import { SearchBar } from '../../components/searchBar/searchBar'

const Discover = () => {
  return (
    <div>
      <NavBar/>
      <main>
      <div className='container'>
          <section className='mainContent'>
            <h2>Discover Stories</h2>
            <SearchBar/>
            <PopularStories/>
            <FeaturedStories/>
            <TrendingStories/>
          </section>
          <section className='sideContent'>
        <MoreFromAuthor/>
        <Category/>
          </section>
        </div>
      </main>
    </div>
  )
}

export default Discover