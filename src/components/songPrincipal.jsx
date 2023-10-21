import OwlCity from '../images/OwlCity.webp'
import FiveForFifthing from '../images/FiveForFifthings.webp'

const SongPrincipal = () => {

    const card = [
        {
            'banner': OwlCity,
            'albumName': 'Ocean Eyes',
            'artist': 'Owl City'
        },
        {
            'banner': FiveForFifthing,
            'albumName': 'BookMarks',
            'artist': 'Five for Fifthings'
        }]

    return (
        <section>
            <h2 className='font-bold text-2xl mt-5 mx-5'>Escuchado recientemente</h2>
            <div className='flex items-center group gap-x-5 mx-5 mt-5'>
                {card.map((items, index) => (
                    <div className='bg-neutral-900 px-3 py-4 rounded-lg hover:bg-neutral-800 transition duration-300' key={index}>
                        <div className='w-[150px] h-[150px] relative group'>
                            <button className="bg-green-600 rounded-full absolute p-2 text-center right-0 bottom-0 m-2 hover:scale-105 hover:bg-green-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                                </svg>
                            </button>
                            <img src={items.banner} alt="banner" />
                        </div>
                        <div>
                            <h2 className='font-bold text-white mt-3'>{items.albumName}</h2>
                            <h3 className='font-normal text-neutral-500'>{items.artist}</h3>
                        </div>
                    </div>
                ))}
                <div className='bg-neutral-900 px-3 py-2 rounded-lg hover:bg-neutral-700 transition duration-300'>
                    <div className=" my-2 w-[150px] h-[150px] flex items-center justify-center bg-gradient-to-tl from-slate-300 to-indigo-600  rounded">
                        <svg width="80px" height="80px" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="none" />
                        </svg>
                    </div>
                    <h2 className='font-bold text-white pt-3'>Tus me gusta</h2>
                    <h3 className='font-normal text-neutral-500'>2 canciones</h3>
                </div>

            </div>
        </section>
    )
}

export default SongPrincipal
