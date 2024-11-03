import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import { useForm } from '@inertiajs/react'
import { AdvancedImage } from '@cloudinary/react'

const QuickStatusEdit = ({ user, moods, post, statuses }) => {
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

  return (
    <AuthenticatedLayout>
      <Head title='Quick Status Edit' />

      <div className="overflow-scroll my-12 mx-auto max-w-7xl sm:px-6 lg:px-8 pb-24">
        <form onSubmit={submitPutPost}>
          <h1 className='text-lg tracking-wider'>じぶんの気分</h1>
          {/* feeling edit */}
          <div className="mt-4 p-4 flex justify-between items-center bg-white shadow-sm sm:rounded-lg">
              <fieldset
                  name='mood_id'
                  onChange={(e) => setData('mood_id', e.target.value)}
                  defaultChecked={post.mood_id}
                  className='my-4 grid grid-cols-5 gap-2'
              >
                  {
                      moods.map((mood, i) => {
                          return (
                          <div className='flex flex-col items-center justify-center'>
                              <input
                                  id={mood.feeling}
                                  type='radio'
                                  name='mood_id'
                                  value={mood.id}
                              />
                              <label
                                  key={i}
                                  for={mood.feeling}
                              >
                                  <div className='w-20 h-full'>
                                      <img src={mood.image_path} alt={mood.feeling} />
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
              <textarea
                name='comment'
                onChange={(e) => setData('comment', e.target.value)}
                defaultValue={post.comment}
              >
              </textarea>
          </div>
          {/* background edit */}
          <div className="mt-4 p-4 flex justify-between items-center bg-white shadow-sm sm:rounded-lg">
          <fieldset
                  name='status_id'
                  onChange={(e) => setData('status_id', e.target.value)}
                  // defaultValue={post.status_id}
                  className='my-4 grid grid-cols-5 gap-2'
              >
                  {
                      statuses.map((status, i) => {
                          const statusImage = cld.image(status.image_path);
                          return (
                          <div className='flex flex-col items-center justify-center'>
                              <input
                                  id={status.feeling}
                                  type='radio'
                                  name='status_id'
                                  value={status.id}
                              />
                              <label
                                  key={i}
                                  for={status.feeling}
                              >
                                  <div className='w-20 h-full'>
                                      <AdvancedImage cldImg={statusImage} />
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
            className='w-full bg-pi-blue text-white px-4 py-2 rounded-md mt-4'
          >
              変更を保存
          </button>
        </form>
      </div>
    </AuthenticatedLayout>
  )
}

export default QuickStatusEdit
