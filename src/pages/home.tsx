export default function Home() {
    const scrollSmooth = (id: string) => {
        const element = document.getElementById(id)
        if(element) element.scrollIntoView({ behavior: 'smooth' })
    }

    const navigateTo = (path: string) => {
        window.location.href = `/${path}`
    }

    return <main className="flex flex-col bg-background text-text h-screen select-none">
        <section className="flex flex-col items-center text-center min-h-screen bg-background justify-center gap-3">
            <h1 className="text-5xl font-bold text-slate">Welcome to CTFHelper</h1>
            <p className="text-xl text-slate/70">Your ultimate companion for Capture The Flag competitions</p>
            <div className="flex flex-col md:flex-row gap-4 mt-6 w-sm md:w-xl">
                <button onClick={() => scrollSmooth('getting-started')} className="bg-primary text-slate rounded-lg w-full py-3 cursor-pointer font-medium hover:bg-primary/90 border border-slate/30 transition">Get Started</button>
                <button className="bg-transparent border-2 border-text text-text rounded-lg w-full py-3 cursor-pointer font-medium hover:bg-primary/10 transition">Learn More</button>
            </div>
        </section>
        <section id="getting-started" className="bg-accent">
            <div className="flex flex-col gap-6 mx-auto w-[75vw] py-6">
                <h1 className="text-3xl font-semibold">Getting Started</h1>
                <div className="rounded-xl cursor-pointer flex flex-col gap-2 bg-background p-4 border border-slate/30 shadow hover:shadow-md transition">
                    <h2 className="font-medium text-xl">Documentation</h2>
                    <p className="text-slate/70">Learn the basics of CTFs and how to use CTFHelper effectively.</p>
                </div>
                <div onClick={() => navigateTo('playground')} className="rounded-xl cursor-pointer flex flex-col gap-2 bg-background p-4 border border-slate/30 shadow hover:shadow-md transition">
                    <h2 className="font-medium text-xl">Playground</h2>
                    <p className="text-slate/70">Use various tools and resources to practice your CTF skills.</p>
                </div>
                <div className="rounded-xl cursor-pointer flex flex-col gap-2 bg-background p-4 border border-slate/30 shadow hover:shadow-md transition">
                    <h2 className="font-medium text-xl">Resources</h2>
                    <p className="text-slate/70">Access a collection of useful resources for CTF competition preparation.</p>
                </div>
            </div>
        </section>
        <footer className="bg-footer text-slate/70 text-center py-4 mt-auto">
            &copy; 2026 AaryanKhClasses. All rights reserved.
        </footer>
    </main>
}
