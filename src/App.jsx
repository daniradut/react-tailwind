import { BiSun } from "react-icons/bi";
import { BiMoon } from "react-icons/bi";
import { useEffect, useState } from "react";
import { Nav } from "./components/Nav";
import { NewArrivalsSection } from "./components/NewArrivalsSection";
import { ShoeDetails } from "./components/ShoeDetails";
import { Sidebar } from "./components/Sidebar";
import { SHOE_LIST } from "./components/constants";
import { Cart } from "./components/Cart";

// const CART_ITEMS = SHOE_LIST.map((shoe) => {
//     return {
//         product: shoe,
//         qty: 1,
//         size: 44,
//     };
// });

export function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [currentShoe, setCurrentShoe] = useState(SHOE_LIST[0]);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const isDarkMode = localStorage.getItem("isDarkMode");
        if (isDarkMode === "true") {
            window.document.documentElement.classList.add("dark");
        }
    }, []);

    const toggleDarkMode = () => {
        window.document.documentElement.classList.toggle("dark");

        localStorage.setItem(
            "isDarkMode",
            window.document.documentElement.classList.contains("dark")
        );
    };

    const removeFromCart = (productId) => {
        const updatedCartItems = [...cartItems];
        const existingItemIndex = cartItems.findIndex(
            (item) => item.product.id === productId
        );
        updatedCartItems.splice(existingItemIndex, 1);
        setCartItems(updatedCartItems);
    };

    const addToCart = (product, qty, size) => {
        if (qty && size) {
            const updatedCartItems = [...cartItems];
            const existingItemIndex = cartItems.findIndex(
                (item) => item.product.id === product.id
            );
            if (existingItemIndex > -1) {
                updatedCartItems[existingItemIndex].qty = qty;
                updatedCartItems[existingItemIndex].size = size;
            } else {
                updatedCartItems.push({ product, qty, size });
            }
            setCartItems(updatedCartItems);
        }
    };

    return (
        <div className="p-10 xl:px-24 animate-fadeIn dark:bg-night">
            <Nav onClickShoppingBtn={() => setIsSidebarOpen(true)} />
            <ShoeDetails shoe={currentShoe} onClickAdd={addToCart} />
            <NewArrivalsSection
                items={SHOE_LIST}
                onClickCard={setCurrentShoe}
            />
            <Sidebar
                isOpen={isSidebarOpen}
                onClickClose={() => setIsSidebarOpen(false)}
            >
                <Cart cartItems={cartItems} onClickTrash={removeFromCart} />
            </Sidebar>
            <div className="fixed bottom-4 right-4">
                <button
                    onClick={toggleDarkMode}
                    className="px-4 py-2 text-white rounded-full shadow-lg bg-night-50 dark:bg-white dark:text-night"
                >
                    <BiSun className="hidden dark:block" />
                    <BiMoon className="dark:hidden" />
                </button>
            </div>
        </div>
    );
}
