import { useState } from "react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import QuickStatus from '@/Pages/QuickStatus/QuickStatus'
import { Head, Link, useForm } from '@inertiajs/react';

export default function Dashboard(props) {
    const { moods, post } = props;
    const [currentMood, setCurrentMood] = useState(moods.filter((mood) => mood.id == post.mood_id));
    
    console.log(currentMood);
    
    const {data, setData} = useForm({
        user_id: props.auth.user.id,
        mood_id: "",
        comment: ""
    })
    
    const handleSendPosts = (e) => {
        e.preventDefault();
        post("/posts");
    }
    
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    
                    {/* ここからクイックステータス */}
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="py-6 flex items-center justify-center gap-2">
                            <svg width="4rem" height="2rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.5 11.5H14.5L13 14.5L11 8.5L9.5 11.5H8.5M11.9932 5.13581C9.9938 2.7984 6.65975 2.16964 4.15469 4.31001C1.64964 6.45038 1.29697 10.029 3.2642 12.5604C4.75009 14.4724 8.97129 18.311 10.948 20.0749C11.3114 20.3991 11.4931 20.5613 11.7058 20.6251C11.8905 20.6805 12.0958 20.6805 12.2805 20.6251C12.4932 20.5613 12.6749 20.3991 13.0383 20.0749C15.015 18.311 19.2362 14.4724 20.7221 12.5604C22.6893 10.029 22.3797 6.42787 19.8316 4.31001C17.2835 2.19216 13.9925 2.7984 11.9932 5.13581Z" stroke="#FF2D2D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p className="text-lg">今の気分をシェアしましょう</p>
                        </div>
                        <form
                            onSubmit={handleSendPosts}
                            className="py-4 flex flex-col items-center"
                        >
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
                            <button
                                type="submit"
                                className="p-2 flex justify-center rounded-lg bg-pi-blue text-white"
                            >
                                記録する
                            </button>
                        </form>
                    </div>
                    {/* ここまでクイックステータス */}
                    
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                       <h2>じぶんのきぶん</h2>
                       <div className="flex gap-4">
                           <p>{post.comment}</p>
                           <img 
                                src={currentMood.image_path}
                                className="w-10 h-10"
                            />
                           { /* この${id}が正しく取得できているかを調べる */}
                           <Link href={route("posts.edit", post.id)}>
                                <svg width="2rem" height="2rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 20H21M3.00003 20H4.67457C5.16376 20 5.40835 20 5.63852 19.9447C5.84259 19.8957 6.03768 19.8149 6.21663 19.7053C6.41846 19.5816 6.59141 19.4086 6.93732 19.0627L19.5001 6.49998C20.3285 5.67156 20.3285 4.32841 19.5001 3.49998C18.6716 2.67156 17.3285 2.67156 16.5001 3.49998L3.93729 16.0627C3.59139 16.4086 3.41843 16.5816 3.29475 16.7834C3.18509 16.9624 3.10428 17.1574 3.05529 17.3615C3.00003 17.5917 3.00003 17.8363 3.00003 18.3255V20Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                           </Link>
                       </div>
                    </div>
                    
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                       <h2>ともだちのきぶん</h2>
                    </div>
                    
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
