import Image from "next/image";

interface ClienteProps {
    title: string;
    imageUrl: string;
    nome: string;
    data: string;
}

export default function Cliente({ title, imageUrl, nome, data }: ClienteProps) {
    return (
        <div className="flex gap-2 py-3">
            <Image
                src={imageUrl}
                alt={title}
                width={50}
                height={50}
            />
            <div>
                <p className="text-black">
                    {nome}
                </p>
                <p className="text-[#757575]">
                    {data}
                </p>
            </div>
        </div>
    )
}