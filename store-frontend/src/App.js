
import { Container, } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './Views/HomeScreen';
import ProductScreen from './Views/ProductScreen';

//create a funtion that returns a router component for HomeScreen

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} exact />
            <Route path='/product/:id' element={<ProductScreen />} exact />
          </Routes>
        </Container>
      </main>
      <Footer />

    </Router>
  );
}

export default App;