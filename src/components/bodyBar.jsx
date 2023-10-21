

const BodyBar = () => {
    return (
        <section className="bg-neutral-900 m-2 rounded-lg w-full h-[64%]">
            <section className="flex items-center justify-between px-7 pt-3">
                <div className="flex">
                    <svg className="mx-2" fill="gray" width="25px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7 3h2v18H7zM4 3h2v18H4zm6 0h2v18h-2zm9.062 17.792-6.223-16.89 1.877-.692 6.223 16.89z" /></svg>
                    <h2 className="text-neutral-400 font-bold w-full hover:text-white transition duration-300">Tu bilioteca</h2>
                </div>
                <div>
                    <div className="flex">
                        <svg className="rounded-full hover:bg-neutral-800" width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 12H18M12 6V18" stroke="gray" /></svg>
                        <svg className="rounded-full hover:bg-neutral-800" width="35px" height="35px" fill="white" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g id="Layer_6" data-name="Layer 6"><path d="m40.8 18.68-2.12 2.12 9.7 9.7h-36.38v3h36.38l-9.7 9.7 2.12 2.12 13.32-13.32z"></path></g></svg>
                    </div>
                </div>
            </section>
            <h2 className="my-5 px-8 text-neutral-200 font-medium w-full hover:text-white transition duration-300">Playlist</h2>
            <section className="flex justify-between">
                <svg className="mx-5" fill="gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="25px" height="25px"><path d="M 20.5 6 C 12.509634 6 6 12.50964 6 20.5 C 6 28.49036 12.509634 35 20.5 35 C 23.956359 35 27.133709 33.779044 29.628906 31.75 L 39.439453 41.560547 A 1.50015 1.50015 0 1 0 41.560547 39.439453 L 31.75 29.628906 C 33.779044 27.133709 35 23.956357 35 20.5 C 35 12.50964 28.490366 6 20.5 6 z M 20.5 9 C 26.869047 9 32 14.130957 32 20.5 C 32 23.602612 30.776198 26.405717 28.791016 28.470703 A 1.50015 1.50015 0 0 0 28.470703 28.791016 C 26.405717 30.776199 23.602614 32 20.5 32 C 14.130953 32 9 26.869043 9 20.5 C 9 14.130957 14.130953 9 20.5 9 z" /></svg>
                <div className="flex px-5 items-center hover:scale-105">
                    <h2 className="text-neutral-400 font-normal w-full transition duration-300">Recientes</h2>
                    <svg fill="gray" height="25px" width="25px" id="Editable-line" version="1.1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><circle cx="5" cy="6" fill="none" id="XMLID_303_" r="1" stroke="gray" /><circle cx="5" cy="16" fill="none" id="XMLID_305_" r="1" stroke="gray" /><circle cx="5" cy="26" fill="none" id="XMLID_304_" r="1" stroke="gray" /><line fill="none" id="XMLID_29_" stroke="gray" x1="10" x2="28" y1="6" y2="6" /><line fill="none" id="XMLID_30_" stroke="gray" x1="10" x2="28" y1="16" y2="16" /><line fill="none" id="XMLID_31_" stroke="gray" x1="10" x2="28" y1="26" y2="26" /></svg>
                </div>
            </section>
            <section className="items-center flex mt-3 px-3 hover:bg-neutral-800 rounded-lg m-2">
                <div className=" my-2 w-12 h-12 flex items-center justify-center bg-gradient-to-tl from-slate-300 to-indigo-600  rounded">
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#000000" />
                    </svg>
                </div>
                <div className="px-3">
                    <h2 className="text-white font-normal w-full transition duration-300">Tus me gusta</h2>
                    <h3 className="text-neutral-400 font-normal w-full transition duration-300">Playlist 2 canciones</h3>
                </div>
            </section>

            <section className="items-center flex px-3 hover:bg-neutral-800 rounded-lg m-2">
                <div className="w-12 h-12 my-1 flex items-center justify-center bg-neutral-700 rounded">
                    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 8.2C3 7.07989 3 6.51984 3.21799 6.09202C3.40973 5.71569 3.71569 5.40973 4.09202 5.21799C4.51984 5 5.0799 5 6.2 5H9.67452C10.1637 5 10.4083 5 10.6385 5.05526C10.8425 5.10425 11.0376 5.18506 11.2166 5.29472C11.4184 5.4184 11.5914 5.59135 11.9373 5.93726L12.0627 6.06274C12.4086 6.40865 12.5816 6.5816 12.7834 6.70528C12.9624 6.81494 13.1575 6.89575 13.3615 6.94474C13.5917 7 13.8363 7 14.3255 7H17.8C18.9201 7 19.4802 7 19.908 7.21799C20.2843 7.40973 20.5903 7.71569 20.782 8.09202C21 8.51984 21 9.0799 21 10.2V15.8C21 16.9201 21 17.4802 20.782 17.908C20.5903 18.2843 20.2843 18.5903 19.908 18.782C19.4802 19 18.9201 19 17.8 19H6.2C5.07989 19 4.51984 19 4.09202 18.782C3.71569 18.5903 3.40973 18.2843 3.21799 17.908C3 17.4802 3 16.9201 3 15.8V8.2Z" stroke="white" />
                    </svg>
                </div>
                <div className="px-3">
                    <h2 className="text-white font-normal w-full transition duration-300">Nueva Carpeta</h2>
                    <h3 className="text-neutral-400 font-normal w-full transition duration-300">1 Playlist</h3>
                </div>
            </section>
        </section>
    )
}

export default BodyBar
