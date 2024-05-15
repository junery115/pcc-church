import React from 'react'
import { EventCard, HomeHeroSection } from '../../components'
import { Link } from 'react-router-dom'

const Home = () => {
  const events = JSON.parse(localStorage.getItem("events"))?.slice(0,6)
  return (
    <div className=''>
      <HomeHeroSection/>
     <div className="main__welcome">
      <div className="main__welcome-container">
      <div className="main__welcome-container-header">
        <h3>WELCOME TO PCC BELTSVILLE</h3>
      </div>
      <div className="main__welcome-container-text">
        <p>Vero autem et officiis officia sint in odio in iusto. Blanditiis tempore ipsa saepe quaerat quas sed. Ut velit necessitatibus est repellat sunt quia fuga doloremque. Nostrum et ut optio suscipit eos quisquam et. Nulla molestiae voluptates hic et accusantium occaecati recusandae veniam cum.</p>
      </div>
      <div className="main__welcome-container-link">
        <Link to="/about-us" className='welcome-link'>
          More about pcc beltsville
        </Link>
      </div>
      </div>
      <div className="main__welcome-programs">
      <div className="main__welcome-program">
        <div className="main__welcome-program-header">
        <h4>MAIN CHURCH SERVICE</h4>
        </div>
        <span>Sunday - 9:00 AM | 1:00 PM | 4:30 PM</span>
        <span>1600 Amphitheatre Parkway, Mt. View, CA, 94043</span>
      </div>
      <div className="main__welcome-program">
        <div className="main__welcome-program-header">
        <h4>KIDS CHURCH</h4>
        </div>
        <span>Sunday - 9:00 AM | 1:00 PM | 4:30 PM</span>
        <span>1600 Amphitheatre Parkway, Mt. View, CA, 94043</span>
      </div>
      <div className="main__welcome-program" style={{borderBottom:"1px solid rgba(194, 194, 214,0.6"}}>
        <div className="main__welcome-program-header">
        <h4>PRAYER MEETING</h4>
        </div>
        <span>Saturday - 7:00 PM</span>
        <span>1600 Amphitheatre Parkway, Mt. View, CA, 94043</span>
      </div>
      </div>
     </div>
      <div className="main__events">
        <div className="main__events-header">
          <h3>Upcoming Events</h3>
        </div>
        <div className="main__events-container">
          {
            events?.map(({post,id}) => (
              <EventCard item={post} id={id} key={id}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Home
