import BodyBar from "./bodyBar"
import HeadSideBar from "./headSideBar"

const SideBar = () => {
    return (
        <div className="w-[21%] h-screen fixed top-0 left-0">
            <HeadSideBar />
            <BodyBar />
        </div>
    )
}

export default SideBar
