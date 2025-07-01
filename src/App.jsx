
import { Route, Routes } from 'react-router-dom'
import './App.css'

import BookEvent from './Components/BookEvent'
import Editevent from './Components/Editevent'
import PageNotFound from './Pages/PageNotFound'
import Home from './Pages/Home'
import ViewBookings from './Components/ViewBookings'
import EventPlan from './Pages/EventPlan'
import AllBookings from './Pages/AllBookings'
import Header from './Components/Header'
import PageFooter from './Components/PageFooter'



function App() {

  return (
    <>
    <Header/>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/plan' element={<EventPlan />} />
        <Route path='/edit/:id' element={<Editevent />} />
        <Route path='/allbookings' element={<AllBookings />} />


        <Route path='*' element={<PageNotFound/>}/>




      </Routes>
      <PageFooter/>
    </>
  )
}

export default App
