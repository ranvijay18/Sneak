import './HomeBanner.css'
import Card from '../UI/Card'

const HomeBanner = () => {
   return (
      <div className="home-banner">
      <h1 className='heading'>Tours</h1>
      <Card className="tour-card">
        <div className='tours'>
        <h3>16 Jul</h3>
        <p>DETROIT, MI</p>
        <p>DTE ENERGY MUSIC THEATRE</p>
        <button className='buy-btn'>Buy Tickets</button>
        </div>
        <hr />
        <div className='tours'>
        <h3>16 Jul</h3>
        <p>DETROIT, MI</p>
        <p>DTE ENERGY MUSIC THEATRE</p>
        <button className='buy-btn'>Buy Tickets</button>
        </div>
        <hr />
        <div className='tours'>
        <h3>16 Jul</h3>
        <p>DETROIT, MI</p>
        <p>DTE ENERGY MUSIC THEATRE</p>
        <button className='buy-btn'>Buy Tickets</button>
        </div>
        <hr />
        <div className='tours'>
        <h3>16 Jul</h3>
        <p>DETROIT, MI</p>
        <p>DTE ENERGY MUSIC THEATRE</p>
        <button className='buy-btn'>Buy Tickets</button>
        </div>
        <hr/>
        <div className='tours'>
        <h3>16 Jul</h3>
        <p>DETROIT, MI</p>
        <p>DTE ENERGY MUSIC THEATRE</p>
        <button className='buy-btn'>Buy Tickets</button>
        </div>
      </Card>
      </div>
   )
}


export default HomeBanner