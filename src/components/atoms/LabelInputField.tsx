interface Props {
  value: string
}

export default function LabelInputField({ value }: Props) {
  return <div className="h-5 text-gray-700 font-medium text-sm leading-5">{value}</div>
}
