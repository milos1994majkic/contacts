import { useEffect, useState } from 'react'
import { useLabels } from '../../hooks/useContact'
import CheckIcon from '../icons/CheckIcon'
import ChevronDownIcon from '../icons/ChevronDownIcon'

export default function LabelButton() {
  const { labels, reqLabels } = useLabels()
  const [clicked, setClicked] = useState(false)
  const [labelId, setLabelId] = useState('')

  useEffect(() => {
    reqLabels()
  }, [])

  return (
    <>
      <button
        className="flex flex-row items-center h-9 font-medium border rounded-md pl-4 pr-2.5 py-2 text-sm text-gray-700 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:bg-gray-100"
        type="button"
        data-dropdown-toggle="dropdown"
        onClick={() => setClicked(!clicked)}
      >
        Labels
        <div className="ml-2  pl-1 py-1.5">
          <ChevronDownIcon />
        </div>
      </button>
      <div
        id="dropdown"
        className={`${
          clicked ? 'absolute' : 'hidden'
        } z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700`}
        style={{ transform: 'translateY(92px)', right: '770px' }}
      >
        <ul
          className="py-1 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefault"
        >
          {labels.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  setLabelId(item.id)
                }}
              >
                <p className="flex flex-row block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white capitalize items-center">
                  <p className="pr-3">
                    <CheckIcon />
                  </p>
                  {item.title}
                </p>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
