import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";

const GptSearch = ()=>{
    return <div className="w-screen">
        <div className="absolute -z-10">
                <img className=" opacity-90 blur-[1px] " src="https://assets.nflxext.com/ffe/siteui/vlv3/20bf1f4d-1c73-48fd-8689-310d6dd80efc/81bdc063-cb8f-4afe-8a02-a3131ca4ef5e/IN-en-20240812-POP_SIGNUP_TWO_WEEKS-perspective_WEB_7998f3b6-63e3-424a-8328-550cf777ddce_small.jpg" alt="back-img" />
            </div>
        <GptSearchBar />
        <GptMovieSuggestion />
    </div>
}
export default GptSearch;