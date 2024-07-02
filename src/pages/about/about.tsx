export const About = () => {

    return (
        <section className="flex flex-col items-start gap-5">
            <h1 className="text-3xl font-bold">Um pouco sobre mim...</h1>
            <div className="grid grid-cols-[60%_35%] justify-between">
                <p className="text-lg">
                    Meu nome é Victor Feitosa Garcia, tenho 24 anos e sou de São Paulo, Brasil. Formado em Jogos Digitais pela Universidade Estácio, sou apaixonado por tecnologia e especializado em Desenvolvimento Web Front-End, com habilidades em JavaScript, TypeScript, React e etc. Além de programar, gosto de jogar videogame, ver filmes e treinar Jiu-Jitsu, esporte que escolhi pelo desafio e autodefesa.
                    <span className="block mt-10 text-base">
                        Meu diferencial como programador é a constante vontade de aprender, resiliência frente a erros e capacidade de pedir ajuda. No ambiente de trabalho, valorizo respeito, boa comunicação, sinceridade e a vontade de ajudar. Busco alcançar sucesso profissional e independência financeira.
                    </span>
                </p>
                <p>Imagem</p>
            </div>
        </section>
    )
}