import { useRef } from "react";
import { FaSearchengin } from "react-icons/fa6";
import { GET_OPTIONS } from "../utils/constants";

const MoviesSearch = ()=>{

    const searchValue = useRef(null);

    const handleButtonClick =async ()=>{
        const value = searchValue.current.value.split(" ")
        console.log(value);
        let st = "";
        if(value)
        {
            st +=value[0];
            for(let i=1;i<value.length;i++)
            {
                st+=value[i];
            }
            console.log(st);
            const data = await fetch('https://api.themoviedb.org/3/search/movie?api_key=fc8de25537d65ab0ebc3cc8a4216201c&query='+{st}, GET_OPTIONS);
            const json = await data.json();
            console.log(json);
        }
        else{
            <h1>Oops you put the wrong name...</h1>
        }
        // const data = await fetch()
        
    }
    

    return <div className="w-screen">
    <div className="absolute -z-10">
            <img className=" opacity-90 blur-[1px] " src="https://assets.nflxext.com/ffe/siteui/vlv3/20bf1f4d-1c73-48fd-8689-310d6dd80efc/81bdc063-cb8f-4afe-8a02-a3131ca4ef5e/IN-en-20240812-POP_SIGNUP_TWO_WEEKS-perspective_WEB_7998f3b6-63e3-424a-8328-550cf777ddce_small.jpg" alt="back-img" />
        </div>
        <div className="pt-[6%] flex justify-center">
        <form className="w-1/2 bg-transparent bg-slate-900 rounded-lg bg-opacity-70 
        m-4 grid grid-cols-12" onSubmit={(e)=>e.preventDefault()}>
            <input ref={searchValue} type="text" className="col-span-9  font-bold border-2 shadow-2xl shadow-stone-100 rounded-lg px-3 py-2 m-3" 
            placeholder="Search Movie By Name...!"/>
            <button className="font-bold text-lg col-span-3 pl-10 py-2 m-3 shadow-2xl shadow-stone-100 flex gap-4 bg-red-700 rounded-lg text-white"
            onClick={handleButtonClick}>Search <FaSearchengin className="text-3xl text-black animate-pulse"/></button>
        </form>
        </div>
        <div>

        </div>
    </div>
}
export default MoviesSearch;