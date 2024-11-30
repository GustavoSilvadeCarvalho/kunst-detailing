import Card from "./card";

export default function Services() {
    return (
        <div className="flex justify-between w-[1200px]">
            <Card 
                title="Technical wash"
                imageUrl="/technical.svg"
            />
            <Card 
                title="Interior detailing"
                imageUrl="/interior.svg"
            />
            <Card 
                title="Polishing"
                imageUrl="/polishing.svg"
            />
        </div>
    )
}