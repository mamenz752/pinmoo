import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import HeartPulseIcon from '@/Icons/HeartPulseIcon';
import { useForm } from '@inertiajs/react';

const PostNew = ({ user, moods }) => {
    const {data, setData, post} = useForm({
        user_id: user.id,
        mood_id: 1,
        comment: ''
    });
    const submitCurrentMood = (e) => {
        e.preventDefault();
        post(route('posts.store'), data);
    }

    const translateJapanese = (feeling) => {
        switch (feeling) {
            case 'angry':
                return '怒り';
            case 'sad':
                return '悲しみ';
            case 'scared':
                return '恐怖';
            case 'nervous':
                return '緊張';
            case 'smile':
                return '穏やか';
            case 'surprised':
                return '驚き';
            case 'wink':
                return '順調';
            case 'joyful':
                return '喜び';
            case 'stared':
                return '夢中';
            case 'love':
                return '幸せ';
        }
    }

  return (
    <AuthenticatedLayout>
        <Head title='感情を記録する' />

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
                    <div className='flex items-center justify-center gap-2'>
                        <div className='w-8 h-8 text-pi-red'>
                            <HeartPulseIcon />
                        </div>
                        <p>今の気分をシェアしましょう</p>
                    </div>
                    <form
                        onSubmit={submitCurrentMood}
                        className='flex flex-col items-center gap-2'
                    >
                        <fieldset
                            name='mood_id'
                            onChange={(e) => setData('mood_id', e.target.value)}
                            className='my-4 grid grid-cols-5 gap-2'
                        >
                            {
                                moods.map((mood, i) => {
                                    return (
                                        <div
                                            className='flex flex-col items-center justify-center'
                                            key={i}
                                        >
                                            <input
                                                id={mood.feeling}
                                                type='radio'
                                                name='mood_id'
                                                value={mood.id}
                                            />
                                                <label
                                                    for={mood.feeling}
                                                    className='flex flex-col items-center checked:opacity-100 opacity-80'
                                                >
                                                    <div className='w-20 h-full'>
                                                        <img src={mood.image_path} alt={mood.feeling} />
                                                    </div>
                                                    <div>
                                                        <p>{translateJapanese(mood.feeling)}</p>
                                                    </div>
                                                </label>
                                        </div>
                                    )
                                })
                            }
                        </fieldset>
                        <button
                            type='submit'
                            className='bg-pi-orange text-white px-6 py-3 w-full rounded-md shadow-sm tracking-wider font-bold'>
                                記録する
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
  )
}

export default PostNew
