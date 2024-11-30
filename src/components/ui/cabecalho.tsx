import Image from "next/image";
import NavBar from "./navBar";

export default function Cabecalho() {
    return (
        <header className="flex flex-col items-center">
            <Image
                className="py-2"
                src='/logo.png'
                alt="Logo da Knust Detailing"
                width={50}
                height={50}
            />
            <NavBar />
        </header>
    )
}