import AdminPanel from "./components/AdminPanel";
import FormLogin from './components/auth/FormLogin.jsx';
import Portada from './home/Portada.jsx';
import LoginPage from './pages/LoginPage.jsx';
import Error404 from './pages/Error404Page.jsx';
import Header from "./components/Header.jsx";
import Categorias from "./home/Categorias.jsx";

function App() {
  return (
    <>
      <Header/>
      <Portada/> 
      <Categorias/>
    </>
)
}

export default App;