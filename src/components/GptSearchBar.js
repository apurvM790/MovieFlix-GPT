import { FaSearchengin } from "react-icons/fa6";

const GptSearchBar = ()=>{

    const handleButtonClick=()=>{

    }
    
    return <div className="pt-[10%] flex justify-center">
        <form className="w-1/2 bg-transparent bg-slate-900 rounded-lg bg-opacity-70 
        m-4 grid grid-cols-12" onSubmit={(e)=>e.preventDefault()}>
            <input type="text" className="col-span-9  font-bold border-2 shadow-2xl shadow-stone-100 rounded-lg px-3 py-2 m-3" 
            placeholder="What Would You Like To Watch Today...!"/>
            <button className="font-bold text-lg col-span-3 pl-10 py-2 m-3 shadow-2xl shadow-stone-100 flex gap-4 bg-red-700 rounded-lg text-white"
            onClick={handleButtonClick}>Search <FaSearchengin className="text-3xl text-black animate-pulse"/></button>
        </form>
    </div>
}
export default GptSearchBar;