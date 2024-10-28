"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ModeToggle } from '../others/mode-toggle';
import { 
    ClerkLoaded, 
    ClerkLoading,
    SignedIn,
    SignedOut,
    SignInButton,
    SignUpButton,
    UserButton,
} from '@clerk/nextjs';
import { Loader } from 'lucide-react';
import GrayButton from '../buttons/GrayButton';
import { useTheme } from 'next-themes';

const Navbar = () => {

    const { theme } = useTheme();

    const logoSrc = theme === 'dark' ? '/logo/logo-light-text.png' : '/logo/logo-dark-text.png';

    return (
        <nav className="border-b h-20 w-full px-4">
            <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full">
                {/* Logo Section */}
                <div className="flex items-center gap-x-3 h-full">
                    <Link href="/">
                        <Image src={logoSrc} alt={'logo'} width={200} height={200} />
                    </Link>
                </div>

                {/* Auth Section */}
                <div className="flex items-center h-full">
                    <ClerkLoading>
                        <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
                    </ClerkLoading>
                    
                    <ClerkLoaded>
                        <div className="flex gap-x-3 items-center">
                            <SignedIn>
                                <ModeToggle />
                                <UserButton />
                            </SignedIn>
                            <SignedOut>
                                <SignInButton mode="modal">
                                    <div className="w-full max-w-[18rem]">
                                        <GrayButton title="Login" height="h-[2.8rem] p-4" fontSize="text-[1rem]" />
                                    </div>
                                </SignInButton>
                                <SignUpButton mode="modal">
                                    <div className="w-full max-w-[32rem]">
                                        <GrayButton title="SignUp" height="h-[2.8rem] p-4" fontSize="text-[1rem]" />
                                    </div>
                                </SignUpButton>
                                <div className='ml-8'>
                                    <ModeToggle />
                                </div>
                            </SignedOut>
                        </div>
                    </ClerkLoaded>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
