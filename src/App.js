
import './App.css';
import Row from './Row';
import requests from './request';
import Banner from './Banner';


function App() {
  return (
    <div className="App">
      <Banner></Banner>

      <Row isPoster={true} title="Trending" fetchUrl={requests.fetchTrending} ></Row>
      <Row title="Orginals" fetchUrl={requests.fetchNetflixOriginals} ></Row>
      <Row title="TopRated" fetchUrl={requests. fetchTopRated} ></Row>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} ></Row>
      <Row title="Comedy movies" fetchUrl={requests.fetchComedyMovies} ></Row>
      <Row title="Horror movies" fetchUrl={requests.fetchHorrorMovies} ></Row>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} ></Row>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} ></Row>
      
     
    </div>
  );
}

export default App;
