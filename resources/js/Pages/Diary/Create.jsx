import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, Link } from '@inertiajs/react';

export default function Diary(props) {
    const { diaries } = props;
    
    const {data, setData, post} = useForm({
        title: "",
        body: "",
        is_stared: false,
        post_id: null
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
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <Link>
                            <div className="p-6 text-gray-900">
                                ひとつ前に戻る
                            </div>
                        </Link>
                    </div>
                    
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            じぶん日誌新規作成
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
                                    onChange={(e) => setData("body", e.target.value)}
                                />
                            </div>
                            
                            <button
                                className="bg-white overflow-hidden shadow-sm sm:rounded-lg"
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