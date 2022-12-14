import { useEffect, useState } from 'react'
import { Route, Routes, BrowserRouter as Router, Outlet } from 'react-router-dom'
import SearchBar from './components/atoms/SearchBar'
import Popup from './components/organisms/popup/Popup'
import SideMenu from './components/organisms/side-menu/SideMenu'
import { useContacts } from './hooks/useContact'
import ContactsPage from './pages/ContactsPage'
import CreatePage from './pages/CreatePage'
import EditPage from './pages/EditPage'

function App() {
  const [showPopup, setShowPopup] = useState(false)
  const [popupTitle, setPopupTitle] = useState('')
  const [contacId, setContactId] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const { contacts, reqContacts } = useContacts()
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    reqContacts()
    setSubmitted(false)
  }, [submitted])

  return (
    <>
      <div className="flex">
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <SideMenu
                    setShowPopup={setShowPopup}
                    setPopupTitle={setPopupTitle}
                    submitted={submitted}
                  />
                  <div className="ml-80 px-8 pb-7 w-full">
                    <SearchBar setSearchValue={setSearchValue} />
                    <Outlet />
                  </div>
                </>
              }
            >
              <Route
                path=""
                element={
                  <ContactsPage
                    contacts={contacts.filter(
                      (item) =>
                        item.firstName.toLowerCase().includes(searchValue.toLowerCase()) ||
                        item.lastName.toLowerCase().includes(searchValue.toLowerCase()) ||
                        item.email.toLowerCase().includes(searchValue.toLowerCase()) ||
                        item.phoneNumber.toLowerCase().includes(searchValue.toLowerCase())
                    )}
                    setShowPopup={setShowPopup}
                    setPopupTitle={setPopupTitle}
                    setContactId={setContactId}
                    setSubmitted={setSubmitted}
                  />
                }
              />
              <Route path="create" element={<CreatePage setSubmitted={setSubmitted} />} />
              <Route
                path="favorites"
                element={
                  <ContactsPage
                    contacts={contacts.filter(
                      (item) =>
                        item.favourite &&
                        (item.firstName
                          .toLowerCase()
                          .includes(searchValue.toLowerCase().toLowerCase()) ||
                          item.lastName.toLowerCase().includes(searchValue.toLowerCase()) ||
                          item.email.toLowerCase().includes(searchValue.toLowerCase()) ||
                          item.phoneNumber.toLowerCase().includes(searchValue.toLowerCase()))
                    )}
                    setShowPopup={setShowPopup}
                    setPopupTitle={setPopupTitle}
                    setContactId={setContactId}
                    setSubmitted={setSubmitted}
                  />
                }
              />
              <Route path="edit" element={<EditPage setSubmitted={setSubmitted} />} />
              <Route path="label/work" />
              <Route path="label/family" />
              <Route path="label/friends" />
            </Route>
          </Routes>
        </Router>
      </div>
      <Popup
        showPopup={showPopup}
        setShowPopup={setShowPopup}
        popupTitle={popupTitle}
        contactId={contacId}
        setContactId={setContactId}
        setSubmitted={setSubmitted}
      />
    </>
  )
}

export default App
