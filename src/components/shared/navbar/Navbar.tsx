import Link from 'next/link';
import React from 'react';
import Theme from './Theme';
import LocaleSwitcher from './LocaleSwitcher';
import { LangParam } from '@/types';
import { getDictionaryServer } from '@/utils/getDictionaryServer';
import MobileNav from '@/components/shared/navbar/MobileNav';
import { UserButton } from '@clerk/nextjs';

const Navbar = async ({ params: { lang } }: LangParam) => {
	const dict = await getDictionaryServer(lang);
	const { navbar } = dict.shared;
	const pagesUrls = Object.entries(navbar.pages);

	return (
		<nav className='flex justify-center items-center w-full flex-row dark:bg-dark-400 '>
			<ul className='justify-center items-center gap-5 hidden sm:flex'>
				{pagesUrls.map(([url, title]) => {
					const composedUrl = url === 'home' ? `/${lang}` : `/${lang}/${url}`;
					return (
						<li key={url}>
							<Link
								className='text-dark-100 dark:text-light-800'
								href={composedUrl}
							>
								{title}
							</Link>
						</li>
					);
				})}
			</ul>
			<LocaleSwitcher params={{ lang }} />
			<div
				style={{
					border: '1px solid black',
					padding: '10px',
				}}
			>
				<UserButton afterSignOutUrl='/' />
			</div>
			<div className='flex-between gap-5'>
				<Theme />
			</div>
			<MobileNav lang={lang} />
		</nav>
	);
};

export default Navbar;
