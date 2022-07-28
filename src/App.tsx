import { useState } from 'react'
import { Route, Routes, BrowserRouter as Router, Outlet } from 'react-router-dom'
import Popup from './components/organisms/popup/Popup'
import SideMenu from './components/organisms/side-menu/SideMenu'

function App() {
  const [showPopup, setShowPopup] = useState(false)
  const [popupTitle, setPopupTitle] = useState('')

  return (
    <>
      <div className="flex">
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <SideMenu setShowPopup={setShowPopup} setPopupTitle={setPopupTitle} />
                  <Outlet />
                </>
              }
            >
              <Route path="create" />
              <Route path="favorites" />
              <Route path="label/work" />
              <Route path="label/family" />
              <Route path="label/friends" />
            </Route>
          </Routes>
        </Router>
      </div>
      <Popup showPopup={showPopup} setShowPopup={setShowPopup} popupTitle={popupTitle} />
    </>
  )
}

export default App
