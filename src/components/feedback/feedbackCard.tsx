import Image from "next/image";

interface FeedbackProps {
    nome: string;
    texto: string;
}

export default function FeedbackCard({ nome, texto }: FeedbackProps) {
    return (
        <div className="bg-[#D9D9D9] max-w-[350px] rounded-lg px-3">
            <div className="flex items-center justify-between">
                <h3 className="text-black text-lg">{nome}</h3>
                <Image
                    className="py-3"
                    src='/stars.png'
                    alt="star"
                    width={150}
                    height={30}
                />
            </div>

            <p className="text-black py-3 text-lg">
                {texto}
            </p>
        </div>
    )
}