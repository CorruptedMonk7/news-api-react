import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Spinner,Row, Card,Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import News from './Components/News/News'


function App() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-09-01&sortBy=publishedAt&apiKey=802750a25776416383a2d6f562cc605f')
      .then(res => res.json())
      .then(data => setNews(data.articles))
  }, [])
  return (
    <div className="App">
      { news.length ===0 ?
      <Spinner animation="grow" />
      :
        <Row xs={1} md={3} className="g-4">
        {
          news.map(nw => <News
          news={nw}
          ></News> )
        }
      </Row>}

    </div>
  );
}

export default App;
