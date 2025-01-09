import Image from "next/image";
import Services from "./services";

export default function SessaoServices() {
    return (
        <div className="flex flex-col items-start w-[100%] gap-10">
            <h3 className="text-2xl">Serviços</h3>
            <div className="flex flex-col items-center w-[100%] gap-3">
                <Services />
                <div className="flex gap-2 relative group">
                    <a href="">Mais</a>
                    <Image
                        className="cursor-pointer"
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