import FeedbackCard from "./feedbackCard";

export default function SessaoFeedback() {
    return (
        <div className="flex flex-col gap-10">
            <h1 className="text-2xl">FeedBack</h1>
            <div className="flex flex-col lg:flex-row items-center gap-20 justify-center">
                <FeedbackCard
                    nome="Emily Chen"
                    texto="I'm so impressed with thhe detailing job you did on my car. It looks brand new! Thanks"
                />
                <FeedbackCard
                    nome="Michael Davis"
                    texto="The staff at Knust Detailing was incredibly friendly and helpful. I'll definitely be back"
                />
                <FeedbackCard
                    nome="Murilo Ambiel"
                    texto="The staff at Knust Detailing was incredibly friendly and helpful. I'll definitely be back"
                />
            </div>
        </div>
    )
}