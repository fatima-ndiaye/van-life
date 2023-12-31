import React from 'react'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import NotFound from './Pages/NotFound'
import Login, {loader as loginLoader, action as loginAction} from "./Pages/Login"
import Vans, {loader as vansLoader} from './Pages/Vans/Vans'
import VanDetail, { loader as vanDetailLoader } from './Pages/Vans/VanDetail'
import Dashboard from './Pages/Host/Dashboard'
import Income from './Pages/Host/Income'
import Reviews from './Pages/Host/Reviews'
import HostVans, { loader as hostVansLoader } from './Pages/Host/HostVans'
import HostVanDetail, { loader as hostVanDetailLoader } from './Pages/Host/HostVanDetail'
import HostVanInfo  from './Pages/Host/HostVanInfo'
import HostVanPricing from './Pages/Host/HostVanPricing'
import HostVanPhotos  from './Pages/Host/HostVanPhotos'
import Layout from './components/Layout'
import HostLayout from './components/HostLayout'
import Error from './components/Error'
import { requireAuth } from "./utils"
import "./server"

const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout />}>
    <Route path='/' element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='login' element={<Login />} loader={loginLoader} action={loginAction}/>
    <Route path='vans' element={<Vans />} loader={vansLoader} errorElement={<Error/>}/>
    <Route path='vans/:id' element={<VanDetail />} loader={vanDetailLoader} errorElement={<Error />} />

    <Route path="host" element={<HostLayout />} >

      <Route index element={<Dashboard />} loader={async ({ request }) => { await requireAuth(request) ; return null}} />
      <Route path='income' element={<Income />} loader={async ({ request }) => { await requireAuth(request); return null }} />
      <Route path='vans' element={<HostVans />} loader={hostVansLoader} errorElement={<Error />} />
      <Route path='vans/:id' element={<HostVanDetail />} loader={hostVanDetailLoader} errorElement={<Error />}>
        <Route index element={<HostVanInfo />} loader={async ({ request }) => { await requireAuth(request); return null }} />
        <Route path='pricing' element={<HostVanPricing />} loader={async ({ request }) => { await requireAuth(request); return null }} />
        <Route path='photos' element={<HostVanPhotos />} loader={async ({ request }) => { await requireAuth(request); return null }} />
      </Route>
      <Route path='reviews' element={<Reviews />} loader={async ({ request }) => { await requireAuth(request); return null }} />

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
