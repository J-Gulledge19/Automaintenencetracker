import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import App from "./App"
import Index from "./pages/Index"
import Show from "./pages/Show"
import NewCar from "./pages/NewCar"
import Update from "./pages/Update"
import UpdateCar from "./pages/UpdateCar"
import CreateMaint from "./pages/CreateMaint"
import { RootStore } from "./stores/RootStore"


export const store = new RootStore()

const router = createBrowserRouter(createRoutesFromElements(
  <>
      <Route path="/" element={<App/>}>
          <Route path="" element={<Index/>}/>
          <Route path="show/:id" element={<Show/>} />
          <Route path="create" element={<NewCar/>} />
          <Route path="newmaint/:id" element={<CreateMaint/>} />
          <Route path="edit/:id/:maintId" element={<Update/>} />
          <Route path="editcar/:id" element={<UpdateCar/>}/>
      </Route>
  </>
))

export default router
