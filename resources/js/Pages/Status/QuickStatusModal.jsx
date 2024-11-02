import axios from 'axios';
import React, { useState, useEffect } from 'react'

const QuickStatusModal = (props) => {
    const { showQuickStatusModal, onShowQuickStatusModalFn } = props;
    const [moods, setMoods] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getAllMoods = () => {
            axios.get(`http://localhost:80/api/v1/get-all-moods/`)
            .then((res) => {
                console.log(res.data.moods);
                setMoods(res.data.moods);
            })
            .then(() =>
                setIsLoading(false)
            )
            .catch((error) => {
                console.log(error);
            })
        };
        getAllMoods();
    }, []);

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
                        { isLoading ?
                            <></>
                            :
                            // <></>
                            moods.map((mood, i) => {
                                <>
                                    <input
                                        id={mood.feeling}
                                        type='radio'
                                        name='mood'
                                        value={mood.feeling}
                                    />
                                    <label
                                        key={i}
                                        for={mood.feeling}
                                    >
                                        <img src={mood.image_path} />
                                    </label>
                                </>
                            })
                        }
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
