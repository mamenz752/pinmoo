import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, Link } from '@inertiajs/react';

export default function Diary(props) {
    const { diaries, posts } = props;
    
    const {data, setData, post} = useForm({
        title: "",
        body: "",
        is_stared: false,
        post_id: ""
    })
    
    const handleSendPosts = (e) => {
        e.preventDefault();
        post("/diary/posts");
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
                    <div>
                        <Link href={route("diary")}>
                            <div className="p-6 flex items-center gap-2 border-2 border-gray text-gray-900 bg-white rounded-full">
                                <svg width="2rem" height="2rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 12H4M4 12L10 18M4 12L10 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <span>ひとつ前に戻る</span>
                            </div>
                        </Link>
                    </div>
                    
                    <div className="mt-4 p-4 bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <h1 className="p-6 text-gray-900">
                            じぶん日誌新規作成
                        </h1>
                    
                        <form
                            onSubmit={handleSendPosts}
                        >
                            <div className="flex flex-col gap-2">
                                <label
                                    htmlFor="title"
                                >
                                    タイトル
                                </label>
                                <input
                                    id="title"
                                    type="text"
                                    placeholder="タイトルを入力してください"
                                    onChange={(e) => setData("title", e.target.value)}
                                    className="w-1/2 rounded-lg"
                                />
                            </div>
                            
                            <div className="mt-4 flex flex-col gap-2">
                                <label
                                    htmlFor="body"
                                >
                                    本文
                                </label>
                                <textarea
                                    id="body"
                                    placeholder="自分の気持ちを書き出してみましょう"
                                    onChange={(e) => setData("body", e.target.value)}
                                    className="w-1/2 rounded-lg"
                                />
                            </div>
                            
                            <div>
                                <fieldset
                                    name="post_id"
                                    onChange={(e) => setData("post_id", e.target.value)}
                                    className="mx-auto py-6 flex flex-col items-start gap-2"
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
                                                <div className="flex items-center justify-between gap-4">
                                                    <p>{post.comment}</p>
                                                    <p>{post.created_at}</p>
                                                </div>
                                            </div>
                                        )) }
                                </fieldset>
                            </div>
                            
                            <button
                                type="submit"
                                className="mt-4 p-4 w-full bg-pi-blue text-white"
                            >
                                じぶん日誌を保存する
                            </button>
                            
                        </form>
                    
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}