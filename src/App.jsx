import './App.scss';
import 'remixicon/fonts/remixicon.css';
import Header from './components/Header/Header';
import SobreMi from './components/SobreMi/SobreMi';
import Proyectos from './components/Proyectos/Proyectos';
import Contactame from './components/Contactame/Contactame';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <SobreMi />
      <Proyectos />
      <Contactame />
      <Footer />
    </>
  );
}

export default App;
