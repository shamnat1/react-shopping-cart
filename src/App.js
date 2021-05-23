import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import './App.css';
import SideBar from './components/Layouts/SideBar'
import Header from './components/Layouts/Header'
import MainContent from './components/Layouts/MainContent'
import {fetchCartData} from './redux/cart-actions'
function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchCartData())
  },[dispatch])
  return (
    <div className="grid-container">
      
      <SideBar className="grid-sidebar"/>
      <Header/>
      
      <MainContent/>

    </div>
  );
}

export default App;
