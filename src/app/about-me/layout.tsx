import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'About Me',
}

const AboutMeLayout = ({children}: {children: ReactNode}) => {
    return (
        <main className='w-screen mx-auto'>
            {children}
        </main>
    );
};

export default AboutMeLayout