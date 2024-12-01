import Image from "next/image";
import Services from "./services";

export default function SessaoServices() {
    return (
        <div className="flex flex-col items-start w-[100%] gap-10">
            <h3 className="text-2xl">Services</h3>
            <div className="flex flex-col items-center w-[100%] gap-3">
                <Services />
                <div className="flex gap-2">
                    <a href="">More</a>
                    <Image
                        src='/arrow.svg'
                        alt="seta"
                        width={10}
                        height={10}
                    />
                </div>
            </div>
        </div>
    )
}