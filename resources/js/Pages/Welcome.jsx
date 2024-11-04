import { Head, Link } from '@inertiajs/react';
import Logo from '@/Icons/Logo';
import SmileShareIcon from '@/Icons/SmileShareIcon';
import CalendarHeartIcon from '@/Icons/CalendarHeartIcon';
import HeartHandIcon from '@/Icons/HeartHandIcon';
import GuestFooter from '@/Components/GuestFooter';

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="ようこそ" />
            <div className='max-w-[1440px] mx-auto'>
                <header className="grid grid-cols-3 items-center gap-2 py-10">
                    <div className="mx-auto w-64 h-full flex col-start-2 justify-center">
                        <Logo />
                    </div>
                    <nav className="mx-6 flex justify-end gap-4">
                        {auth.user ? (
                            <Link
                                href={route('dashboard')}
                                className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                            >
                                ダッシュボード
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route('login')}
                                    className="rounded-md px-6 py-4 text-black tracking-wider font-bold hover:bg-gray-300 hover:opacity-80"
                                >
                                    ログイン
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="rounded-md px-6 py-4 bg-pi-orange text-white tracking-wider font-bold hover:opacity-80 shadow-sm"
                                >
                                    新規登録
                                </Link>
                            </>
                        )}
                    </nav>
                </header>

                <main className='flex flex-col items-center justify-center'>
                    <ul className='my-8 flex flex-col gap-16'>
                        <li className='flex items-center justify-between gap-16'>
                            <div className='w-24 h-24 text-pi-orange'>
                                <SmileShareIcon />
                            </div>
                            <p className='text-right text-lg tracking-wider text-bold'>pinmooで自分の気分を<br />シェアしてみよう</p>
                        </li>
                        <li className='flex items-center justify-between gap-16'>
                            <div className='w-24 h-24 text-pi-green'>
                                <CalendarHeartIcon />
                            </div>
                            <p className='text-right text-lg tracking-wider text-bold'>感情日記も思いのままに</p>
                        </li>
                        <li className='flex items-center justify-between gap-16'>
                            <div className='w-24 h-24 text-pi-red'>
                                <HeartHandIcon />
                            </div>
                            <p className='text-right text-lg tracking-wider text-bold'>メンタルヘルスの<br />健康維持にも</p>
                        </li>
                    </ul>

                    <button className='mt-8 py-6 px-12 bg-pi-orange text-white text-xl font-bold rounded-md hover:opacity-80 shadow-sm'>
                        <Link href={route('register')}>
                            今すぐ始めよう
                        </Link>
                    </button>
                    <GuestFooter />
                </main>
            </div>
        </>
    );
}
