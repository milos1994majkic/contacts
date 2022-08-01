import Heading from '../components/atoms/Heading'
import ContactForm from '../components/organisms/form/ContactForm'

export default function CreatePage() {
  return (
    <div className="flex flex-col w-full">
      <div className="mb-6">
        <Heading title="Create contact" />
      </div>
      <div className="w-1/2">
        <ContactForm buttonTitle="Create" />
      </div>
    </div>
  )
}
