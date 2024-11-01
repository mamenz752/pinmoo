import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import Logo from '../../../public/Logo';
import DashboardIcon from '../../../public/icons/DashboardIcon';
import DiaryIcon from '../../../public/icons/DiaryIcon';
import SmileIcon from '../../../public/icons/SmileIcon';
import ChartIcon from '../../../public/icons/ChartIcon';
import ProfileIcon from '../../../public/icons/ProfileIcon';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="border-b border-gray-100 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 justify-between">
                        <div className="flex">
                            <div className="flex shrink-0 items-center">
                                <Link href="/" className='w-48 h-full'>
                                    <Logo />
                                </Link>
                            </div>

                            <h2 className="flex items-center text-xl font-semibold leading-tight text-gray-800 sm:-my-px sm:ms-10 sm:flex">
                                { header }
                            </h2>
                        </div>

                        <div className="hidden sm:ms-6 sm:flex sm:items-center">
                            <div className="relative ms-3">
                                <span className="inline-flex rounded-md">
                                    <button
                                        type="button"
                                        className="inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none"
                                    >
                                        {user.name}
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <main>{children}</main>

            <div className='w-full fixed bottom-0 py-4 bg-white'>
                <ul className='flex items-center justify-center gap-16'>
                    <li className='hover:opacity-60'>
                        <Link href={route('dashboard')} className='flex flex-col items-center justify-center gap-1'>
                            <DashboardIcon />
                            <span className='text-sm'>ホーム</span>
                        </Link>
                    </li>
                    <li className='hover:opacity-60'>
                        <Link href={route('diary.index')} className='flex flex-col items-center justify-center gap-1'>
                            <DiaryIcon />
                            <span className='text-sm'>じぶん日記</span>
                        </Link>
                    </li>
                    <li className='text-pi-orange hover:opacity-60'>
                        <Link href='' >
                            <SmileIcon />
                        </Link>
                    </li>
                    <li className='hover:opacity-60'>
                        <Link href={route('analysis')} className='flex flex-col items-center justify-center gap-1'>
                            <ChartIcon />
                            <span className='text-sm'>感情グラフ</span>
                        </Link>
                    </li>
                    <li className='hover:opacity-60'>
                        <Link href={route('profile.edit')} className='flex flex-col items-center justify-center gap-1'>
                            <ProfileIcon />
                            <span className='text-sm'>プロフィール</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
