import Card from "@/components/products/card";

export default function Products() {
    return (
        <div className="flex justify-around">
            <Card
                product="P6.01 - ONE"
                imageUrl="/p6.png"
                price={26}
            />
            <Card
                product="S0.03 HYDRO FOAM SEALANT"
                imageUrl="/s0.png"
                price={17}
            />
            <Card
                product="P1.03 LACK-POLISH GRUN"
                imageUrl="/p1.png"
                price={20}
            />
        </div>
    )
}