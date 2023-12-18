export function Sidebar({ children, isOpen, onClickClose }) {
    return (
        <div>
            <div
                className={`overflow-y-auto p-5 fixed top-0 right-0 z-50 w-full shadow-lg md:w-[50%] lg:w-[35%] h-full bg-white transition transform duration-300 dark:bg-night ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <button
                    onClick={onClickClose}
                    className="absolute p-2 font-bold text-black right-4 top-4 dark:text-white"
                >
                    X
                </button>
                {children}
            </div>
            {isOpen && (
                <div className="fixed top-0 left-0 z-20 w-full h-full bg-black opacity-50" />
            )}
        </div>
    );
}
