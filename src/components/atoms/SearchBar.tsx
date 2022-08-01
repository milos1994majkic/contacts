import SearchIcon from '../icons/SearchIcon'

export default function SearchBar() {
  return (
    <div className="text-sm text-gray-500">
      <div className="absolute z-10 py-6">
        <SearchIcon />
      </div>

      <input className="h-16 border-b w-full px-8 py-5" placeholder="Search" />
    </div>
  )
}
