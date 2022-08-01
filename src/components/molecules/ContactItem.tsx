import { Link } from 'react-router-dom'
import { makeFavourite } from '../../services/contact.api'
import PencilIcon from '../icons/PencilIcon'
import StarIcon from '../icons/StarIcon'
import StarSolidIcon from '../icons/StarSolidIcon'
import TrashIcon from '../icons/TrashIcon'

interface Props {
  id: string
  profilePhoto: string
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  favourite: boolean
  setShowPopup: Function
  setPopupTitle: Function
  setContactId: Function
  setSubmitted: Function
}

export default function ContactItem({
  id,
  profilePhoto,
  firstName,
  lastName,
  email,
  phoneNumber,
  favourite,
  setShowPopup,
  setPopupTitle,
  setContactId,
  setSubmitted,
}: Props) {
  return (
    <div className="flex flex-row justify-between border pl-6 py-3 pr-7 items-center">
      <div className="flex flex-row items-center w-3/12">
        <img src={profilePhoto} alt="userPhoto" className="h-10 w-10 rounded-full mr-4" />
        <div className="flex flex-row font-medium text-gray-900">
          <p>{firstName}</p>
          {'\u00a0'}
          <p>{lastName}</p>
        </div>
      </div>
      <p className="text-gray-500 w-3/12">{email}</p>
      <p className="text-gray-500 w-3/12">{phoneNumber}</p>
      <div className="flex flex-row text-gray-500">
        <span
          onClick={() => {
            makeFavourite(id, !favourite)
            setSubmitted(true)
          }}
        >
          {favourite ? <StarSolidIcon /> : <StarIcon />}
        </span>
        <span
          className="mx-4"
          onClick={() => {
            setShowPopup(true)
            setPopupTitle('')
            setContactId(id)
          }}
        >
          <TrashIcon />
        </span>
        <Link to="edit">
          <PencilIcon />
        </Link>
      </div>
    </div>
  )
}
