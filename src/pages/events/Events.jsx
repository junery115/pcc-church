import { NavLink } from "react-router-dom"


const Events = () => {
 

  return (
<>
    <section className="page-header page-header--events">

        <div className="gradient-overlay"></div>
        <div className="row page-header__content">
            <div className="column">
                <h1>Upcoming Events</h1>
            </div>
        </div>

    </section> 


    <section className="page-content">

        <div className="row wide block-large-1-2 block-900-full events-list">
            <div className="column events-list__item">
                <h3 className="display-1 events-list__item-title">
                    <NavLink to="events-single.html" title="">2019 Kids Church Camp.</NavLink>
                </h3>
                <p>
                Et consequatur nihil odio odit voluptatem qui. Dolores doloribus 
                cupiditate totam esse dolores quod. Magni aut incidunt fugiat 
                labore est ut non ipsam nihil. Voluptate rerum dolores unde 
                voluptas. Et similique praesentium dolor. Et quod 
                eius sint at quae est dolores. Beatae quo facere hic.
                </p>
                <ul className="events-list__meta">
                    <li className="events-list__meta-date">Saturday, September 28, 2019</li>
                    <li className="events-list__meta-time">8:00AM - 5:30PM</li>
                    <li className="events-list__meta-location">1600 Amphitheatre Parkway, Mt. View</li>
                </ul>
            </div>
            <div className="column events-list__item">
                <h3 className="display-1 events-list__item-title">
                    <NavLink to="events-single.html" title="">Prayer Meeting.</NavLink>
                </h3>
                <p>
                Laborum distinctio minima doloribus reiciendis aut aliquid. 
                Deleniti est adipisci ut quo ducimus eum ratione voluptas. 
                Voluptatem tenetur rem ratione velit ut. Repudiandae atque 
                perspiciatis est similique rerum nam qui iusto minus. Sapiente 
                porro dolores consequatur optio animi aut facere.
                </p>
                <ul className="events-list__meta">
                    <li className="events-list__meta-date">Saturday, July 27, 2019</li>
                    <li className="events-list__meta-time">6:00PM - 8:30PM</li>
                    <li className="events-list__meta-location">1600 Amphitheatre Parkway, Mt. View</li>
                </ul>
            </div>
            <div className="column events-list__item">
                <h3 className="display-1 events-list__item-title">
                    <NavLink to="events-single.html" title="">Youth Convergence.</NavLink>
                </h3>
                <p>
                Laborum distinctio minima doloribus reiciendis aut aliquid. 
                Deleniti est adipisci ut quo ducimus eum ratione voluptas. 
                Voluptatem tenetur rem ratione velit ut. Repudiandae atque 
                perspiciatis est similique rerum nam qui iusto minus. Sapiente 
                porro dolores consequatur optio animi aut facere.
                </p>
                <ul className="events-list__meta">
                    <li className="events-list__meta-date">Friday, July 26, 2019</li>
                    <li className="events-list__meta-time">5:00PM - 6:30PM</li>
                    <li className="events-list__meta-location">1600 Amphitheatre Parkway, Mt. View</li>
                </ul>
            </div>
            <div className="column events-list__item">
                <h3 className="display-1 events-list__item-title">
                    <NavLink to="events-single.html" title="">Leadership Conference.</NavLink>
                </h3>
                <p>
                Optio temporibus suscipit magnam. Consequatur doloribus sed. 
                Explicabo molestiae est minima. Distinctio quis optio architecto 
                molestiae officia molestiae qui veniam minima. Nemo placeat ex 
                dolor ratione qui autem eius vel. In dolorem aut enim aspernatur 
                molestias nostrum.
                </p>
                <ul className="events-list__meta">
                    <li className="events-list__meta-date">Sunday, July 28, 2019</li>
                    <li className="events-list__meta-time">2:00PM - 5:30PM</li>
                    <li className="events-list__meta-location">1600 Amphitheatre Parkway, Mt. View</li>
                </ul>
            </div>
            <div className="column events-list__item">
                <h3 className="display-1 events-list__item-title">
                    <NavLink to="events-single.html" title="">Baptism Sunday.</NavLink>
                </h3>
                <p>
                Et consequatur nihil odio odit voluptatem qui. Dolores doloribus 
                cupiditate totam esse dolores quod. Magni aut incidunt fugiat 
                labore est ut non ipsam nihil. Voluptate rerum dolores unde 
                voluptas. Et similique praesentium dolor. Et quod 
                eius sint at quae est dolores. Beatae quo facere hic.
                </p>
                <ul className="events-list__meta">
                    <li className="events-list__meta-date">Sunday, July 21, 2019</li>
                    <li className="events-list__meta-time">2:00PM - 4:00PM</li>
                    <li className="events-list__meta-location">1600 Amphitheatre Parkway, Mt. View</li>
                </ul>
            </div>
            <div className="column events-list__item">
                <h3 className="display-1 events-list__item-title">
                    <NavLink to="events-single.html" title="">Men's Conference.</NavLink>
                </h3>
                <p>
                Laborum distinctio minima doloribus reiciendis aut aliquid. 
                Deleniti est adipisci ut quo ducimus eum ratione voluptas. 
                Voluptatem tenetur rem ratione velit ut. Repudiandae atque 
                perspiciatis est similique rerum nam qui iusto minus. Sapiente 
                porro dolores consequatur optio animi aut facere.
                </p>
                <ul className="events-list__meta">
                    <li className="events-list__meta-date">Saturday, August 03, 2019</li>
                    <li className="events-list__meta-time">8:00AM - 5:30PM</li>
                    <li className="events-list__meta-location">1600 Amphitheatre Parkway, Mt. View</li>
                </ul>
            </div>
        </div>

        <div className="row">
            <div className="column large-full">
                <nav className="pgn">
                    <ul>
                        <li><NavLink className="pgn__prev" to="#0">Prev</NavLink></li>
                        <li><NavLink className="pgn__num" to="#0">1</NavLink></li>
                        <li><span className="pgn__num current">2</span></li>
                        <li><NavLink className="pgn__num" to="#0">3</NavLink></li>
                        <li><NavLink className="pgn__num" to="#0">4</NavLink></li>
                        <li><NavLink className="pgn__num" to="#0">5</NavLink></li>
                        <li><span className="pgn__num dots">…</span></li>
                        <li><NavLink className="pgn__num" to="#0">8</NavLink></li>
                        <li><NavLink className="pgn__next" to="#0">Next</NavLink></li>
                    </ul>
                </nav> 
            </div>
        </div>

    </section> 


    <section className="s-social">
            
        <div className="row social-content">
            <div className="column">
                <ul className="social-list">
                    <li className="social-list__item">
                        <NavLink href="#0" title="">
                            <span className="social-list__icon social-list__icon--facebook"></span>
                            <span className="social-list__text">Facebook</span>
                        </NavLink>
                    </li>
                    <li className="social-list__item">
                        <NavLink href="#0" title="">
                            <span className="social-list__icon social-list__icon--twitter"></span>
                            <span className="social-list__text">Twitter</span>
                        </NavLink>
                    </li>
                    <li className="social-list__item">
                        <NavLink href="#0" title="">
                            <span className="social-list__icon social-list__icon--instagram"></span>
                            <span className="social-list__text">Instagram</span>
                        </NavLink>
                    </li>
                    <li className="social-list__item">
                        <NavLink href="#0" title="">
                            <span className="social-list__icon social-list__icon--email"></span>
                            <span className="social-list__text">Email</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>

    </section>
</>
  )
}

export default Events
