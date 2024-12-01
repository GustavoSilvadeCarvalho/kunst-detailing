import Image from "next/image";
import Cliente from "./cliente";

interface FeedbackProps {
    title: string;
    imageUrl: string;
    nome: string;
    data: string;
    texto: string;
}

export default function FeedbackCard({ title, imageUrl, nome, data, texto }: FeedbackProps) {
    return (
        <div className="bg-[#D9D9D9] max-w-[330px] rounded-lg px-3">
            <Image
                className="py-3"
                src='/stars.png'
                alt="star"
                width={150}
                height={30}
            />
            <p className="text-black py-3">
                {texto}
            </p>
            <Cliente
                imageUrl={imageUrl}
                title={title}
                nome={nome}
                data={data}
            />
        </div>
    )
}