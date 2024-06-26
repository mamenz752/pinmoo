import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, Link } from '@inertiajs/react';

export default function Diary(props) {
    const { diary, posts } = props;
    // const [currentMood, setCurrentMood] = useState(moods.filter((mood) => mood.id == quickpost.mood_id));
    
    const {data, setData, put} = useForm({
        title: diary.title,
        body: diary.body,
        is_stared: diary.is_stared,
        post_id: diary.post_id
    })
    
    const handleSendPosts = (e) => {
        e.preventDefault();
        put(route("diary.update", diary.id));
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
                    <div className="sm:rounded-lg">
                        <Link href={route("diary")}>
                            <div className="p-2 flex items-center justify-center gap-2 border border-gray text-gray-900 bg-white rounded-full">
                                <svg width="2rem" height="2rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 12H4M4 12L10 18M4 12L10 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <span>ひとつ前に戻る</span>
                            </div>
                        </Link>
                    </div>
                    
                    <div className="mt-4 px-4 py-2 bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <h2 className="p-4 text-lg font-bold border-b border-gray-200">じぶん日誌を編集する</h2>
                    
                        <form
                            onSubmit={handleSendPosts}
                            className="w-full mx-auto"
                        >
                            <div className="mt-4 mx-auto w-2/3 flex flex-col gap-2">
                                <label
                                    htmlFor="title"
                                >
                                    タイトル
                                </label>
                                <input
                                    id="title"
                                    type="text"
                                    placeholder="タイトルを入力してください"
                                    value={data.title}
                                    onChange={(e) => setData("title", e.target.value)}
                                    className="rounded-lg"
                                />
                            </div>
                            
                            <div className="mt-4 mx-auto w-2/3 flex flex-col gap-2">
                                <label
                                    htmlFor="body"
                                >
                                    本文
                                </label>
                                <textarea
                                    id="body"
                                    placeholder="自分の気持ちを書き出してみましょう"
                                    value={data.body}
                                    onChange={(e) => setData("body", e.target.value)}
                                    className="rounded-lg"
                                />
                            </div>
                            
                            <div className="mx-auto py-6 w-2/3 flex flex-col items-start gap-2">
                                <label
                                    htmlFor="post_id"
                                >
                                    感情とリレーションする
                                </label>
                                <fieldset
                                    id="post_id"
                                    name="post_id"
                                    onChange={(e) => setData("post_id", e.target.value)}
                                    className="flex flex-col items-start gap-2"
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
                                                        value={data.post_id}
                                                    />
                                                    <label
                                                        htmlFor={post.id}
                                                    >
                                                        <img src={post.mood_id.image_path} />
                                                    </label>
                                                </div>
                                                <div className="w-full flex items-center justify-between gap-4">
                                                    <p>{post.comment}</p>
                                                    <p>{post.created_at}</p>
                                                </div>
                                            </div>
                                        )) }
                                </fieldset>
                            </div>
                            
                           <button
                                type="submit"
                                className="mt-4 p-4 w-full bg-pi-blue text-white rounded-md shadow-md"
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