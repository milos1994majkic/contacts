import PlusIcon from '../icons/PlusIcon'

export default function CreateButton() {
  return (
    <div className="flex text-white bg-indigo-600	rounded-lg pl-2.5	py-2 font-medium">
      <PlusIcon />
      <p className="ml-2.5 pr-2.5">Create contact</p>
    </div>
  )
}
