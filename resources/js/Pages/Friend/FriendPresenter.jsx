import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { useState, useEffect } from 'react';

const FriendPresenter = ({findUsers, requestUsers}) => {
    const [searchUsername, setSearchUsername] = useState('');
    const [isRequestUser, setIsRequestUser] =useState(null);

    // if (!isFindUser) {
    //     return <div>Loading...</div>;
    // }

    // const {data, setData, post} = useForm({
    //     username: ''
    // })

    // const searchByUsername = async (e) => {
    //     e.preventDefault();
    //     console.log(data);
    //     try {
    //         const res = post(route('friends.search'));
    //             console.log(res.findUser);
    //             setIsFindUser(res.findUser);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    useEffect(() => {
        if (findUsers) {
            // setIsFindUser(findUser);
            console.log(findUsers);
        }
        if (requestUsers) {
            setIsRequestUser(requestUsers);
            console.log(isRequestUser);
        }
    }, [])

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
                        <div className='my-4'>
                            <p>{findUser.username}</p>
                            <button
                                type='submit'
                                onSubmit={route('friends.request', {id: findUser.id})}
                                className='bg-blue-500 hover:bg-blue-700 text-white'
                            >
                                <p>ともだち申請</p>
                            </button>
                        </div>
                        )
                    })
                 :
                    <div>お探しのユーザーは見つかりませんでした</div>
            }

            <div>
                <p>フォローリクエスト</p>
                {
                    isRequestUser ?
                        isRequestUser.map((user) => (
                            <div key={user.id} className='my-4'>
                                {user.username}
                                <Link
                                    method='post'
                                    href={route('friends.accept', {id: user.id})}
                                    className='bg-blue-500 hover:bg-blue-700 text-white'
                                >
                                    承認
                                </Link>
                                <Link
                                    method='post'
                                    href={route('friends.reject', {id: user.id})}
                                    className='bg-blue-500 hover:bg-blue-700 text-white'
                                >
                                    拒否
                                </Link>
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
