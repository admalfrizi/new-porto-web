import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: 'Certificates',
}


const CertificatesLayout = ({children}: {children: ReactNode}) => {
    return (
        <main className='w-screen mx-auto'>
            {children}
        </main>
    );
};

export default CertificatesLayout