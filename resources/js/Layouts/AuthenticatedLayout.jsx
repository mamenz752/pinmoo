import { Link, usePage } from '@inertiajs/react';
import Logo from '@/Icons/Logo';
import DashboardIcon from '@/Icons/DashboardIcon';
import DiaryIcon from '@/Icons/DiaryIcon';
import SmileIcon from '@/Icons/SmileIcon';
import ChartIcon from '@/Icons/ChartIcon';
import ProfileIcon from '@/Icons/ProfileIcon';
import UserMenuIcon from '@/Icons/UserMenuIcon';

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;
    
    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="border-b border-gray-100 bg-white sticky top-0 left-0 shadow-sm">
                <div className="mx-auto my-2 max-w-7xl px-4">
                    <div className="flex h-16 justify-between">
                        <div className="flex gap-2">
                            <div className="flex shrink-0 items-center">
                                <Link href="/" className='w-48 h-full'>
                                    <Logo />
                                </Link>
                            </div>

                            <h2 className="flex items-center text-xl font-semibold leading-tight text-gray-800">
                                { header }
                            </h2>
                        </div>

                        <div className="w-1/5 flex items-center justify-center gap-4">
                            <div className='flex items-center justify-center w-full h-full'>
                                <Link href={route('friends.index')} className='flex flex-col items-center justify-center'>
                                        <div className='w-8 h-8 text-gray-400 hover:text-gray-600'>
                                            <UserMenuIcon />
                                        </div>
                                        <div>
                                            <span className='text-sm text-center'>ともだち</span>
                                        </div>
                                </Link>
                            </div>
                            <span className="w-full inline-flex rounded-md">
                                <button
                                    type="button"
                                    className="w-full inline-flex items-center justify-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 transition duration-150 ease-in-out focus:outline-none"
                                >
                                    {user.name}
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </nav>

            <main className='pb-24'>
                {children}
            </main>

            <div className='z-[40] w-full fixed bottom-0 py-4 bg-white shadow-[0_-1px_-2px_0_rgba(0,0,0,0.05)]'>
                <ul className='flex items-center justify-center gap-16'>
                    <li className='hover:opacity-60'>
                        <Link href={route('dashboard')} className='flex flex-col items-center justify-center gap-1'>
                            <div className='w-8 h-8 text-gray-600'>
                                <DashboardIcon />
                            </div>
                            <div>
                                <span className='text-sm text-center'>ホーム</span>
                            </div>
                        </Link>
                    </li>
                    <li className='hover:opacity-60'>
                        <Link href={route('diary.index')} className='flex flex-col items-center justify-center gap-1'>
                            <div className='w-8 h-8 text-gray-600'>
                                <DiaryIcon />
                            </div>
                            <div>
                                <span className='text-sm text-center'>じぶん日記</span>
                            </div>
                        </Link>
                    </li>
                    <li className='hover:opacity-60'>
                        <Link href={route('posts.new')}>
                            <div className='w-12 h-12 text-pi-orange'>
                                <SmileIcon />
                            </div>
                        </Link>
                    </li>
                    <li className='hover:opacity-60'>
                        <Link href={route('analysis')} className='flex flex-col items-center justify-center gap-1'>
                            <div className='w-8 h-8 text-gray-600'>
                                <ChartIcon />
                            </div>
                            <div>
                                <span className='text-sm text-center'>感情グラフ</span>
                            </div>
                        </Link>
                    </li>
                    <li className='hover:opacity-60'>
                        <Link href={route('profile.edit')} className='flex flex-col items-center justify-center gap-1'>
                            <div className='w-8 h-8 text-gray-600'>
                                <ProfileIcon />
                            </div>
                            <div>
                                <span className='text-sm text-center'>プロフィール</span>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
