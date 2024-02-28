import { Link } from 'react-router-dom';

const Home = () => {
	return (
    <main>
      <div className="jumbotron jumbotron-fluid style" style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url('https://preview.redd.it/n2t2137ysxq71.jpg?auto=webp&s=7a817f3f55ab63e8417e752972ea7c64e41345af')"}}>
        <section className="container">
          <h1 className="display-4">Ghibli Studio Challenge</h1>
          <p className="lead">
            Studio Ghibli was founded in 1985 by animated film directors
            Isao Takahata and Hayao Miyazaki, and has produced twenty-two
            feature-length films.
          </p>
        </section>
      </div>

      <div className="home-cards">
        <Link to="/films" style={{ textDecoration: 'none' }}>
          <div className="card-home-category" style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiw0j33GdRZdr7jYb7_hG7iB1yPtv8-lHlrVtTE32YjRgj853seR1HkHtE-5r4jGiRItXUmH93xuK-XRR9h2222n9Wdln8N6wcYc6ZzT2EHu4PjtK8JXq9GQjkwVH2XeMlyfy1bhiTfASv3EZRJwB2itDrl-4XbrHAMji7p8se-HcGyMkMHiPBGt53o8DSt/s900-rw/studio-ghibli-backgrounds-7.jpg')"}}>
            Films
          </div>
        </Link>
        <Link to="/people" style={{ textDecoration: 'none' }}>
          <div className="card-home-category" style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjcbma8LMEzw0zc7vWOW44LGSZG1RyfuZxoRuETPv6gXdrD9Qxg2I96AK4WvAFW2N1o0TYHaELMvQM5m1NvRE1NRNt0a9D5tscSYSfMyvN1TIMMGhFJE0wQTJzWuIPEQOQclbqxrjO0yvZMHDaadxEiCNiIvmw9puDkvBm0kDZ1BzfKMuIh_NCiVTlcqI4a/s900-rw/studio-ghibli-backgrounds-13.png')"}}>
            People
          </div>
        </Link>
      </div>
    </main>
	)
}

export default Home;
