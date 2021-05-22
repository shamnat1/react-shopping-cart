 import {useSelector} from 'react-redux' ;
import './App.css';
import SideBar from './components/Layouts/SideBar'
import Header from './components/Layouts/Header'
import MainContent from './components/Layouts/MainContent'

function App() {
  
  return (
    <div className="grid-container">
      
      <SideBar className="grid-sidebar"/>
      <Header/>
      
      <MainContent/>

    </div>
  );
}

export default App;
