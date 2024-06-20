import React from "react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Edit(props) {
    const {moods, post, statuses} = props;
    
    const {data, setData, put} = useForm({
        user_id: props.auth.user.id,
        mood_id: post.mood_id,
        comment: post.comment
    })
    
    const handleSendPosts = (e) => {
        e.preventDefault();
        put(route("posts.update", post.id));
    }
    
    return (
         <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">感情を編集する</h2>}
        >
            <Head title="感情を編集する" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <Link href={route("dashboard")}>
                            <div className="p-6 text-gray-900">
                                ひとつ前に戻る
                            </div>
                        </Link>
                    </div>
                    
                    <form
                        onSubmit={handleSendPosts}
                        className="mt-4 p-4 flex flex-col items-center bg-white overflow-hidden shadow-sm sm:rounded-lg"
                    >
                        <h1 className="p-6 text-gray-900 text-lg font-bold">
                            感情を変更する
                        </h1>
                        
                        
                        <fieldset
                                name="mood_id"
                                onChange={(e) => setData("mood_id", e.target.value)}
                                className="mx-auto py-6 w-[60%] grid items-center justify-center grid-cols-5 gap-2"
                            >
                                    { moods.map((mood) => (
                                        <div
                                            key={mood.id}
                                            className="flex flex-col items-center"
                                        >
                                            <input
                                                type="radio"
                                                id={mood.id}
                                                className="w-4 h-4"
                                                name="mood_id"
                                                value={mood.id}
                                            />
                                            <label
                                                htmlFor={mood.id}
                                            >
                                                <img src={mood.image_path} />
                                            </label>
                                        </div>
                                    )) }
                            </fieldset>
    
                            <h1 className="p-6 text-gray-900 text-lg font-bold">
                                ひとこと
                            </h1>
                            <textarea
                                className="w-1/2 flex items-center justify-center rounded-sm"
                                name="comment"
                                value={post.comment}
                                onChange={(e) => setData("comment", e.target.value)}
                            >
                            </textarea>
                        
                            <h1 className="p-6 text-gray-900 text-lg font-bold">
                                感じた場面・状況・背景
                            </h1>
                            
                            <fieldset
                                    className="mx-auto py-6 w-[60%] grid items-center justify-center grid-cols-5 gap-2"
                                    name="status_id"
                                >
                                        { statuses.map((status) => (
                                            <div
                                                key={status.id}
                                                className="flex flex-col items-center"
                                            >
                                                <input
                                                    type="checkbox"
                                                    id={status.id}
                                                    className="w-4 h-4"
                                                    name="status_id"
                                                    value={status.id}
                                                />
                                                <label
                                                    htmlFor={status.id}
                                                >
                                                    <img src={status.image_path} />
                                                    <span>{status.status}</span>
                                                </label>
                                            </div>
                                        )) }
                                </fieldset>
                        
                            <button
                                className="w-1/2 p-2 flex items-center justify-center rounded-sm bg-pi-blue text-white"
                                type="submit"
                            >
                                保存する
                            </button>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
