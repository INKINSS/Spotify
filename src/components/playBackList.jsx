import Album from "./album"
import Controllers from "./controllers"
import Play from "./play"

const PlayBackList = () => {
    return (
        <section className="w-full absolute bottom-0 h-[16%] text-white flex justify-between px-5 bg-black">
            <Album />
            <Play />
            <Controllers />
        </section>
    )
}

export default PlayBackList
