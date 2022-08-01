interface Props {
  value?: string
  submitted?: boolean
  formData: Function
  id?: string
}

export default function InputField({ value, submitted, formData, id }: Props) {
  return (
    <input
      className="w-full h-11 border rounded-md border-gray-300 px-3 py-2"
      type="text"
      required
      onChange={(event) => {
        formData(id, event.target.value)
      }}
    >
      {value}
    </input>
  )
}
