import malacates from '../images/malacates.webp'
import edsheran from '../images/edsheran.webp'
import davidGuetta from '../images/davidGuetta.webp'
import switchfoot from '../images/switchfoot.webp'
import mashmellow from '../images/mashmellow.webp'

const SongForAll = () => {

    const songForAllWorld = [
        {
            'banner': malacates,
            'tittle': 'En Guatemala',
            'artist': 'Malacates, viento en contra, Taylor Swift'
        },{
            'banner': edsheran,
            'tittle': 'escuchado hoy',
            'artist': 'Marshmellow, Calvin Harrys, David Guetta'
        },{
            'banner': davidGuetta,
            'tittle': 'rock más popular',
            'artist': 'David Guetta, ACDC, Metallica'
        },{
            'banner': switchfoot,
            'tittle': 'música en inglés',
            'artist': 'TobyMac, Royal Tailor, Gods not dead'
        },{
            'banner': mashmellow,
            'tittle': 'Dj más popular',
            'artist': 'avicci, skrillex, imagine Dragons'
        }]

    return (
        <section>
            <div className='flex justify-between items-center mx-5'>
                <h2 className='font-bold text-2xl mt-5 mx-5 hover:underline'>Estaciones Populares</h2>
                <h3 className='font-bold text-sm text-neutral-500 hover:underline'>mostrar todo</h3>
            </div>
            <div className='flex items-center group gap-x-5 mx-5 mt-5'>
                {songForAllWorld.map((items, index) => (
                    <div className='bg-neutral-900 px-4 py-4 rounded-lg hover:bg-neutral-800 transition duration-300' key={index}>
                        <div className='w-[150px] h-[150px] relative group'>
                            <button className="bg-green-600 rounded-full absolute p-2 text-center right-0 bottom-0 m-2 hover:scale-105 hover:bg-green-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                                </svg>
                            </button>
                            <img src={items.banner} alt="banner" />
                        </div>
                        <div>
                            <h2 className='font-bold text-white pt-5'>{items.tittle}</h2>
                            <h3 className='font-normal text-neutral-500'>{items.artist}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default SongForAll
