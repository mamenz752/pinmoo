import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DiaryStarIcon from '@/Icons/DiaryStarIcon';
import { Head, Link, useForm } from '@inertiajs/react';

const DiaryEdit = ({posts, diary, moods}) => {
    const {data, setData, put} = useForm({
        'title': diary.title,
        'body': diary.body,
        'is_star': diary.is_star,
        'post_id': diary.post_id
    });

    const changeDiaryForm = (e) => {
        e.preventDefault();
        put(route('diary.update', diary.id));
    }

    const handleStar = (isStar) => {
        if (isStar) {
            return false;
        } else {
            return true;
        }
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
    <AuthenticatedLayout
      header={"Diary"}
    >
        <Head title="Diary" />
        <div className="my-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <Link
                href={route('diary.index')}
                className='py-4 px-8 flex items-center justify-center tracking-wider bg-white shadow-sm rounded-md hover:opacity-80'
            >
                一つ前に戻る
            </Link>

            <h1 className='mt-4 text-xl tracking-wider font-bold'>じぶん日記を編集する</h1>
                <form
                    onSubmit={(e) => changeDiaryForm(e)}
                    className='mt-4'
                >
                    <button
                        type='button'
                        onClick={() => setData('is_star', handleStar(data.is_star))}
                        className={`py-2 px-4 w-full ${data.is_star ? 'bg-gray-600' : 'bg-pi-orange'} rounded-md shadow-sm hover:opacity-80 flex justify-center items-center gap-2 text-white`}
                    >
                        <div className='w-8 h-18'>
                            <DiaryStarIcon />
                        </div>
                        <span className='text-lg font-bold'>
                            {
                                data.is_star ?
                                'お気に入りから削除'
                                :
                                'お気に入りに追加する'
                            }
                        </span>
                    </button>

                    <div className='bg-white mt-4 p-4 flex flex-col gap-4 overflow-hidden shadow-sm sm:rounded-lg'>
                        <div>
                            <label
                                htmlFor="title"
                            >
                                <p className='font-bold tracking-wider'>タイトル</p>
                            </label>
                            <input
                                id='title'
                                type='text'
                                name='title'
                                defaultValue={data.title}
                                placeholder='タイトルを入力してください'
                                onChange={(e) => setData('title', e.target.value)}
                                className='mt-2 w-full rounded-md border-gray-400'
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="body"
                            >
                                <p className='font-bold tracking-wider'>本文</p>
                            </label>
                            <textarea
                                id='body'
                                name='body'
                                onChange={(e) => setData('body', e.target.value)}
                                defaultValue={data.body}
                                placeholder='本文を入力してください'
                                className='mt-2 w-full rounded-md border-gray-400'
                            ></textarea>
                        </div>
                    </div>

                    {/* TODO: リレーションのcheckedを引き継ぐ */}
                    <div className='bg-white mt-4 p-4 overflow-hidden shadow-sm sm:rounded-lg'>
                        <label
                            htmlFor="post_id"
                        >
                            <p className='font-bold tracking-wider'>感情とリレーションする</p>
                        </label>
                        <fieldset
                            name="post_id"
                            onChange={(e) => setData("post_id", e.target.value)}
                            className="mt-2"
                        >
                                { posts.map((post) => {
                                    const mood = moods.filter((mood) => post.mood_id === mood.id)[0];
                                    return (
                                    <div
                                        key={post.id}
                                        className="flex items-center justify-between gap-2"
                                    >
                                        <div className='w-full flex items-center gap-2'>
                                            <input
                                                type="checkbox"
                                                id={post.id}
                                                className="w-4 h-4 vertical-align-middle"
                                                name="post_id"
                                                value={post.id}
                                            />
                                            <label
                                                htmlFor={post.id}
                                            >
                                                <div className='w-16 h-16'>
                                                    <img src={mood.image_path} alt={mood.feeling} />
                                                </div>
                                            </label>
                                            <p>{translateJapanese(mood.feeling)}</p>
                                        </div>
                                        <div className="w-full flex items-center justify-end gap-4">
                                            <p>{post.comment}</p>
                                            <p>{post.created_at}</p>
                                        </div>
                                    </div>
                                )} ) }
                        </fieldset>
                    </div>

                    <button
                        type='submit'
                        className='mt-4 py-2 px-4 w-full rounded-md font-bold shadow-sm hover:opacity-80 flex justify-center items-center gap-2 text-white bg-pi-blue'
                    >
                        変更を保存する
                    </button>
                    <Link
                        href={route('diary.destroy', diary.id)}
                        method='delete'
                    >
                        <button
                            className='mt-4 py-2 px-4 w-full rounded-md font-bold shadow-sm hover:opacity-80 flex justify-center items-center gap-2 text-white bg-pi-red'
                        >
                            日記を削除する
                        </button>
                    </Link>
                </form>
            </div>
    </AuthenticatedLayout>
  )
}

export default DiaryEdit
