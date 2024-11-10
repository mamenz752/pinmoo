import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import PlusIcon from '@/Icons/PlusIcon';
import DiaryEditIcon from '@/Icons/DiaryEditIcon';
import DiaryStarIcon from '@/Icons/DiaryStarIcon';
import { Head, Link } from '@inertiajs/react';
import dayjs from 'dayjs';
import ja from 'dayjs/locale/ja';

const DiaryPresenter = ({ diaries }) => {
  const changeStarColor = (isStar) => {
    if (isStar) {
      return 'text-pi-orange';
    } else {
      return 'text-gray-400';
    }
  }

  return (
    <AuthenticatedLayout
      header={"じぶん日記"}
    >
        <Head title="じぶん日記" />
        <div className="my-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <button className='py-2 px-4 w-full bg-pi-blue rounded-md shadow-sm hover:opacity-80'>
                <Link href={route('diary.new')} className='flex justify-center items-center gap-2 text-white'>
                  <div className='w-12 h-12'>
                    <PlusIcon />
                  </div>
                  <span className='text-lg font-bold'>
                    じぶん日記を書く
                  </span>
                </Link>
            </button>

            <div className='mt-8'>
              <h1 className='mt-4 text-xl tracking-wider font-bold'>今までのじぶん日記</h1>
              <div className='mt-4'>
                {
                    diaries ?
                    diaries.map((diary, i) => {
                        const created_at = dayjs(diary.created_at).locale(ja).format('YYYY年MM月DD日 HH時mm分');
                        return (
                        <div
                          className="mt-4 p-4 overflow-hidden bg-white shadow-sm sm:rounded-lg"
                          key={i}
                        >
                          <div className='m-2 pb-4 flex items-center justify-between border-b border-gray-200'>
                              <p className='text-lg font-bold tracking-wider'>{diary.title}</p>
                              <div className='flex gap-4'>
                                <button>
                                  <Link href={route('diary.edit', diary.id)}>
                                      <div className={`w-8 h-8 hover:opacity-60 ${changeStarColor(diary.is_star)}`}>
                                        <DiaryStarIcon />
                                      </div>
                                  </Link>
                                </button>
                                <button>
                                  <Link href={route('diary.edit', diary.id)}>
                                      <div className='w-8 h-8 hover:opacity-60'>
                                        <DiaryEditIcon />
                                      </div>
                                  </Link>
                                </button>
                              </div>
                          </div>
                          <div
                            className='my-6 mx-2'
                          >
                            {/* TODO: showを作るかどうか */}
                            {/* <Link
                              href={route('diary.show', diary.id)}
                            > */}
                              <p>
                                {diary.body}
                              </p>
                              <div className='flex justify-end'>
                                <p className='text-gray-600'>{created_at}</p>
                              </div>
                            {/* </Link> */}
                          </div>
                        </div>
                        )
                    }) : <></>
                }
              </div>
            </div>
        </div>
    </AuthenticatedLayout>
  )
}

export default DiaryPresenter
