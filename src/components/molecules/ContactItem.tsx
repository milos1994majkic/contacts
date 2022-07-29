import PencilIcon from '../icons/PencilIcon'
import StarIcon from '../icons/StarIcon'
import StarSolidIcon from '../icons/StarSolidIcon'
import TrashIcon from '../icons/TrashIcon'

interface Props {
  profilePhoto: string
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  favourite: boolean
}

export default function ContactItem({
  profilePhoto,
  firstName,
  lastName,
  email,
  phoneNumber,
  favourite,
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
        {favourite ? <StarSolidIcon /> : <StarIcon />}
        <span className="mx-4">
          <TrashIcon />
        </span>
        <PencilIcon />
      </div>
    </div>
  )
}
