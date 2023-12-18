import { TbShoppingBag } from "react-icons/tb";
import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const ROUTES = ["Home", "Aabount", "Services", "Pricing", "Contact"];

export function Nav({ onClickShoppingBtn }) {
    const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);
    return (
        <nav className="relative z-10 flex flex-wrap items-center justify-between">
            {/* this is the logo */}
            <a href="#">
                <NikeLogo className="w-20 h-20 dark:fill-white" />
            </a>
            {/* Burger Button */}
            <button
                onClick={() => setIsMobileMenuShown(!isMobileMenuShown)}
                className="p-2 rounded-lg lg:hidden focus:ring-2 focus:ring-gray-200 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
            >
                <RxHamburgerMenu size={25} />
            </button>

            {/* Menu list */}
            <div
                className={`${
                    !isMobileMenuShown && "hidden"
                } w-full lg:w-auto lg:block`}
            >
                <ul className="flex flex-col p-4 text-lg border border-gray-100 rounded-lg lg:space-x-8 lg:flex-row bg-gray-50 lg:bg-transparent lg:border-none lg:dark:text-white">
                    {ROUTES.map((route, i) => {
                        return (
                            <li
                                className={`rounded py-2 px-3 cursor-pointer lg:hover:bg-transparent lg:hover:text-blue-500 ${
                                    i === 0
                                        ? "bg-blue-500 text-white lg:bg-transparent lg:text-blue-500"
                                        : "hover:bg-gray-100"
                                } ${(i == 3 || i == 4) && "lg:text-white"}`}
                                key={route}
                            >
                                {route}
                            </li>
                        );
                    })}
                </ul>
            </div>

            {/* Cart Button */}
            <div
                onClick={onClickShoppingBtn}
                className="fixed left-4 bottom-4 lg:static hover:cursor-pointer lg:mr-8"
            >
                <div className="w-12 h-12 bg-white rounded-full shadow-md btn-press-anim flex-center">
                    <TbShoppingBag />
                </div>
            </div>
        </nav>
    );
}
