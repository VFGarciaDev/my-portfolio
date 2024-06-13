import ProfilePicture from '@/assets/images/profile-picture.png'

export const Home = () => {

    return (
        <main className="container h-[80vh] grid grid-cols-2 justify-items-center items-center">
            <div className="flex flex-col items-center">
                <h3 className='text-2xl'>Olá, Seja Bem-Vindo(a)!! Me chamo</h3>
                <h1 className='text-5xl mb-4'>Victor Feitosa Garcia</h1>
                <h2 className='text-3xl'>Desenvolvedor Front-End</h2>
                <p className='text-xl text-center mt-8 px-10'>Eu gosto de desenvolver sites responsivos, com um visual limpo e organizado. Além de sempre tentar tornar tudo mais otimizado</p>
            </div>
            <div className="">
                <img src={ProfilePicture} alt="Profile Picture" />
            </div>
        </main>
    )
}