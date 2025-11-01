import { ReactNode } from 'react';

export const metadata = {
  title: "AAI Web | About Me",
};

const AboutMeLayout = ({children}: {children: ReactNode}) => {
    return (
        <main className='w-screen mx-auto'>
            {children}
        </main>
    );
};

export default AboutMeLayout