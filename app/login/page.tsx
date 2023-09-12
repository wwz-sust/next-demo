export default function Login(){
    return (
        <main className="flex flex-col justify-center items-center min-h-screen">
            <h2>Login</h2>
            <section className="max-w-xl space-y-10 p-5 bg-gray-400">
                <input type="text" className=" w-60 border-2 border-rose-400 rounded-xl h-10"/><br />
                <input type="password" className="border-2 border-rose-800 rounded-xl h-10 min-w-full"/><br />
                <button>Login</button>
            </section>
        </main>
    )
}
