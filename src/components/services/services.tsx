import CardBig from "./cardBig";

export default function Services() {
    return (
        <div className="flex flex-wrap lg:flex-row gap-8 justify-evenly items-center w-[100%]">
            <CardBig
                title="LAVAGEM DETALHADA"
                imageUrl="/lavagem-detalhada.png"
            />
            <CardBig
                title="DETALHAMENTO INTERNO"
                imageUrl="/detalhamento-interno.png"
            />
            <CardBig
                title="POLIMENTO"
                imageUrl="/polimento.png"
            />
        </div>
    )
}