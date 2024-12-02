import Products from "./products";
import Image from 'next/image';

export default function SessaoProducts() {
    return (
        <div className="flex flex-col gap-10">
            <h1 className="text-2xl">Products</h1>
            <div className="flex flex-col items-center w-[100%] gap-3">
                <Products />
                <div className="flex gap-2 relative group">
                    <a href="">More</a>
                    <Image
                        src='/arrow.svg'
                        alt="seta"
                        width={10}
                        height={10}
                    />
                    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></div>
                </div>
            </div>
        </div>
    )
}