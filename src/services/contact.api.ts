import axios from 'axios'
import { ContactInterface } from '../../data/ContactsInterface'

export const saveContact = async (data: ContactInterface) => {
  await axios.post(process.env.REACT_APP_API_URL + '/contacts', data)
}

export const deleteContact = async (id: string) => {
  await axios.delete(process.env.REACT_APP_API_URL + '/contacts/' + id)
}

export const makeFavourite = async (id: string, oldState: boolean) => {
  axios.patch(process.env.REACT_APP_API_URL + '/contacts/' + `${id}/`, {
    favourite: oldState,
  })
}
