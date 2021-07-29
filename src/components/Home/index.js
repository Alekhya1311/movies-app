import Trending from '../Trending'
import TopRated from '../TopRated'
import Original from '../Original'
import RandomOriginal from '../RandomOriginal'

import './index.css'

const Home = () => (
  <>
    <div className="home-sections">
      <RandomOriginal />
      <Trending />
      <TopRated />
      <Original />
    </div>
  </>
)

export default Home
