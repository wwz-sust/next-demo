export default function Feedback(){
    return (
        <>
        <section className="min-h-screen flex flex-col justify-center items-center">
            <h2 className=" text-xl">Feedback</h2>
            <form 
            className="bg-slate-200 w-80 p-6 rounded-xl space-y-2" 
            action="/api/feedback" 
            method="POST">
                <input 
                    type="text" 
                    name="name" 
                    className="border-2 border-rose-600 rounded-lg min-w-full h-10" 
                    placeholder="Name"/><br />
                <input 
                    type="email" 
                    name="email" 
                    className="border-2 border-rose-600 rounded-lg min-w-full h-10" 
                    placeholder="Email"/><br />
                <textarea 
                    name="message" 
                    rows={10} 
                    className="border-2 border-rose-500 rounded-lg min-w-full"
                    placeholder="Message"></textarea><br />
                <input type="submit" value="Submit" className=" bg-green-600 rounded-xl min-w-full h-10 text-white"/>
            </form>
        </section>
        </>
    )
}