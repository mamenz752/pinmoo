import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

const DiaryPresenter = ({ diaries }) => {
  return (
    <AuthenticatedLayout
      header={"Diary"}
    >
        <Head title="Diary" />
        <div className="my-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <button>
                <Link href={route('diary.new')}>
                  Add Diary
                </Link>
            </button>

            {
                diaries ?
                diaries.map((diary) => {
                    return (
                    <div className="p-4 overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        {diary.title}
                    </div>
                    )
                }) : <></>
            }
        </div>
    </AuthenticatedLayout>
  )
}

export default DiaryPresenter
