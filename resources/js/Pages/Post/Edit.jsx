import React from "react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Edit(props) {
    const {moods, post, statuses} = props;
    
    const {data, setData, put} = useForm({
        user_id: props.auth.user.id,
        mood_id: post.mood_id,
        comment: post.comment,
        status_id: "1"
    })
    
    // console.log(data)
    
    const handleSendPosts = (e) => {
        e.preventDefault();
        put(route("posts.update", post.id));
    }
    
    const changeSituationEnToJp = (situation) => {
        switch (situation) {
            case "friends":
                return "友人";
            case "family":
                return "家族";
            case "lover":
                return "恋人";
            case "sunny":
                return "晴れ";
            case "cloudy":
                return "曇り";
            case "rainy":
                return "雨";
            case "study":
                return "勉強";
            case "exam":
                return "試験";
            case "project":
                return "プロジェクト";
            default:
                return "仕事";
        }
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
                    <div className="sm:rounded-lg">
                        <Link href={route("dashboard")}>
                            <div className="p-2 flex items-center justify-center gap-2 border border-gray text-gray-900 bg-white rounded-full">
                                <svg width="2rem" height="2rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 12H4M4 12L10 18M4 12L10 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <span>ひとつ前に戻る</span>
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
                                // onChange={(e) => setData("mood_id", e.target.value)}
                                className="mx-auto py-6 w-[40%] grid items-center justify-center grid-cols-5 gap-2"
                            >
                                    { moods.map((mood) => (
                                        <div
                                            key={mood.id}
                                            className="flex flex-col items-center"
                                        >
                                            <input
                                                type="radio"
                                                id={mood.id}
                                                onChange={(e) => setData("mood_id", e.target.value)}
                                                className="w-4 h-4"
                                                name="mood_id"
                                                value={mood.id}
                                                defaultChecked={data.mood_id === mood.id}
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
                                className="w-1/2 flex items-center justify-center rounded-lg"
                                name="comment"
                                value={data.comment}
                                placeholder="何か伝えたいことはありますか？"
                                onChange={(e) => setData("comment", e.target.value)}
                            >
                            </textarea>
                        
                            <h1 className="p-6 text-gray-900 text-lg font-bold">
                                感じた場面・状況・背景
                            </h1>
                            
                            <fieldset
                                    className="mx-auto py-6 w-[40%] grid items-center justify-center grid-cols-5 gap-2"
                                    // onChange={(e) => setData("status_id", e.target.value)}
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
                                                    onChange={(e) => setData("status_id", e.target.value)}
                                                    className="w-4 h-4"
                                                    name="status_id"
                                                    value={status.id}
                                                    // defaultChecked={data.status_id.some(item => item === status.id)}
                                                />
                                                <label
                                                    htmlFor={status.id}
                                                    className="flex flex-col items-center"
                                                >
                                                    <img src={status.image_path} />
                                                    <span>{changeSituationEnToJp(status.status)}</span>
                                                </label>
                                            </div>
                                        )) }
                                </fieldset>
                        
                            <button
                                className="w-1/2 p-4 flex items-center justify-center rounded-md bg-pi-blue text-white shadow-md"
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
