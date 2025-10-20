import { ReactNode } from 'react';

const RootLayout = ({children}: {children: ReactNode}) => {
    return (
        <main className='w-screen mx-auto'>
            {children}
        </main>
    );
};

export default RootLayout