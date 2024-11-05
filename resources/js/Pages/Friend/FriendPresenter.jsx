import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { useState, useEffect } from 'react';

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
                <div>
                        <input
                            type="text"
                            onChange={(e) => setSearchUsername(e.target.value)}
                            className="border border-gray-300"
                            placeholder="ともだちのユーザー名"
                        />
                        <Link
                            href={route('friends.index', {username: searchUsername})}
                            className="bg-blue-500 hover:bg-blue-700 text-white"

                        >
                            さがす
                        </Link>
                </div>
            </div>

            {
                findUsers.length ?
                    findUsers.map((findUser) => {
                        return (
                        <form
                            className='my-4'
                            onSubmit={submitFollowInfo}
                        >
                            <p>{findUser.username}</p>
                            <button
                                name='followee_id'
                                onClick={(e) => setData('followee_id', findUser.id)}
                                type='submit'
                                className='bg-blue-500 hover:bg-blue-700 text-white'
                            >
                                <p>ともだち申請</p>
                            </button>
                        </form>
                        )
                    })
                 :
                    <div>お探しのユーザーは見つかりませんでした</div>
            }

            <div>
                <p>フォローリクエスト</p>
                {
                    requestUsers ?
                        requestUsers.map((user) => (
                            <div key={user.id} className='my-4'>
                                {user.username}
                                <form
                                    onSubmit={acceptFollowRequest}
                                >
                                    <button
                                        name='follower_id'
                                        onClick={(e) => setData('follower_id', user.id)}
                                        type='submit'
                                        className='bg-blue-500 hover:bg-blue-700 text-white'
                                    >
                                        承認
                                    </button>
                                </form>
                                <form
                                    onSubmit={rejectFollowRequest}
                                >
                                    <button
                                        onClick={(e) => setData('unfollow_id', user.id)}
                                        type='submit'
                                        className='bg-blue-500 hover:bg-blue-700 text-white'
                                    >
                                        拒否
                                    </button>
                                </form>
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
