export default function Playground() {
    const scrollSmooth = (id: string) => {
        const element = document.getElementById(id)
        if(element) element.scrollIntoView({ behavior: 'smooth' })
    }

    return <main className="flex flex-col bg-background text-text h-screen select-none">
        <section className="flex flex-col items-center text-center min-h-screen bg-background justify-center gap-5">
            <h1 className="text-5xl font-bold text-slate">CTFHelper - Playground</h1>
            <p className="text-xl text-slate/70">The library for all types of CTF problems.</p>
            <button onClick={() => scrollSmooth('playground-types')} className="bg-primary text-slate rounded-lg py-3 w-md md:w-xl cursor-pointer font-medium hover:bg-primary/90 border border-slate/30 transition">Get Started</button>
        </section>
        <section id="playground-types" className="bg-accent">
            <div className="grid grid-cols-1 md:grid-cols-2 mx-auto md:w-[75vw] py-6">
                <div className="rounded-xl cursor-pointer flex flex-col gap-2 bg-background p-4 border border-slate/30 shadow hover:shadow-md transition m-4">
                    <h2 className="font-medium text-xl">Steganography</h2>
                    <p className="text-slate/70">Extract hidden information from digital media.</p>
                </div>
                <div className="rounded-xl cursor-pointer flex flex-col gap-2 bg-background p-4 border border-slate/30 shadow hover:shadow-md transition m-4">
                    <h2 className="font-medium text-xl">Cryptography</h2>
                    <p className="text-slate/70">Decrypt messages and solve cryptographic challenges.</p>
                </div>
                <div className="rounded-xl cursor-pointer flex flex-col gap-2 bg-background p-4 border border-slate/30 shadow hover:shadow-md transition m-4">
                    <h2 className="font-medium text-xl">Reverse Engineering</h2>
                    <p className="text-slate/70">Analyze compiled code to find hidden information.</p>
                </div>
                <div className="rounded-xl cursor-pointer flex flex-col gap-2 bg-background p-4 border border-slate/30 shadow hover:shadow-md transition m-4">
                    <h2 className="font-medium text-xl">Forensics</h2>
                    <p className="text-slate/70">Analyze digital evidence and solve forensic challenges.</p>
                </div>
            </div>
        </section>
    </main>
}
