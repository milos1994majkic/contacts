import Heading from '../components/atoms/Heading'
import ContactForm from '../components/organisms/form/ContactForm'

interface Props {
  setSubmitted: Function
}

export default function CreatePage({ setSubmitted }: Props) {
  return (
    <div className="flex flex-col w-full">
      <div className="mb-6">
        <Heading title="Create contact" />
      </div>
      <div className="w-1/2">
        <ContactForm buttonTitle="Create" setSubmitted={setSubmitted} />
      </div>
    </div>
  )
}
