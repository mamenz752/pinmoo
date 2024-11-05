import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import PostEditIcon from '@/Icons/PostEditIcon';
import { Head, Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function Dashboard({user, moods, newPost, friends, friendsPosts}) {
    const [currentMood, setCurrentMood] = useState();
    const [friendsMood, setFriendsMood] = useState();
    useEffect(() => {
        if (newPost) {
            setCurrentMood(moods.filter(mood => mood.id === newPost.mood_id)[0]);
        }
        if (friendsPosts) {
            setFriendsMood(friendsPosts.map(post => moods.filter(mood => mood.id === post.mood_id)[0]));
        }
    }, [])

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

            <div>
                <button>
                    <Link
                        href={route('friends.index')}
                        className='bg-blue-500 hover:bg-blue-700 text-white'
                    >
                        ともだちを探すページに移動
                    </Link>
                </button>
            </div>

            <div className="my-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <h1 className='mt-4 text-xl tracking-wider font-bold'>ともだちの気分</h1>
                {
                    friendsPosts.length ?
                    friendsPosts.map((post, i) => {
                        const user = friends.filter(friend => friend.id === post.user_id)[0];
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
                                    post && friendsMood ?
                                        <img src={friendsMood[i].image_path} alt={friendsMood[i].feeling} />
                                    : <></>
                                }
                            </div>
                            <div>
                                {
                                    post ?
                                        <Link
                                            href={route('dashboard')}
                                            className='text-pi-red hover:opacity-80'
                                        >
                                            <PostEditIcon />
                                        </Link>
                                    :   <></>
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
