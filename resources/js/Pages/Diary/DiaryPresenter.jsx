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
                diaries.map((diary, i) => {
                  console.log(diary)
                    return (
                    <div
                      className="p-4 overflow-hidden bg-white shadow-sm sm:rounded-lg"
                      key={i}
                    >
                        <div className='flex justify-end'>
                          <button>
                            <Link href={route('diary.edit', diary.id)}>
                              Edit
                            </Link>
                          </button>
                        </div>
                        <button>
                          <Link href={route('diary.show', diary.id)}>
                            {diary.title}
                          </Link>
                        </button>
                    </div>
                    )
                }) : <></>
            }
        </div>
    </AuthenticatedLayout>
  )
}

export default DiaryPresenter
