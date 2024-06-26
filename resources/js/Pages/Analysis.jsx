import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import MoodRaderChart from '@/Pages/Analysis/MoodRaderChart';
import { Head } from '@inertiajs/react';

export default function Analysis(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">感情グラフ</h2>}
        >
            <Head title="感情グラフ" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        
                        <h1 className="p-4 font-bold border-b border-gray-200">ここ3日間の自分の気分</h1>
                        
                        <div className="w-2/3 h-2/3 mx-auto p-8">
                            <MoodRaderChart />
                        </div>
                
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
