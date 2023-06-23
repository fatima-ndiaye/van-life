import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Vans from './Pages/Vans/Vans'
import VanDetail from './Pages/Vans/vanDetail'
import Dashboard from './Pages/Host/Dashboard'
import Income from './Pages/Host/Income'
import Reviews from './Pages/Host/Reviews'
import HostVans from './Pages/Host/HostVans'
import HostVanDetail from './Pages/Host/HostVanDetail'
import Layout from './components/Layout'
import HostLayout from './components/HostLayout'
import "./server"

function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
            <Route path='/' element={<Home />}/>
            <Route path='about' element={<About />} />
            <Route path='vans' element={<Vans />} />
            <Route path='vans/:id' element={<VanDetail />}/>

            <Route path="/host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path='income' element={<Income />} />
              <Route path='vans' element={<HostVans />} />
              <Route path='vans/:id' element={<HostVanDetail />} />
              <Route path='reviews' element={<Reviews />} /> 
            </Route>

          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
/**
 * Challenge: add the /host/vans and /host/vans/:id routes, as well
 * as the "Vans" link in the Host navbar.
 * 
 * For now, just create the stubbed-out version of the pages (i.e.
 * components that just render an <h1>). Don't worry about adding
 * navigation from /host/vans to /host/vans/:id yet - the link to
 * /host/vans is enough for now.
 * 
 * When deciding whether or not to use nested routes, keep in mind
 * what will/won't be shared between these two pages. See the Figma
 * design file (or the screenshots) to help guide your choice.
 */
