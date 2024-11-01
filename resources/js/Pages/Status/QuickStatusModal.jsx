import React from 'react'

const QuickStatusModal = (props) => {
    const { showQuickStatusModal, onShowQuickStatusModalFn } = props;
  return (
    showQuickStatusModal ?
        <div
            className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 z-[20]"
            onClick={onShowQuickStatusModalFn}
        >
            <div
                className="z-[30] max-h-full"
            >
                {/* Modal Body */}
                <div className='mx-auto absolute left-1/2 -translate-x-1/2 bottom-32 p-4 bg-white rounded-md'>
                    <div>
                        <p>今の気分をシェアしましょう</p>
                    </div>
                    <form
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <button
                            type='submit'
                            onClick={onShowQuickStatusModalFn}
                            className='bg-pi-orange text-white px-4 py-2 rounded-md'>
                                記録する
                        </button>
                    </form>
                </div>
            </div>
        </div>
    :
        <></>
  )
}

export default QuickStatusModal
