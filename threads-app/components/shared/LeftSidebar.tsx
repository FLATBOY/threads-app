'use client'

import {sidebarLinks} from "@/constants/index";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter  } from "next/navigation";
import { SignedIn, SignOutButton } from "@clerk/nextjs";

function LeftSidebar(){
    const router = useRouter();
    const pathname = usePathname();

    return (
        <section className="custom-scrollbar leftsidebar">
            <div className="flex w-full flex-1 flex-col gap-6 px-6">
                {sidebarLinks.map((link) => {
                const isActive = (pathname.includes(link.route) && link.route.length > 1) || pathname === link.route;

                return (
                    <Link 
                        href={link.route}
                        key={link.label} 
                        className={`leftsidebar_link
                        ${isActive && 'bg-purple-500'}`}
                    >
                    <Image
                        src={link.imgURL}
                        alt={link.label}
                        width={24}
                        height={24}
                    />
                    <p className="max-lg:hidden">
                        {link.label}
                    </p>
                    </Link>
                )}
            )}
            </div>
            
            <div className="mt-5 px-6">
            <SignedIn>
                <SignOutButton signOutCallback={()=> router.push('/sign-in')}>
                    <div className="flex center-pointer gap-4">
                        <Image
                            src="/assets/logout.svg"
                            alt="logout"
                            width={24}
                            height={24}
                        />
                    </div> 
                </SignOutButton>
            </SignedIn>
            <p className="max-lg:hidden">Logout</p>
            </div>
        </section>
    )
}
 
export default LeftSidebar;