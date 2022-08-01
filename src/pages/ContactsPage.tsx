import { ContactInterface } from '../../data/ContactsInterface'
import Heading from '../components/atoms/Heading'
import ContactItem from '../components/molecules/ContactItem'

interface Props {
  contacts: ContactInterface[]
  setShowPopup: Function
  setPopupTitle: Function
  setContactId: Function
}

export default function ContactsPage({
  contacts,
  setShowPopup,
  setPopupTitle,
  setContactId,
}: Props) {
  return (
    <div className="flex flex-col w-full">
      <Heading title="Contacts" />
      <div className="flex flex-row w-full justify-between h-10 text-xs font-medium text-gray-500 items-center bg-gray-50 self-center shadow-md mt-4 pl-6 py-3 rounded-t-lg">
        <p className="uppercase w-3/12">name</p>
        <p className="uppercase w-3/12">email</p>
        <p className="uppercase w-3/12">phone number</p>
        <p></p>
      </div>
      {contacts.map((item: ContactInterface, index: number) => (
        <ContactItem
          key={index}
          id={item.id}
          profilePhoto={item.profilePhoto}
          firstName={item.firstName}
          lastName={item.lastName}
          email={item.email}
          phoneNumber={item.phoneNumber}
          favourite={item.favourite}
          setShowPopup={setShowPopup}
          setPopupTitle={setPopupTitle}
          setContactId={setContactId}
        />
      ))}
    </div>
  )
}
