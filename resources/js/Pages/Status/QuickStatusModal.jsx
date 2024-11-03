import React, { useEffect } from 'react'
import { useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useState } from 'react';

const QuickStatusModal = ({user, moods, imagesUrl}) => {
    const {data, setData, post} = useForm({
        user_id: user.id,
        mood_id: 1,
        comment: ''
    });
    const submitCurrentMood = (e) => {
        e.preventDefault();
        post(route('posts.store'), data);
    }

  return (
    <AuthenticatedLayout>
        <div
            className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 z-[20]"
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
                        onSubmit={submitCurrentMood}
                    >
                        <fieldset
                            name='mood_id'
                            onChange={(e) => setData('mood_id', e.target.value)}
                            className='my-4 grid grid-cols-5 gap-2'
                        >
                            {
                                moods.map((mood, i) => {
                                    // const moodImage = getMoodUrl(mood.image_path);
                                    return (
                                        <div className='flex flex-col items-center justify-center'>
                                            <input
                                                id={mood.feeling}
                                                type='radio'
                                                name='mood_id'
                                                value={mood.id}
                                            />
                                            <label
                                                key={i}
                                                for={mood.feeling}
                                            >
                                                <div className='w-20 h-full'>
                                                    <img src={mood.image_path} alt={mood.feeling} />
                                                </div>
                                            </label>
                                        </div>
                                    )
                                })
                            }
                        </fieldset>
                        <button
                            type='submit'
                            className='bg-pi-orange text-white px-4 py-2 rounded-md'>
                                記録する
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
  )
}

export default QuickStatusModal
