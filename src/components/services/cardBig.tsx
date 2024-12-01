import Image from "next/image";
import React from "react";

interface CardProps {
    title: string;
    imageUrl: string;
}

export default function CardBig({ title, imageUrl }: CardProps) {
    return (
        <div className="relative p-3 max-w-[400px] w-full rounded-2xl bg-[#2E2E2E] flex flex-col items-center sm:items-start">
            <h1 className="absolute top-3 left-6 sm:top-4 sm:left-10 lg:top-3 lg:left-4 xl:left-8 text-sm lg:text-base xl:text-xl uppercase text-center text-xl">
                {title}
            </h1>
            <Image
                className="rounded-lg"
                src={imageUrl}
                alt={title}
                width={400}
                height={240}
                style={{ objectFit: "cover" }}
            />
            <Image
                className="absolute bottom-5 sm:bottom-5 right-6 sm:right-6"
                src="/arrow.svg"
                alt="seta"
                width={16}
                height={16}
            />
        </div>
    );
}
