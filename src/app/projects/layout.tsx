import { ReactNode } from 'react';

export const metadata = {
  title: "AAI Web |Projects",
};

const ProjectsLayout = ({children}: {children: ReactNode}) => {
    return (
        <main className='w-screen mx-auto bg-brand-50'>
            {children}
        </main>
    );
};

export default ProjectsLayout