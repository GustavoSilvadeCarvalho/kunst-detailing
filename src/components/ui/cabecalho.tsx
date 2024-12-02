import Image from "next/image";
import NavBar from "./navBar";

export default function Cabecalho() {
    return (
        <header className="relative flex flex-col w-full items-center">
            <div className="relative w-full h-screen">
                <Image
                    src="/car.svg"
                    alt="Carro preto"
                    className="object-cover"
                    fill
                />
            </div>
            <Image
                className="absolute top-0 z-20 py-4"
                src="/logo.png"
                alt="Logo da Knust Detailing"
                width={50}
                height={50}
            />
            <NavBar />
            <div className="absolute top-80 transform -translate-y-1/2 text-white z-20 font-libre">
                <h1 className="text-6xl text-center">Your car, a masterpiece.</h1>
            </div>
        </header>
    );
}
