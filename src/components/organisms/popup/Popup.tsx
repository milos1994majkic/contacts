import DeleteIcon from '../../icons/DeleteIcon'

interface Props {
  showPopup: boolean
  setShowPopup: Function
  popupTitle: string
}

export default function Popup({ showPopup, setShowPopup, popupTitle }: Props) {
  const createLabel = 'Create label'

  return showPopup ? (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none font-semibold	">
        <div className="w-4/12 relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className={`${popupTitle === createLabel ? null : 'flex flex-row'}`}>
              {popupTitle !== createLabel ? (
                <div className="ml-6 mt-6">
                  <DeleteIcon />
                </div>
              ) : null}
              <div>
                <div className="flex items-start justify-between pt-7 px-6 pb-2">
                  <h3 className="font-medium text-lg">
                    {popupTitle === createLabel ? popupTitle : 'Delete contact'}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowPopup(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative px-6">
                  {popupTitle === createLabel ? (
                    <input className="border rounded-md border-gray-300 w-full h-11 p-2.5" />
                  ) : (
                    <p className="text-slate-500 text-lg leading-relaxed font-normal">
                      Are you sure you want to delete this contact?
                    </p>
                  )}
                </div>
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6">
              <button
                className="border rounded-md px-4 py-2 text-sm text-gray-700 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:bg-gray-100"
                type="button"
                onClick={() => setShowPopup(false)}
              >
                Cancel
              </button>
              <button
                className={`${
                  popupTitle === createLabel
                    ? 'border-indigo-600 bg-indigo-600 hover:bg-indigo-800'
                    : 'border-red-600 bg-red-600 hover:bg-red-800'
                }  text-white active:bg-emerald-600 text-sm ml-3 px-6 py-2 rounded-md shadow outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`}
                type="button"
                onClick={() => setShowPopup(false)}
              >
                {popupTitle === createLabel ? 'Save' : 'Delete'}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  ) : null
}
