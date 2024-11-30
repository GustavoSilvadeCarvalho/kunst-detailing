import Image from "next/image";
import React from "react";

interface CardProps {
  title: string;
  imageUrl: string;
}

export default function Card({ title, imageUrl }: CardProps) {
    return (
        <div className="relative p-3 max-w-[323px] rounded-2xl bg-[#2E2E2E]">
            <h1 className="absolute top-3 left-8 uppercase">{title}</h1>
            <Image
                src={imageUrl}
                alt={title}
                width={290}
                height={240}
            />
            <Image
                className="absolute bottom-5 right-6"
                src='/arrow.svg'
                alt="seta"
                width={12}
                height={12}
            />
        </div>
    )
}
