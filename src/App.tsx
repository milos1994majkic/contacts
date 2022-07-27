import { Route, Routes, BrowserRouter as Router, Outlet } from 'react-router-dom'
import SideMenu from './components/organisms/side-menu/SideMenu'

function App() {
  return (
    <div className="flex">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SideMenu />
                <Outlet />
              </>
            }
          >
            <Route path="create" />
            <Route path="favorites" />
            <Route path="work" />
            <Route path="family" />
            <Route path="friends" />
            <Route path="newLabel" />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
