import Image from "next/image";

interface CardBigProps {
    title: string;
    imageUrl: string;
}

export default function CardBig({ title, imageUrl }: CardBigProps) {
    return (
        <div className="flex flex-col items-center gap-2 rounded-[20px] bg-[#292929] p-4 border-2 border-[#2E2E2E]">
            <h3 className="text-xl">{title}</h3>
            <div className="relative">
                <Image
                    src={imageUrl}
                    alt={title}
                    width={300}
                    height={300}
                />
                <Image
                    className="absolute bottom-1.5 right-3 cursor-pointer"
                    src="arrow.svg"
                    alt="seta"
                    width={18}
                    height={18}
                />
            </div>
        </div>
    )
}
