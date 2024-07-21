import Link from 'next/link';
import { ThemeToggle } from '../theme/ThemeToggle';
import { Typography } from '../ui/typography';
import { Logo } from '../../assets/logo';

export function Header() {
    return (
        <header className="bg-background sticky top-0 z-40 w-full bg-primary text-secondary">
            <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
                <div className="flex gap-6 md:gap-10">
                    <div className="flex justify-center items-center">
                        <Link href='/'>
                            <Logo color="#F9F9F9" width={100} height={70}/>
                        </Link>
                    </div>
                </div>

                <div className="flex flex-1 items-center justify-end space-x-4">
                    <nav className="flex items-center space-x-1 gap-6">
                        <Typography variant="base" as={Link} href="/experience">
                            Experience
                        </Typography>
                        <Typography variant="base" as={Link} href="/whoiam">
                            Who I Am
                        </Typography>
                        <Typography variant="base" as={Link} href="/timeline">
                            Timeline
                        </Typography>
                        <ThemeToggle />
                    </nav>
                </div>
            </div>
        </header>
    );
}
