'use client';
import Image from 'next/image';
import { useState } from 'react';

interface ProductProps {
    product: string;
    imageUrl: string;
    price: number;
}

export default function Card({ product, imageUrl, price }: ProductProps) {
    const [selectedSize, setSelectedSize] = useState<'250ml' | '1 Litro'>('250ml');

    const sizePrices = {
        '250ml': price,
        '1 Litro': price * 3
    };

    const currentPrice = sizePrices[selectedSize];

    return (
        <div className='flex flex-col items-center w-fit px-4 pt-4 rounded-2xl bg-[#2E2E2E]'>
            <div className='flex bg-[#4E4E4E] rounded-2xl justify-center items-center'>
                <Image
                    src={imageUrl}
                    alt={product}
                    width={300}
                    height={100}
                />
            </div>
            <h1 className='text-xl pt-3'>{product}</h1>
            <div className='flex gap-10 py-3'>
                <button
                    className={`px-4 py-2 rounded-2xl ${selectedSize === '250ml' ? 'bg-[#4E4E4E]' : 'bg-[#2E2E2E]'}`}
                    onClick={() => setSelectedSize('250ml')}
                >
                    250ml
                </button>
                <button
                    className={`px-4 py-2 rounded-2xl ${selectedSize === '1 Litro' ? 'bg-[#4E4E4E]' : 'bg-[#2E2E2E]'}`}
                    onClick={() => setSelectedSize('1 Litro')}
                >
                    1 Litro
                </button>
            </div>
            <div className='flex w-full justify-around items-center pb-3 text-lg'>
                <button className='px-4 py-2 bg-[#4E4E4E] rounded-2xl text-lg'>Buy</button>
                <p>${currentPrice}</p>
            </div>
        </div>
    );
}
