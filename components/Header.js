import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { getSession, signIn, signOut, useSession } from 'next-auth/react';
import { Varela_Round } from "next/font/google";


const font = Varela_Round({ subsets: ["latin"], weight: '400' });

const Header = () => {
    const router = useRouter();
    const sess = getSession()
    const [drawerOpen, setDrawerOpen] = useState(false);
    const { data: session, status } = useSession()

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    const isActive = (pathname) => {
        return router.pathname === pathname ? 'text-gray-900 font-bold' : 'text-gray-500';
    };

    const checkSession = async () => {
        const session = await getSession();
        if (session) {
            // User is signed in
            console.log('User is signed in:', session.user);
            // Optionally, redirect somewhere else
            // router.push('/dashboard');
        } else {
            // User is not signed in
            console.log('User is not signed in');
            // Redirect to sign-in page or show sign-in options
        }
    }


    useEffect(() => {
        checkSession();
    }, []);

    return (
        <>
            <header className={`bg-white  mx-2 mt-0 max-w-screen-xl mx-auto rounded-3xl h-12 ${font.className} my-4 sticky top-2 border z-40`}>
                <div className="flex justify-between w-full h-full items-center px-4 sm:px-2 lg:px-8">
                    <div className="block md:hidden">
                        <IconButton onClick={toggleDrawer(true)} aria-label="open drawer">
                            <MenuIcon />
                        </IconButton>
                    </div>

                    <div className="flex w-[200px] h-8">
                        <div className="block">
                            <Link href="/" className="font-bold text-2xl">
                                Slatt Wear
                            </Link>
                        </div>
                    </div>

                    <div className="hidden md:flex justify-center w-full">
                        <nav aria-label="Global">
                            <ul className="flex items-center gap-6 text-sm">
                                <li>
                                    <Link className={`${isActive('/clothing')} transition hover:text-gray-500/75`} href="/clothing">
                                        Clothing
                                    </Link>
                                </li>
                                <li>
                                    <Link className={`${isActive('/accessories')} transition hover:text-gray-500/75`} href="/accessories">
                                        Accessories
                                    </Link>
                                </li>
                                <li>
                                    <Link className={`${isActive('/anime')} transition hover:text-gray-500/75`} href="/anime">
                                        Anime
                                    </Link>
                                </li>
                                <li>
                                    <Link className={`${isActive('/comingsoon')} transition hover:text-gray-500/75`} href="/comingsoon">
                                        Coming Soon
                                    </Link>
                                </li>
                                <li>
                                    <Link className={`${isActive('/about')} transition hover:text-gray-500/75`} href="/about">
                                        About Us
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="flex space-x-4">
                        {
                            session ? (
                                <div>
                                    <button className="border w-8 rounded-full bg-slate-950 text-white font-bold h-8" onClick={() => signOut()}>{session.user.name[0]}</button>
                                </div>

                            ) : (
                                <div>
                                    <button onClick={() => router.push('/login')}><svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        className="size-6"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                    </svg></button>
                                </div>
                            )
                        }

                        <Link href="/cart">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="size-6"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                        </Link>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
            </header>

            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                <div
                    className="bg-white w-56 flex flex-col"
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <List>
                        <ListItem button onClick={toggleDrawer(false)}>
                            <Link className={`${isActive('/')} transition hover:text-gray-500/75`} href="/">
                                Home
                            </Link>

                            <ListItemText primary="" />


                        </ListItem>
                        <ListItem button onClick={toggleDrawer(false)}>
                            <Link className={`${isActive('/clothing')} transition hover:text-gray-500/75`} href="/clothing">
                                Clothing
                            </Link>
                            <ListItemText primary="" />
                        </ListItem>
                        <ListItem button onClick={toggleDrawer(false)}>
                            <Link className={`${isActive('/accessories')} transition hover:text-gray-500/75`} href="/accessories">
                                Accessories
                            </Link>
                            <ListItemText primary="" />

                        </ListItem>
                        <ListItem button onClick={toggleDrawer(false)}>
                            <Link className={`${isActive('/anime')} transition hover:text-gray-500/75`} href="/anime">
                                Anime
                            </Link>
                            <ListItemText primary="" />
                        </ListItem>
                        <ListItem button onClick={toggleDrawer(false)}>
                            <Link className={`${isActive('/comingsoon')} transition hover:text-gray-500/75`} href="/comingsoon">
                                Coming Soon
                            </Link>
                            <ListItemText primary="" />
                        </ListItem>
                        <ListItem button onClick={toggleDrawer(false)}>
                            <Link className={`${isActive('/about')} transition hover:text-gray-500/75`} href="/about">
                                Coming Soon
                            </Link>
                            <ListItemText primary="" />
                        </ListItem>
                    </List>
                </div>
            </Drawer>
        </>
    );
};

export default Header;
