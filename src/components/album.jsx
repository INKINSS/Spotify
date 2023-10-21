import album from '../../src/images/GoodTime.webp'

const Album = () => {
    return (
        <section className='flex'>
            <div className="flex justify-center items-center">
                <img className='rounded' src={album} alt="album" />
            </div>
            <div className='flex justify-center items-center px-5'>
                <div>
                    <button className="hover:underline block text-sm font-semibold">Good Time</button>
                    <button className='hover:underline block text-xs font-semibold text-neutral-400'>Owl City, Carly Rae Jepsen</button>
                </div>
                <div className='px-5'>
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="green" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#000000" />
                    </svg>
                </div>
            </div>
        </section>
    )
}

export default Album
