import React, {useState} from "react";
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Link, useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';

export default function UpdateProfileInformation({ mustVerifyEmail, status, className }) {
    const user = usePage().props.auth.user;
    const [image, setImage] = useState("");

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        name: user.name,
        email: user.email,
        image_path: user.image_path,
    });

    const submit = (e) => {
        e.preventDefault();
        patch(route("profile.update"));
    };
    
    const handleImage = (e) => {
        setImage(e.target.files[e.target.files.length]);
    }
    
    const getImagePath = (image) => {
        const reader = new FileReader();
        const blob = reader.readAsArrayBuffer(image);
        const result = reader.readAsDataURL(blob);
        // console.log(result);
        return reader.result;
    } 

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">プロフィール情報編集</h2>

                <p className="mt-1 text-sm text-gray-600">
                    登録しているプロフィール情報を変更できます。
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6" enctype="multipart/form-data">
                <div>
                    <InputLabel htmlFor="image_path" value="プロフィール画像" />
                    
                    <input
                        type="file"
                        id="image_path"
                        className="mt-1 block w-full"
                        name="image_path"
                        value={data.image_path}
                        onChange={(e) => {handleImage; getImagePath(image); setData('image_path', image)}}
                        />
                    
                    <InputError className="mt-2" message={errors.image_path} />
                </div>
                
                <div>
                    <InputLabel htmlFor="name" value="表示名" />

                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                        isFocused
                        autoComplete="name"
                    />

                    <InputError className="mt-2" message={errors.name} />
                </div>

                <div>
                    <InputLabel htmlFor="email" value="Eメールアドレス" />

                    <TextInput
                        id="email"
                        type="email"
                        className="mt-1 block w-full"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        required
                        autoComplete="email"
                    />

                    <InputError className="mt-2" message={errors.email} />
                </div>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="text-sm mt-2 text-gray-800">
                            まだEメールアドレスの認証が終わっていません。
                            <Link
                                href={route('verification.send')}
                                method="post"
                                as="button"
                                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                このリンクをクリックしてメールアドレスを認証してください。
                            </Link>
                        </p>

                        {status === 'verification-link-sent' && (
                            <div className="mt-2 font-medium text-sm text-green-600">
                                登録したアドレスに認証メールを送信しました。
                            </div>
                        )}
                    </div>
                )}

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>保存する</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enterFrom="opacity-0"
                        leaveTo="opacity-0"
                        className="transition ease-in-out"
                    >
                        <p className="text-sm text-gray-600">保存しました。</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
