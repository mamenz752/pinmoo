import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { useForm } from '@inertiajs/react';

const New = ({ posts }) => {
    const {data, setData, post} = useForm({
        'title': '',
        'body': '',
        'is_star': false,
        'post_id': ''
    });

    const submitDiaryForm = (e) => {
        e.preventDefault();
        post(route('diary.store'))
    }

  return (
    <AuthenticatedLayout
      header={"Diary"}
    >
        <Head title="Diary" />
        <div className="my-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <button>
                <Link href={route('diary.index')}>
                  一つ前に戻る
                </Link>
            </button>

            <div className="p-4 overflow-hidden bg-white shadow-sm sm:rounded-lg">
                <form
                    onSubmit={(e) => submitDiaryForm(e)}
                >
                    <input type='text' name='title' onChange={(e) => setData('title', e.target.value)} />
                    <textarea name='body' onChange={(e) => setData('body', e.target.value)}></textarea>

                    <div>
                        <label
                            htmlFor="post_id"
                        >
                            感情とリレーションする
                        </label>
                        <fieldset
                            name="post_id"
                            onChange={(e) => setData("post_id", e.target.value)}
                            // className="flex flex-col items-start gap-2"
                        >
                                { posts.map((post) => (
                                    <div
                                        key={post.id}
                                        className="flex items-center gap-2"
                                    >
                                        <div>
                                            <input
                                                type="checkbox"
                                                id={post.id}
                                                className="w-4 h-4"
                                                name="post_id"
                                                value={post.id}
                                            />
                                            <label
                                                htmlFor={post.id}
                                            >
                                                <img src={post.mood_id.image_path} />
                                            </label>
                                        </div>
                                        <div className="w-full flex items-center justify-between gap-4">
                                            <p>{post.mood_id.feeling}</p>
                                            <p>{post.comment}</p>
                                            <p>{post.created_at}</p>
                                        </div>
                                    </div>
                                )) }
                        </fieldset>
                    </div>

                    <button type='submit' className='bg-pi-blue'>Submit</button>
                </form>
            </div>
        </div>
    </AuthenticatedLayout>
  )
}

export default New
