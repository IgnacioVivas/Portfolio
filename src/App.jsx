import './App.scss';
import 'remixicon/fonts/remixicon.css';
import Header from './components/Header/Header';
import SobreMi from './components/SobreMi/SobreMi';
import Proyectos from './components/Proyectos/Proyectos';
import Contactame from './components/Contactame/Contactame';

function App() {
  return (
    <>
      <Header />
      <SobreMi />
      <Proyectos />
      <Contactame />
    </>
  );
}

export default App;
