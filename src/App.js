import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/pages/Header/Header'
import Content from './components/pages/content/Content';


function App() {
  
  return (
    <Router>
      <Header />
      {/* <Content /> */}
      {/* <Routes>
        <Route path="/" exact component={Content} />
      </Routes> */}
    </Router>
  );
}

export default App;
