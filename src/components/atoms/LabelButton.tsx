import { useEffect } from 'react'
import { useLabels } from '../../hooks/useContact'
import ChevronDownIcon from '../icons/ChevronDownIcon'

export default function LabelButton() {
  const { labels, reqLabels } = useLabels()

  useEffect(() => {
    reqLabels()
  }, [])

  return (
    <>
      <button
        className="flex flex-row items-center h-9 font-medium border rounded-md pl-4 pr-2.5 py-2 text-sm text-gray-700 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:bg-gray-100"
        type="button"
        data-dropdown-toggle="dropdown"
      >
        Labels
        <div className="ml-2  pl-1 py-1.5">
          <ChevronDownIcon />
        </div>
      </button>
      <div
        id="dropdown"
        className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
      >
        <ul
          className="py-1 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefault"
        >
          <li>
            <a
              href="#"
              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Earnings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
