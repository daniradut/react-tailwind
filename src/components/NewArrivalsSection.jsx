import { Card } from "./Card";

export function NewArrivalsSection({ items, onClickCard }) {
    return (
        <div className="mt-20">
            <div className="flex-center">
                <div className="text-4xl font-extrabold bg-[url('./assets/lines.png')] bg-center dark:text-white">
                    NEW ARRIVALS
                </div>
            </div>
            <div className="grid justify-between grid-cols-1 mt-10 gap-y-24 gap-x-6 md:grid-cols-2 xl:grid-cols-[repeat(3,25%)]">
                {items.map((item) => (
                    <Card key={item.id} item={item} onClick={onClickCard} />
                ))}
            </div>
        </div>
    );
}
