export default function ProfileFooter() {
    return (
        <footer className="size-full flex flex-col items-center justify-between">
            <h2 className="text-2xl font-bold">Download CV</h2>
            <div className="w-full flex justify-around">
                <button className="text-lg px-5 py-1 bg-green-700 hover:bg-green-600 hover:scale-105 transition-all duration-300 rounded-full">Pt-Br</button>
                <button className="text-lg px-5 py-1 bg-green-700 hover:bg-green-600 hover:scale-105 transition-all duration-300 rounded-full">En-Us</button>
            </div>
        </footer>
    )
}