import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import PostEditIcon from '@/Icons/PostEditIcon';
import HeartLikeIcon from '@/Icons/HeartLikeIcon';
import RainyLikeIcon from '@/Icons/RainyLikeIcon';
import LikeUsersBarIcon from '@/Icons/LikeUsersBarIcon';
import { Head, Link, useForm } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function Dashboard({user, moods, newPost, friends, friendsPosts, likeUsers, likeCount, isLiked}) {
    const [currentMood, setCurrentMood] = useState();
    const [isLikeUsersBarOpen, setIsLikeUsersBarOpen] = useState(false);
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

    const translateJapanese = (feeling) => {
        switch (feeling) {
            case 'angry':
                return 'いらいら';
            case 'sad':
                return 'えーん';
            case 'scared':
                return 'ぞくぞく';
            case 'nervous':
                return 'どきどき';
            case 'smile':
                return 'ほのぼの';
            case 'surprised':
                return 'びっくり';
            case 'wink':
                return 'にこにこ';
            case 'joyful':
                return 'きゃっきゃ';
            case 'stared':
                return 'きらきら';
            case 'love':
                return 'るんるん';
        }
    }

    const handleLikeUsersBar = () => {
        setIsLikeUsersBarOpen(!isLikeUsersBarOpen);
    }

    return (
        <AuthenticatedLayout
            header={"ホーム"}
        >
            <Head title="ホーム" />

            <div className="my-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <h1 className='mt-4 text-xl tracking-wider font-bold'>じぶんの気分</h1>
                <div className='mt-4 p-2 bg-white shadow-sm sm:rounded-lg'>
                    <div className="p-2 flex justify-between items-center">
                        <p>{user.username}</p>
                        <div className='flex gap-4 items-center'>
                            <div>
                                <p className='text-lg tracking-wider'>
                                    {newPost ? newPost.comment :<></>}
                                </p>
                            </div>
                            <div className='w-20'>
                                {
                                    newPost && currentMood ?
                                        <div className='flex flex-col items-center'>
                                            <div className='w-12 h-12'>
                                                <img src={currentMood.image_path} alt={currentMood.feeling} />
                                            </div>
                                            <span className='text-sm text-center'>{translateJapanese(currentMood.feeling)}</span>
                                        </div>
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
                    {
                        currentMood ?
                            <div>

                                <div className='mt-2 p-4 flex justify-between items-center border-t border-t-gray-300'>
                                    <div className='flex items-center gap-4'>
                                        <div
                                            className={`${handleLikeIconColor(currentMood.category, true)} w-8 h-8`}
                                        >
                                            {
                                                currentMood.category === 'NEGATIVE' ?
                                                    <RainyLikeIcon /> :
                                                    <HeartLikeIcon />
                                            }
                                        </div>
                                        <h2>{`いいね件数：${likeCount}件`}</h2>
                                    </div>
                                    <button className='w-8 h-8 text-gray-400' onClick={handleLikeUsersBar}>
                                        {
                                            likeCount === 0 ?
                                              <></>
                                            : <LikeUsersBarIcon />
                                        }
                                    </button>
                                </div>
                                {
                                    likeUsers && isLikeUsersBarOpen ?
                                    <ul className='mt-2 p-4'>
                                        {likeUsers.map((likeUser, i) => {
                                            return (
                                                <li key={i}>
                                                    {likeUser.username}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                    : <></>
                                }
                            </div>
                        : <></>
                    }
                </div>
            </div>

            <div className="my-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <h1 className='mt-4 text-xl tracking-wider font-bold'>ともだちの気分</h1>
                {
                    friendsPosts[0] != null || friendsPosts[0] != undefined ?
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
                                    <div className='w-20'>
                                        {
                                            post ?
                                                <div className='flex flex-col items-center'>
                                                    <div className='w-12 h-12'>
                                                        <img src={mood.image_path} alt={mood.feeling} />
                                                    </div>
                                                    <span className='text-sm text-center'>{translateJapanese(mood.feeling)}</span>
                                                </div>
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
                                                        name='post_id'
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
