import FeedbackCard from "./feedbackCard";

export default function SessaoFeedback() {
    return (
        <div className="flex flex-col gap-10">
            <h1 className="text-2xl">FeedBack</h1>
            <div className="flex flex-col lg:flex-row items-center gap-10 justify-center">
                <FeedbackCard
                    imageUrl="/cliente-1.png"
                    title="cliente 1"
                    nome="Emily Chen"
                    data="Jan 12, 2024"
                    texto="I'm so impressed with thhe detailing job you did on my car. It looks brand new! Thanks"
                />
                <FeedbackCard
                    imageUrl="/cliente-2.png"
                    title="cliente 2"
                    nome="Michael Davis"
                    data="Apr 24, 2024"
                    texto="The staff at Knust Detailing was incredibly friendly and helpful. I'll definitely be back"
                />
            </div>
        </div>
    )
}