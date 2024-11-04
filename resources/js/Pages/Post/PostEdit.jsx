import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import LockIcon from '@/Icons/LockIcon'
import UnlockIcon from '@/Icons/UnlockIcon'
import { Head, Link, useForm } from '@inertiajs/react'

const PostEdit = ({ user, moods, post, statuses }) => {
  const {data, setData, put} = useForm({
    user_id: user.id,
    mood_id: post.mood_id,
    comment: '',
    status_id: 1
  });

  const submitPutPost = (e) => {
    e.preventDefault();
    console.log(data);
    put(route('posts.update', post.id));
  }

  const translateJapanese = (feeling) => {
    switch (feeling) {
        case 'angry':
            return '怒り';
        case 'sad':
            return '悲しみ';
        case 'scared':
            return '恐怖';
        case 'nervous':
            return '緊張';
        case 'smile':
            return '穏やか';
        case 'surprised':
            return '驚き';
        case 'wink':
            return '順調';
        case 'joyful':
            return '喜び';
        case 'stared':
            return '夢中';
        case 'love':
            return '幸せ';
    }
}

const translateStatusToJapanese = (status) => {
    switch (status) {
        case 'friends':
            return '友達';
        case 'family':
            return '家族';
        case 'lover':
            return '恋人';
        case 'sunny':
            return '晴れ';
        case 'cloudy':
            return '曇り';
        case 'rainy':
            return '雨';
        case 'study':
            return '勉強';
        case 'exam':
            return '試験';
        case 'project':
            return 'プロジェクト';
        case 'work':
            return '仕事';
    }
}

  return (
    <AuthenticatedLayout>
      <Head title='感情をさらに記録する' />

      <div className="overflow-scroll my-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <Link
            href={route('dashboard')}
            className='py-4 px-8 flex items-center justify-center tracking-wider bg-white shadow-sm rounded-md hover:opacity-80'
        >
            一つ前に戻る
        </Link>
        <h1 className='mt-4 text-xl tracking-wider font-bold'>感情をさらに記録する</h1>
        <form onSubmit={submitPutPost}>
          {/* feeling edit */}
          <div className="mt-4 p-4 flex justify-between items-center bg-white shadow-sm sm:rounded-lg">
            <div className='flex item-center justify-center gap-2'>
                <div className='w-12 h-12 text-pi-green'>
                    <UnlockIcon />
                </div>
                <div>
                    <p className='font-bold'>感情を変更する</p>
                    <p>この情報は友達に公開されます</p>
                </div>
            </div>
              <fieldset
                  name='mood_id'
                  onChange={(e) => setData('mood_id', e.target.value)}
                  className='my-4 grid grid-cols-5 justify-center gap-6'
                  >
                  {
                      moods.map((mood, i) => {
                          return (
                              <div
                                className='flex flex-col items-center justify-center'
                                key={i}
                                >
                              <input
                                  id={mood.feeling}
                                  type='radio'
                                  name='mood_id'
                                  value={mood.id}
                                  defaultChecked={ data.mood_id === mood.id ? true : false }
                                  />
                                    <label
                                        for={mood.feeling}
                                        className='flex flex-col items-center checked:opacity-100 opacity-80'
                                    >
                                        <div className='w-20 h-full'>
                                            <img src={mood.image_path} alt={mood.feeling} />
                                        </div>
                                        <div>
                                            <p>{translateJapanese(mood.feeling)}</p>
                                        </div>
                                    </label>
                          </div>
                          )
                      })
                  }
              </fieldset>
          </div>
          {/* comments */}
          <div className="mt-4 p-4 flex justify-between items-center bg-white shadow-sm sm:rounded-lg">
            <div className='flex item-center justify-center gap-2'>
                    <div className='w-12 h-12 text-pi-green'>
                        <UnlockIcon />
                    </div>
                    <div>
                        <p className='font-bold'>ひとこと</p>
                        <p>この情報は友達に公開されます</p>
                    </div>
                </div>
              <input
                type='text'
                name='comment'
                onChange={(e) => setData('comment', e.target.value)}
                defaultValue={post.comment}
                className='w-1/3 p-2 border border-gray-300 rounded-md'
              />
          </div>
          {/* background edit */}
          <div className="mt-4 p-4 flex justify-between items-center bg-white shadow-sm sm:rounded-lg">
          <div className='flex item-center justify-center gap-2'>
                <div className='w-12 h-12 text-pi-orange'>
                    <LockIcon />
                </div>
                <div>
                    <p className='font-bold'>感じた場面・状況・背景など</p>
                    <p>この情報は友達に公開されません</p>
                </div>
            </div>
          <fieldset
                  name='status_id'
                  onChange={(e) => setData('status_id', e.target.value)}
                  className='my-4 grid grid-cols-5 gap-2'
                  >
                  {
                      statuses.map((status, i) => {
                          return (
                              <div
                                className='flex flex-col items-center justify-center'
                                key={i}
                            >
                              <input
                                  id={status.feeling}
                                  type='radio'
                                  name='status_id'
                                  value={status.id}
                                  defaultValue={data.status_id === post.status_id ? true : false}
                              />
                              <label
                                    for={status.status}
                                    className='flex flex-col items-center checked:opacity-100 opacity-80'
                                >
                                    <div className='w-20 h-full'>
                                        <img src={status.image_path} alt={status.status} />
                                    </div>
                                    <div>
                                        <p>{translateStatusToJapanese(status.status)}</p>
                                    </div>
                                </label>
                          </div>
                          )
                      })
                  }
              </fieldset>
          </div>

          <button
            type='submit'
            className='w-full bg-pi-blue font-bold text-lg tracking-wider text-white px-4 py-2 rounded-md mt-4 shadow-sm hover:opacity-80'
          >
              変更を保存
          </button>
        </form>
      </div>
    </AuthenticatedLayout>
  )
}

export default PostEdit
