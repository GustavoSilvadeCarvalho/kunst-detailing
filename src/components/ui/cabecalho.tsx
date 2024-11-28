import Image from "next/image";

export default function Cabecalho() {
    return (
        <header>
            <Image
                src='/logo.png'
                alt="Logo da Knust Detailing"
                width={50}
                height={50}
            />
        </header>
    )
}