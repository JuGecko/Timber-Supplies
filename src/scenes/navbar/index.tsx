import { useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png"

type Props = {}

const Navbar = (props: Props) => {
    const flexBetween = "flex items-center justify-between"
    
    return <nav>
    <div
    className={`${flexBetween} fixed top-0 z-30 w-full py-6`}
    >
        <div className={`${flexBetween} mx-auto w-5/6`}>
            <div className={`${flexBetween} w-full gap`}>
                {/* LEFT SIDE */}
                <img src={Logo} alt="Timber Supplies" />
                {/* RIGHT SIDE */}
                <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                    <p>Home</p>
                    <p>Our Story</p>
                    <p>Pricing</p>
                    <p>Contact us</p>
                </div>
                <div className={`${flexBetween} gap-8`}>
                    <p>Sign In</p>
                    <button>Your Account</button>
                </div>
            </div>
        </div>
    </div>
    </div>
  </nav>;
};

export default Navbar;