import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({moods, newPost}) {
    if (newPost) {
        console.log(newPost);
    }

    return (
        <AuthenticatedLayout
            header={"Dashboard"}
        >
            <Head title="Dashboard" />

            <div className="my-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="p-4 overflow-hidden bg-white shadow-sm sm:rounded-lg">
                    a
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
