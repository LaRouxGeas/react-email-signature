import './App.css';

function App() {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <main className="max-w-3xl bg-cyan-500 px-10 py-5 rounded-lg space-y-2 border-2 border-black">
                <div className="">
                    <label htmlFor="">Nome do Colaborador:</label>
                    <input className="" type="text" />
                </div>
                <div>
                    <label htmlFor="">Cargo do Colaborador:</label>
                    <input className="" type="text" />
                </div>
                <div>
                    <label htmlFor="">Telefone do Colaborador:</label>
                    <input className="" type="text" />
                </div>
                <div>
                    <label htmlFor="">Email do Colaborador:</label>
                    <input className="" type="text" />
                </div>
                <div>
                    <label htmlFor="">Site:</label>
                    <input className="" type="text" />
                </div>
            </main>
        </div>
    );
}

export default App;
