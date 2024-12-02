import CardBig from "./cardBig";

export default function Services() {
    return (
        <div className="flex flex-col lg:flex-row gap-8 justify-evenly items-center w-[100%]">
            <CardBig
                title="Technical wash"
                imageUrl="/technical.svg"
            />
            <CardBig
                title="Interior detailing"
                imageUrl="/interior.svg"
            />
            <CardBig
                title="Polishing"
                imageUrl="/polishing.svg"
            />
        </div>
    )
}