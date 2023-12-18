import { IoIosArrowDown } from "react-icons/io";
import { twMerge } from "tw-merge";

export function Select({ title, options, className, value, onChange }) {
    return (
        <div className="relative dark:text-black ">
            <select
                onChange={(e) => onChange(e.target.value)}
                value={value || ""}
                className={twMerge(
                    `w-24 p-4 bg-white border border-gray-300 appearance-none ${className}`
                )}
            >
                <option value="" disabled hidden>
                    {title}
                </option>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <div className="absolute inset-y-0 right-0 pr-3 pointer-events-none flex-center">
                <IoIosArrowDown />
            </div>
        </div>
    );
}
