export const About = () => {

    return (
        <section className="flex flex-col items-start gap-5">
            <h1 className="text-3xl font-bold">Um pouco sobre mim...</h1>
            <div className="grid grid-cols-[60%_35%] justify-between">
                <div>
                    <p className="text-lg">
                        Me chamo Victor Feitosa Garcia, tenho 24 anos e sou de São Paulo, Brasil. Formado em Jogos Digitais pela Universidade Estácio, sou apaixonado por tecnologia e focado em Desenvolvimento Web Front-End, com habilidades em JavaScript, TypeScript, React e etc.
                    </p>
                    <p className="text-lg mt-5">
                        Além de programar, gosto de jogar videogame, ver filmes e treinar Jiu-Jitsu, esporte que escolhi pelo desafio e autodefesa.
                        <span className="block mt-3 text-base">
                            Meu diferencial como programador é a constante vontade de aprender, resiliência frente a erros e capacidade de pedir ajuda. No ambiente de trabalho, valorizo respeito, boa comunicação, sinceridade e a vontade de ajudar. Busco alcançar sucesso profissional e independência financeira.
                        </span>
                    </p>
                </div>
                <p>Imagem</p>
            </div>
        </section>
    )
}