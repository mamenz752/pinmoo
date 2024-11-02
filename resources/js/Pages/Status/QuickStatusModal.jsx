import { AdvancedImage } from '@cloudinary/react';
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Cloudinary } from '@cloudinary/url-gen';

const QuickStatusModal = (props) => {
    const { showQuickStatusModal, onShowQuickStatusModalFn } = props;
    const [moods, setMoods] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const cld = new Cloudinary({
        cloud: {
          cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
        },
      });

    useEffect(() => {
        const getAllMoods = () => {
            axios.get(`${import.meta.env.VITE_API_URL}/api/v1/get-all-moods/`)
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
                <div
                    className='z-[40] mx-auto absolute left-1/2 -translate-x-1/2 bottom-32 p-4 bg-white rounded-md'
                    onClick={(e) => e.stopPropagation()}
                >
                    <div>
                        <p>今の気分をシェアしましょう</p>
                    </div>
                    <form
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div className='my-4 grid grid-cols-5 gap-2'>
                            { isLoading ?
                                <></>
                                :
                                moods.map((mood, i) => {
                                    const myImg = cld.image(mood.image_path);
                                    return (
                                    <div className='flex flex-col items-center justify-center'>
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
                                            <div className='w-20 h-full'>
                                                <AdvancedImage cldImg={myImg} />
                                            </div>
                                        </label>
                                    </div>
                                    )
                                })
                            }
                        </div>
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
