import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Diary(props) {
    const { diaries } = props;
    
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
                        <div className="p-6 text-gray-900">今までのじぶん日誌</div>
                    </div>
                    
                    {/*
                    <Link href={route()}>
                        <div className="">
                            <p>じぶん日誌を書く</p>
                        </div>    
                    </Link>
                    */}
                    
                    <div
                        className="p-2 border-1 border-pi-black shadow-md rounded-md"
                    >
                        <h1>タイトル</h1>
                        <p>本文</p>
                        <p>2024年6月20日</p>
                    </div>
                    
                    {
                        diaries.map((diary) => {
                            return (
                                <div
                                    key={diary.id}
                                >
                                    <h1>{diary.title}</h1>
                                    <p>{diary.body}</p>
                                    <p>{diary.created_at}</p>
                                </div>
                            )
                        })
                    }
                    
                    
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
