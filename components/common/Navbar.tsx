import { 
    SignedIn,
    SignedOut,
    SignInButton,
    // UserButton,
    SignOutButton,
    ClerkLoading,
    SignUpButton,
} from '@clerk/nextjs';
import { Loader } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { ModeToggle } from '../mode-toggle';

const Navbar = () => {
    return (
        <nav className="border-b p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link href="/">
                    <Image src={'/logo/logo.svg'} alt={'logo'} width={200} height={200} />
                </Link>

                {/* Links and User Options */}
                <div className="flex space-x-4">
                    <ClerkLoading>
                        <Loader className='h-5 w-5 text-muted-foreground animate-spin' />
                    </ClerkLoading>
                    <SignedIn>
                        <Link href="/quizzes">
                            <p className="font-roboto">Quizzes</p>
                        </Link>
                        <Link href="/profile">
                            <p className="font-roboto">Profile</p>
                        </Link>
                        {/* <UserButton /> */}
                        <SignOutButton>
                            <Button>Sign Out</Button>
                        </SignOutButton>
                    </SignedIn>
                    <SignedOut>
                        <SignInButton>
                            <Button>Login</Button>
                        </SignInButton>
                        <SignUpButton>
                            <Button>Sign Up</Button>
                        </SignUpButton>
                    </SignedOut>
                    <ModeToggle />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
