interface Props {
  title: string
}

export default function Heading({ title }: Props) {
  return <h1 className="font-semibold text-2xl text-gray-900 mt-6	mb-4">{title}</h1>
}
