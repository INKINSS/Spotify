import { AiOutlineCopyrightCircle } from 'react-icons/ai'

const CreditsFooter = () => {
    return (
        <section className='flex justify-between pt-10 px-10 pb-24'>
            <div className='flex gap-x-4 text-sm'>
                <h3 className='text-neutral-400 hover:text-neutral-100'>Legal</h3>
                <h3 className='text-neutral-400 hover:text-neutral-100'>Centro de privacidad</h3>
                <h3 className='text-neutral-400 hover:text-neutral-100'>Política de Privacidad</h3>
                <h3 className='text-neutral-400 hover:text-neutral-100'>Cookies</h3>
                <h3 className='text-neutral-400 hover:text-neutral-100'>Sobre los anuncios</h3>
                <h3 className='text-neutral-400 hover:text-neutral-100'>Accesibilidad</h3>
            </div>
            <div className='flex items-center'>
                <div><AiOutlineCopyrightCircle /></div>
                <h3 className='text-neutral-400'>2023 Spotify AB</h3>
            </div>  
        </section>
    )
}

export default CreditsFooter
