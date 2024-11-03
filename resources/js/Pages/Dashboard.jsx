import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import EditIcon from '../../../public/icons/EditIcon';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';
import { useEffect, useState } from 'react';

function getMoodUrl(imagePath) {
    const cld = new Cloudinary({
        cloud: {
            cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
        },
    });
    const MoodImageUrl = cld.image(imagePath);
    return MoodImageUrl;
}

export default function Dashboard({user, moods, newPost}) {
    const [currentMood, setCurrentMood] = useState();
    useEffect(() => {
        if (newPost) {
            setCurrentMood(moods.filter(mood => mood.id === newPost.mood_id)[0]);
            console.log(newPost);
        }
    }, [])

    return (
        <AuthenticatedLayout
            header={"Dashboard"}
        >
            <Head title="Dashboard" />

            <div className="my-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <h1 className='text-lg tracking-wider'>じぶんの気分</h1>
                <div className="mt-4 p-4 flex justify-between items-center bg-white shadow-sm sm:rounded-lg">
                    <p>{user.username}</p>
                    <div className='flex gap-4'>
                        <p>{newPost ? newPost.comment :<></>}</p>
                        <div className='w-12 h-12'>
                            {
                                newPost && currentMood ?
                                    <AdvancedImage cldImg={getMoodUrl(currentMood.image_path)} />
                                : <></>
                            }
                        </div>
                        {
                            newPost ?
                                <Link href={route('posts.edit', newPost.id)}>
                                    <EditIcon />
                                </Link>
                            :   <></>
                        }
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
