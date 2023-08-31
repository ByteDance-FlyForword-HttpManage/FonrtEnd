//dependencies
import { BrowserRouter, Route, Routes } from 'react-router-dom'

//components
import GreekLayout from '../pages/GreekLayout'
import ApiManage from '../pages/ApiManage'

const AppRouter = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={GreekLayout}></Route>
            <Route path="/apimanage" Component={ApiManage}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default AppRouter
