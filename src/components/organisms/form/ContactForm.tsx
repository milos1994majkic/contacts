import InputField from '../../atoms/InputField'
import LabelButton from '../../atoms/LabelButton'
import LabelInputField from '../../atoms/LabelInputField'
import SimpleButton from '../../atoms/SimpleButton'
import CreateUserDefaultIcon from '../../icons/CreateUserDefaultIcon'
import { v4 as uuidv4 } from 'uuid'
import { Link } from 'react-router-dom'
import { saveContact } from '../../../services/contact.api'

interface Props {
  buttonTitle: string
  setSubmitted: Function
}

export default function ContactForm({ buttonTitle, setSubmitted }: Props) {
  const userObject = {
    id: '',
    firstName: '',
    lastName: '',
    profilePhoto: '',
    email: '',
    phoneNumber: '',
    favourite: false,
    label: {
      id: '',
      title: '',
    },
  }

  const formData = (inputFieldName: string, data: any) => {
    userObject.id = uuidv4()
    userObject.profilePhoto = 'https://i.pravatar.cc/100'
    switch (inputFieldName) {
      case 'name':
        if (data.split(' ')) [userObject.firstName, userObject.lastName] = data.split(' ')
        else userObject.firstName = data
        break
      case 'email':
        userObject.email = data
        break
      case 'phone':
        userObject.phoneNumber = data
        break
    }
  }

  const createContact = () => {
    if (
      userObject.firstName !== '' &&
      userObject.lastName !== '' &&
      userObject.email !== '' &&
      userObject.phoneNumber !== ''
    )
      saveContact(userObject)
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between items-center">
        <div className="mb-6">
          <div className="mb-1">
            <LabelInputField value="Photo" />
          </div>
          <div className="flex flex-row">
            <div className="w-12 h-12 mr-5 rounded-full flex flex-row">
              <CreateUserDefaultIcon />
            </div>
            <div className="py-1">
              <SimpleButton value="Change" />
            </div>
          </div>
        </div>
        <LabelButton />
      </div>
      <div className="mb-6">
        <div className="mb-1">
          <LabelInputField value="Name" />
        </div>
        <InputField formData={formData} id="name" />
      </div>
      <div className="mb-6">
        <div className="mb-1">
          <LabelInputField value="Email address" />
        </div>
        <InputField formData={formData} id="email" />
      </div>
      <div className="mb-6">
        <div className="mb-1">
          <LabelInputField value="Phone number" />
        </div>
        <InputField formData={formData} id="phone" />
      </div>
      <div className="flex flex-row mr-3 mb-6">
        <Link to="/">
          <SimpleButton value="Cancel" />
        </Link>
        <Link to="/">
          <span
            onClick={() => {
              setSubmitted(true)
              createContact()
            }}
          >
            <SimpleButton value={buttonTitle} />
          </span>
        </Link>
      </div>
    </div>
  )
}
