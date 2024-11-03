import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

const DiaryPresenter = () => {
  return (
    <AuthenticatedLayout
      header={"Diary"}
    >
        <Head title="Diary" />
        <div className="my-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="p-4 overflow-hidden bg-white shadow-sm sm:rounded-lg">
                a
            </div>
        </div>
    </AuthenticatedLayout>
  )
}

export default DiaryPresenter
