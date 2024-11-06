import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import PostEditIcon from '@/Icons/PostEditIcon';
import HeartLikeIcon from '@/Icons/HeartLikeIcon';
import RainyLikeIcon from '@/Icons/RainyLikeIcon';
import { Head, Link, useForm } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function Dashboard({user, moods, newPost, friends, friendsPosts, isLiked}) {
    const [currentMood, setCurrentMood] = useState();
    const {data, setData, post} = useForm({
        post_id: '',
    });
    useEffect(() => {
        if (newPost) {
            setCurrentMood(moods.filter(mood => mood.id === newPost.mood_id)[0]);
        }
    }, [])

    const handleLikePost = (e) => {
        e.preventDefault();
        post(route('likes'), data);
    }

    const handleLikeIconColor = (category, is_liked) => {
        if (is_liked) {
            if (category === 'NEGATIVE') {
                return 'text-pi-blue ';
            } else {
                return 'text-pi-red';
            }
        } else {
            return 'text-gray-400';
        }
    }

    return (
        <AuthenticatedLayout
            header={"ホーム"}
        >
            <Head title="ホーム" />

            <div className="my-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <h1 className='mt-4 text-xl tracking-wider font-bold'>じぶんの気分</h1>
                <div className="mt-4 p-4 flex justify-between items-center bg-white shadow-sm sm:rounded-lg">
                    <p>{user.username}</p>
                    <div className='flex gap-4 items-center'>
                        <div>
                            <p className='text-lg tracking-wider'>
                                {newPost ? newPost.comment :<></>}
                            </p>
                        </div>
                        <div className='w-12 h-12'>
                            {
                                newPost && currentMood ?
                                    <img src={currentMood.image_path} alt={currentMood.feeling} />
                                : <></>
                            }
                        </div>
                        <div>
                            {
                                newPost ?
                                    <Link
                                        href={route('posts.edit', newPost.id)}
                                        className='text-gray-600 hover:opacity-80'
                                    >
                                        <PostEditIcon />
                                    </Link>
                                :   <></>
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="my-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <h1 className='mt-4 text-xl tracking-wider font-bold'>ともだちの気分</h1>
                {
                    friendsPosts.length ?
                    friendsPosts.map((post, i) => {
                        const user = friends.filter(friend => friend.id === post.user_id)[0];
                        const mood = moods.filter(mood => mood.id === post.mood_id)[0];
                        return (
                            <div className="mt-4 p-4 flex justify-between items-center bg-white shadow-sm sm:rounded-lg">
                                <p>{user.username}</p>
                                <div className='flex gap-4 items-center'>
                                    <div>
                                        <p className='text-lg tracking-wider'>
                                            {post ? post.comment :<></>}
                                        </p>
                                    </div>
                                    <div className='w-12 h-12'>
                                        {
                                            post ?
                                                <img src={mood.image_path} alt={mood.feeling} />
                                            : <></>
                                        }
                                    </div>
                                    <div>
                                        {
                                            post ?
                                                <form
                                                    onSubmit={handleLikePost}
                                                >
                                                    <button
                                                        onClick={(e) => setData('post_id', post.id)}
                                                    >
                                                        <div
                                                            className={`${handleLikeIconColor(mood.category, isLiked[i])} w-8 h-8`}
                                                        >
                                                            {
                                                                mood.category === 'NEGATIVE' ?
                                                                    <RainyLikeIcon /> :
                                                                    <HeartLikeIcon />
                                                            }
                                                        </div>
                                                    </button>
                                                </form>
                                                : <></>
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    :
                    <></>
                }
            </div>
        </AuthenticatedLayout>
    );
}
