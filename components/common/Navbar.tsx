import Image from 'next/image';
import Link from 'next/link';
import { ModeToggle } from '../mode-toggle';
import { 
    ClerkLoaded, 
    ClerkLoading,
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,
} from '@clerk/nextjs';
import { Loader } from 'lucide-react';
import { Button } from '../ui/button';

const Navbar = () => {
    return (
        <nav className="border-b h-20 w-full px-4">
            <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full">
                <div className='pt-8 pl-4 pb-7 flex items-center gap-x-3'>
                    {/* Logo */}
                    <Link href="/">
                        <Image src={'/logo/logo.svg'} alt={'logo'} width={200} height={200} />
                    </Link>
                </div>

                <ClerkLoading>
                    <Loader className='h-5 w-5 text-muted-foreground animate-spin' />
                </ClerkLoading>
                <ClerkLoaded>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                    <SignedOut>
                        <SignInButton
                            mode='modal'
                        >
                            <Button>Login</Button>
                        </SignInButton>
                    </SignedOut>
                </ClerkLoaded>

                <ModeToggle />
            </div>
        </nav>
    );
};

export default Navbar;
