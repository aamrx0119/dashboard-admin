import './App.css';
import { useRoutes } from 'react-router-dom';
import routes from './pages/Routes/Routes';
import Nav from './componens/Nav/Nav'
import Panel from './componens/Panel/Panel';
function App() {
  let router = useRoutes(routes)
  return (
    <>
      <Nav></Nav>
      <div className='container'>
        <Panel></Panel>
        {router}
        
      </div>

    </>
  );
}

export default App;
