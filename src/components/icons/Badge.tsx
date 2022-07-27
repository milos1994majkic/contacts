interface Props {
  value: number
  isActive: { isActive: boolean }
}

export default function Badge({ value, isActive }: Props) {
  return (
    <div
      className={`rounded-full ${
        isActive.isActive ? 'bg-white' : 'bg-gray-100'
      } font-medium text-gray-600 px-3`}
    >
      {value}
    </div>
  )
}
