import './App.css'
import Header from './components/Header'
import {Routes, Route} from 'react-router-dom'
import MainPage from './pages/MainPage'
import Logo from './components/Logo'
import DefineRerson from './pages/DefineRerson'
import DefineEpison from './pages/DefineEpison'
import Locations from './pages/Locations'
import Episode from './pages/Episode'
import DefineLocation from './pages/DefineLocation'

function App() {

  return (
    <>
    <Header/>
    
    <div style={{marginTop:'120px'}}>
      
      <Logo/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/charackter/:id' element={<DefineRerson/>}/>
        <Route path='/episode/:id' element={<DefineEpison/>}/>
        <Route path='/location' element={<Locations/>}/>
        <Route path='/episode' element={<Episode/>}/>
        <Route path='/location/:id' element={<DefineLocation/>}></Route>
      </Routes>
    </div>
    </>
  )
}

export default App
