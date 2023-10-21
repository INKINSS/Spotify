import SongPrincipal from "./SongPrincipal"
import SongForMe from "./songForMe"
import HeaderContent from "./headerContent"
import SongForAll from "./songForAll"
import FooterContent from "./footerContent"

const Content = () => {
    return (
        <div className="w-[77%] h-[85%] text-white mr-2 mt-2 rounded-lg bg-gradient-to-t from-neutral-950 to-neutral-800 top-0 right-0 fixed overflow-x-auto">
            <HeaderContent />
            <SongPrincipal />
            <SongForMe />
            <SongForAll />
            <FooterContent />
        </div>
    )
}

export default Content
