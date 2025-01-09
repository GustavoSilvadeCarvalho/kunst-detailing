import Image from "next/image";

export default function sessaoFooter() {
    return (
        <div className="flex justify-center items-center gap-9 mb-10">
            <Image
                src="/logo2.png"
                alt="logo 2"
                width={120}
                height={100}
            />
            <Image
                className="cursor-pointer"
                src="/instagram.svg"
                alt="logo do instagram"
                width={40}
                height={40}
            />
            <Image
                className="cursor-pointer"
                src="/whatsapp.svg"
                alt="logo do whatsapp"
                width={40}
                height={40}
            />
        </div>
    );
}