// import pictures
import myPhoto from './images/myPhoto.png'
// import App css
import './App.css'
// react router dom
import {
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider, 
  Route
} from 'react-router-dom'
// components
import Root from './layout/Root'
import Main from './components/main/Main'
import Cources from './components/cources/Cources'
import Contact from './components/contact/Contact'
import CourceLayout from './layout/CourceLayout'
import Info from './components/info/Info'
import Mentor from './components/mentor/Mentor'
import Program from './components/program/Program'
import Comment from './components/comment/Comment'
import Watching from './components/watching/Watching'

function App() {

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<Main />} />
        <Route path='cources' element={<Cources />} />
        <Route path='contact' element={<Contact />} />
        <Route path='watching' element={<Watching />} />
        <Route path='cource' element={<CourceLayout />}>
          <Route index path='info' element={<Info />} />
          <Route path='mentor' element={<Mentor />} />
          <Route path='program' element={<Program />} />
          <Route path='comment' element={<Comment />} />
        </Route>
      </Route>
    )
  )

  return (
    <>
    <nav className="flex-div">
        <div className="nav-left flex-div">
            <i className="fa-sharp fa-solid fa-bars-staggered bars hidden"></i>
            <a className="flex-div" href="#">
                <img className="menu-icon" src={myPhoto} />
                <h1 className="logo">Cources</h1>
            </a>
        </div>
        <div className="nav-right flex-div">
            <i className='bx bx-sun sun'></i>
            <i style={{color: '#292B34'}} className='bx bx-moon icon__hidden moon'></i>
            <i className='bx bx-message-dots message__icon'></i>
            <img className="user-icon" src={myPhoto} />
        </div>
    </nav>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
