
const VedioTitle = ({title, overview})=>{

    return <div className="w-screen aspect-video px-20 pt-64 absolute bg-gradient-to-r from-black opacity-70">
        <h1 className="text-6xl w-1/4 font-bold text-white my-6">{title}</h1>
        <p className="text-lg w-2/5 my-7 text-white">{overview}</p>
        <div>
            <button className="w-28 rounded-lg bg-white bg-opacity-100 text-black font-bold px-6 py-3 mx-3 shadow-xl transition-all transform hover:scale-95 hover:opacity-75">▶️Play</button>
            <button className="rounded-lg bg-gray-600 bg-opacity-50 text-white font-bold px-6 py-3 mx-3 shadow-xl hover:bg-gray-500 transition-all transform hover:scale-95">ℹ️ More Info</button>
        </div>
        
    </div>
}

export default VedioTitle;