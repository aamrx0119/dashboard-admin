import './App.css';
import { useEffect, useRef } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './pages/Routes/Routes';
import Nav from './componens/Nav/Nav'
import Panel from './componens/Panel/Panel';
import Footer from './componens/Footer/Footer';
function App() {
  let router = useRoutes(routes)

  let Elm = useRef()


  const setTheme = (state)=>{

    if (state===false){
      Elm.current.classList.add('darkMode')
      
    }else{
      Elm.current.classList.remove('darkMode')
      
    }
    
  }

  
  return (
    <>
      <Nav Func={setTheme}></Nav>
      <div ref={Elm} className='container '>
        <Panel></Panel>
        {router}
        
      </div>
      <Footer></Footer>

    </>
  );
}

export default App;
