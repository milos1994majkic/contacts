interface Props {
  value: string
}

export default function SimpleButton({ value }: Props) {
  let returnValue: JSX.Element

  if (value === 'Cancel' || value === 'Change') {
    returnValue = (
      <button
        className="font-medium border rounded-md px-4 py-2 text-sm text-gray-700 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:bg-gray-100"
        type="button"
        onClick={() => {}}
      >
        {value}
      </button>
    )
  } else {
    returnValue = (
      <button
        className="font-medium border-indigo-600 bg-indigo-600 hover:bg-indigo-800 text-white active:bg-emerald-600 text-sm ml-3 px-6 py-2 rounded-md shadow outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => {}}
      >
        {value}
      </button>
    )
  }

  return returnValue
}
