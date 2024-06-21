import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, Link } from '@inertiajs/react';

export default function Diary(props) {
    const { diary, posts } = props;
    
    console.log(diary);
    
    const {data, setData, put} = useForm({
        title: diary.title,
        body: diary.body,
        is_stared: diary.is_stared,
        post_id: diary.post_id
    })
    
    const handleSendPosts = (e) => {
        e.preventDefault();
        put(`/diary/${diary}/update`);
    }
    
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">じぶん日誌</h2>}
        >
            <Head title="じぶん日誌" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <Link  href={route("diary")}>
                            <div className="p-6 text-gray-900">
                                ひとつ前に戻る
                            </div>
                        </Link>
                    </div>
                    
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            じぶん日誌を編集する
                        </div>
                    
                        <form
                            onSubmit={handleSendPosts}
                        >
                            <div>
                                <label
                                    htmlFor="title"
                                >
                                    タイトル
                                </label>
                                <input
                                    id="title"
                                    type="text"
                                    placeholder="タイトルを入力してください"
                                    // value={diary.title}
                                    onChange={(e) => setData("title", e.target.value)}
                                />
                            </div>
                            
                            <div>
                                <label
                                    htmlFor="body"
                                >
                                    本文
                                </label>
                                <textarea
                                    id="body"
                                    placeholder="自分の気持ちを書き出してみましょう"
                                    // value={diary.body}
                                    onChange={(e) => setData("body", e.target.value)}
                                />
                            </div>
                            
                            <div>
                                <fieldset
                                    name="post_id"
                                    onChange={(e) => setData("post_id", e.target.value)}
                                    // value={diary.post_id}
                                    className="mx-auto py-6 w-[60%] grid items-center justify-center grid-cols-5 gap-2"
                                >
                                        { posts.map((post) => (
                                            <div
                                                key={post.id}
                                                className="flex flex-col items-center"
                                            >
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
                                        )) }
                                </fieldset>
                            </div>
                            
                            <button
                                className="bg-white overflow-hidden shadow-sm sm:rounded-lg"
                            >
                                じぶん日誌を保存する
                            </button>
                            
                            {/*
                            <Link href={route("diary.destroy", diary.id)}>
                                <button
                                    className="bg-white overflow-hidden shadow-sm sm:rounded-lg"
                                >
                                    じぶん日誌を削除する
                                </button>
                            </Link>
                            */}
                        </form>
                        
                    
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}