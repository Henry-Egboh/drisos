const HeroSection = () => {
    return (
        <header className="px-16 py-32">
            <main className="grid grid-cols-4 gap-4">
                <div className="col-start-2 col-span-1 p-12 bg-slate-400"></div>
                <div className="col-start-3 col-end-4 p-12 bg-slate-400"></div>
                <div className="col-span-full p-12 bg-teal-600"></div>
            </main>
        </header>
     );
}

export default HeroSection;