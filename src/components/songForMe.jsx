import avicii from '../images/avicii.webp'
import imagineDragons from '../images/imagineDragons.webp'
import redimi2 from '../images/redimi2.webp'
import tobyMac from '../images/tobymac.webp'
import funky from '../images/funky.webp'

const SongForMe = () => {

    const songForMe = [
        {
            'banner': avicii,
            'tittle': 'mix diario 1',
            'artist': 'avicci, skrillex, imagine Dragons'
        },{
            'banner': imagineDragons,
            'tittle': 'mix diario 2',
            'artist': 'Marshmellow, Calvin Harrys, David Guetta'
        },{
            'banner': redimi2,
            'tittle': 'mix diario 3',
            'artist': 'Redimi2, Fonky, Nathan el profeta'
        },{
            'banner': tobyMac,
            'tittle': 'mix diario 4',
            'artist': 'TobyMac, Royal Tailor, Gods not dead'
        },{
            'banner': funky,
            'tittle': 'mix diario 5',
            'artist': 'Funky, Alex Zurdo, RubinskyRBK, Phillipe'
        }]

    return (
        <section>
            <div className='flex justify-between items-center mx-5'>
                <h2 className='font-bold text-2xl mt-5 mx-5 hover:underline'>Hecho para ti</h2>
                <h3 className='font-bold text-sm text-neutral-500 hover:underline'>mostrar todo</h3>
            </div>
            <div className='flex items-center group gap-x-5 mx-5 mt-5'>
                {songForMe.map((items, index) => (
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
                            <h2 className='font-bold text-white pt-5'>{items.tittle}</h2>
                            <h3 className='font-normal text-neutral-500'>{items.artist}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default SongForMe
