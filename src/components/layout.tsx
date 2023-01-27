import { PropsWithChildren } from 'react';
import { Footer } from './footer';
import { Header } from './header';

export const Layout: React.FC<PropsWithChildren> = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);
