import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import UserSearchIcon from '@/Icons/UserSearchIcon';
import UserSendRequestIcon from '@/Icons/UserSendRequestIcon';
import UserRequestCheckIcon from '@/Icons/UserRequestCheckIcon';
import UserRequestTrashIcon from '@/Icons/UserRequestTrashIcon';
import { Head, Link, useForm } from '@inertiajs/react';
import { useState } from 'react';

const FriendPresenter = ({findUsers, requestUsers}) => {
    const {data, setData, post} = useForm({
        followee_id: '',
        follower_id: '',
        unfollow_id: ''
    });
    const [searchUsername, setSearchUsername] = useState('');

    const submitFollowInfo = (e) => {
        e.preventDefault();
        post(route('friends.follow'), data);
    }

    const acceptFollowRequest = (e) => {
        e.preventDefault();
        post(route('friends.accept'), data);
    }

    const rejectFollowRequest = (e) => {
        e.preventDefault();
        post(route('friends.unfollow'), data);
    }

  return (
    <AuthenticatedLayout
            header={"ともだちを探す"}
        >
            <Head title="ともだちを探す" />

            <div className="my-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <h1 className='mt-4 text-xl tracking-wider font-bold'>ともだち検索</h1>
                <p className='mt-4 tracking-wider'>ユーザーネームを入れて検索してください</p>
                <div className='mt-4 flex items-center gap-4'>
                        <input
                            type="text"
                            onChange={(e) => setSearchUsername(e.target.value)}
                            className="w-1/3 border border-gray-300 rounded-md"
                            placeholder="ともだちのユーザー名"
                        />
                        <div className='bg-pi-blue py-2 px-4 rounded-md'>
                                <Link
                                    href={route('friends.index', {username: searchUsername})}
                                    className='text-white hover:opacity-80'

                                >
                                    <div className='w-8 h-8'>
                                        <UserSearchIcon />
                                    </div>
                                </Link>
                        </div>
                </div>
            </div>

            {
                findUsers.length ?
                    findUsers.map((findUser) => {
                        return (
                        <form
                            className='my-12 mx-auto max-w-6xl flex items-center gap-2 sm:px-6 bg-white rounded-md shadow-sm'
                            onSubmit={submitFollowInfo}
                        >
                            <div className='mx-6 my-3 w-full flex justify-between'>
                                <div className='flex flex-col gap-1'>
                                    <h3 className='text-lg font-bold'>{findUser.name}</h3>
                                    <p className='text-gray-400'>{findUser.username}</p>
                                </div>
                                <button
                                    name='followee_id'
                                    onClick={(e) => setData('followee_id', findUser.id)}
                                    type='submit'
                                    className='text-pi-green hover:opacity-60'
                                >
                                    <div className='w-8 h-8'>
                                        <UserSendRequestIcon />
                                    </div>
                                </button>
                            </div>
                        </form>
                        )
                    })
                 :
                    <div className='my-12 mx-auto max-w-7xl sm:px-6 lg:px-8'>
                        <p>ユーザーが見つかりません</p>
                    </div>
            }

            <div className='my-12 mx-auto max-w-7xl sm:px-6 lg:px-8'>
                <h1 className='mt-4 text-xl tracking-wider font-bold'>フォローリクエスト</h1>
                {
                    requestUsers ?
                        requestUsers.map((user) => (
                            <div className='mx-6 my-3 px-6 py-3 w-full flex justify-between bg-white rounded-md shadow-sm'>
                                <div className='flex flex-col gap-1'>
                                    <h3 className='text-lg font-bold'>{user.name}</h3>
                                    <p className='text-gray-400'>{user.username}</p>
                                </div>
                                <div className='flex items-center justify-center gap-4'>
                                    <form
                                        key={user.id}
                                        onSubmit={acceptFollowRequest}
                                        className='mx-auto flex items-center gap-2'
                                    >
                                        <button
                                            name='follower_id'
                                            onClick={(e) => setData('follower_id', user.id)}
                                            type='submit'
                                            className='text-pi-green hover:opacity-60'
                                        >
                                            <div className='w-8 h-8'>
                                                <UserRequestCheckIcon />
                                            </div>
                                        </button>
                                    </form>
                                    <form
                                        onSubmit={rejectFollowRequest}
                                    >
                                        <button
                                            name='unfollow_id'
                                            onClick={(e) => setData('unfollow_id', user.id)}
                                            type='submit'
                                            className='text-pi-red hover:opacity-60'
                                        >
                                            <div className='w-8 h-8'>
                                                <UserRequestTrashIcon />
                                            </div>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        ))
                    :
                        <p>フォローリクエストはありません</p>
                }
            </div>
    </AuthenticatedLayout>
  )
}

export default FriendPresenter
