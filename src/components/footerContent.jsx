import { BsFacebook } from 'react-icons/bs'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'
import CreditsFooter from './creditsFooter'

const FooterContent = () => {
    return (
        <>
            <section className="py-20 mx-10 border-b border-gray-400 flex justify-between">
                <div className="flex w-2/3">
                    <div className="w-1/3">
                        <div className="font-bold">Compañia</div>
                        <div className="text-neutral-500 font-normal hover:text-neutral-200 hover:underline">Acerca de</div>
                        <div className="text-neutral-500 font-normal hover:text-neutral-200 hover:underline">Empleo</div>
                        <div className="text-neutral-500 font-normal hover:text-neutral-200 hover:underline">For the Record</div>
                    </div>
                    <div className="w-1/3">
                        <div className="font-bold">Comunidades</div>
                        <div className="text-neutral-500 font-normal hover:text-neutral-200 hover:underline">Para artistas</div>
                        <div className="text-neutral-500 font-normal hover:text-neutral-200 hover:underline">Desarrolladores</div>
                        <div className="text-neutral-500 font-normal hover:text-neutral-200 hover:underline">Publicidad</div>
                        <div className="text-neutral-500 font-normal hover:text-neutral-200 hover:underline">Inversionistas</div>
                        <div className="text-neutral-500 font-normal hover:text-neutral-200 hover:underline">Proveedores</div>
                    </div>
                    <div className="w-1/3">
                        <div className="font-bold">Enlaces útiles</div>
                        <div className="text-neutral-500 font-normal hover:text-neutral-200 hover:underline"> Ayuda</div>
                        <div className="text-neutral-500 font-normal hover:text-neutral-200 hover:underline">App móvil gratis</div>
                    </div>
                </div>
                <div className='flex gap-x-5'>
                    <div className='h-12 w-12 bg-neutral-800 rounded-full flex items-center justify-center'><AiOutlineInstagram /></div>
                    <div className='h-12 w-12 bg-neutral-800 rounded-full flex items-center justify-center'><AiFillTwitterCircle /></div>
                    <div className='h-12 w-12 bg-neutral-800 rounded-full flex items-center justify-center'><BsFacebook /></div>
                </div>
            </section>
            <CreditsFooter />
        </>

    )
}

export default FooterContent
