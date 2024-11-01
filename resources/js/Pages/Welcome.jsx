import { Head, Link } from '@inertiajs/react';
import Logo from '../../../public/Logo';
import SmileShareIcon from '../../../public/icons/SmileShareIcon';
import CalendarHeartIcon from '../../../public/icons/CalendarHeartIcon';
import HeartHandIcon from '../../../public/icons/HeartHandIcon';
import Footer from '@/Components/Footer';

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Welcome" />
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
                                    className="rounded-md px-6 py-4 text-black tracking-wider font-bold hover:bg-gray-400 hover:opacity-80"
                                >
                                    ログイン
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="rounded-md px-6 py-4 bg-pi-orange text-white tracking-wider font-bold hover:opacity-80"
                                >
                                    今すぐ始める
                                </Link>
                            </>
                        )}
                    </nav>
                </header>

                <main className='flex flex-col items-center'>
                    <ul className='flex flex-col gap-8'>
                        <li className='grid grid-cols-2 items-center justify-center'>
                            <SmileShareIcon />
                            <p>pinmooで自分の気分をシェアしてみよう</p>
                        </li>
                        <li className='grid grid-cols-2 items-center'>
                            <CalendarHeartIcon />
                            <p>感情日記も思いのままに</p>
                        </li>
                        <li className='grid grid-cols-2 items-center'>
                            <HeartHandIcon />
                            <p>メンタルヘルスの健康維持にも</p>
                        </li>
                    </ul>

                    <button className='mt-8 py-4 px-8 bg-pi-orange text-white font-bold rounded-md'>
                        <Link href={route('login')}>
                            今すぐ始めよう
                        </Link>
                    </button>
                </main>

                <Footer />
            </div>
        </>
    );
}
