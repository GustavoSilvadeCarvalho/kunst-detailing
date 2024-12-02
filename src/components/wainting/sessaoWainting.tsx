export default function SessaoWainting() {
    return (
        <div className="flex flex-col items-center gap-10 text-center">
            <h1 className="text-2xl">We are waiting for you</h1>
            <div className="flex flex-col lg:flex-row gap-10 items-center">
                <div className="flex flex-col px-12 items-center gap-10">
                    <h1>Address:</h1>
                    <div>
                        <p>Starry Night Street</p>
                    </div>
                </div>

                <div className="hidden lg:block w-px h-40 bg-slate-100"></div>
                <div className="lg:hidden w-52 h-px bg-slate-100"></div>

                <div className="flex flex-col px-12 items-center gap-10">
                    <h1>Work Schedule:</h1>
                    <div>
                        <p>Sat-Sun: 12:00 - 23:00</p>
                        <p>Mon-Fri: 10:00 - 21:00 </p>
                    </div>
                </div>
                <div className="hidden lg:block w-px h-40 bg-slate-100"></div>
                <div className="lg:hidden w-52 h-px bg-slate-100"></div>

                <div className="flex flex-col px-12 items-center gap-10">
                    <h1>Phone Number:</h1>
                    <div>
                        <p>+1 234 567 890</p>
                    </div>
                </div>
            </div>
        </div>
    )
}