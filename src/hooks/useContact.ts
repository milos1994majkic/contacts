import axios from 'axios'
import { useState } from 'react'
import { ContactInterface } from '../../data/ContactsInterface'

export const useContacts = () => {
  const [contacts, setContact] = useState<ContactInterface[]>([])
  const reqContacts = async () => {
    const getContacts = await axios.get(process.env.REACT_APP_API_URL + '/contacts')
    setContact(getContacts.data)
  }
  return { contacts, reqContacts }
}

export const useLabels = () => {
  const [labels, setLabels] = useState<ContactInterface[]>([])
  const reqLabels = async () => {
    const getLabels = await axios.get(process.env.REACT_APP_API_URL + '/labels')
    setLabels(getLabels.data)
  }
  return { labels, reqLabels }
}
