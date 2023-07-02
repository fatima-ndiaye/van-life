import React from 'react'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import NotFound from './Pages/NotFound'
import Vans, {loader as vansLoader} from './Pages/Vans/Vans'
import VanDetail from './Pages/Vans/vanDetail'
import Dashboard from './Pages/Host/Dashboard'
import Income from './Pages/Host/Income'
import Reviews from './Pages/Host/Reviews'
import HostVans from './Pages/Host/HostVans'
import HostVanDetail from './Pages/Host/HostVanDetail'
import HostVanInfo from './Pages/Host/HostVanInfo'
import HostVanPricing from './Pages/Host/HostVanPricing'
import HostVanPhotos from './Pages/Host/HostVanPhotos'
import Layout from './components/Layout'
import HostLayout from './components/HostLayout'
import "./server"

const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout />}>
    <Route path='/' element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='vans' element={<Vans />} loader={vansLoader}/>
    <Route path='vans/:id' element={<VanDetail />} />

    <Route path="/host" element={<HostLayout />}>
      <Route index element={<Dashboard />} />
      <Route path='income' element={<Income />} />
      <Route path='vans' element={<HostVans />} />

      <Route path='vans/:id' element={<HostVanDetail />}>
        <Route index element={<HostVanInfo />} />
        <Route path='pricing' element={<HostVanPricing />} />
        <Route path='photos' element={<HostVanPhotos />} />
      </Route>

      <Route path='reviews' element={<Reviews />} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </Route>

))
function App() {
 
  return (
    <RouterProvider router={router} />
  )
}

export default App
