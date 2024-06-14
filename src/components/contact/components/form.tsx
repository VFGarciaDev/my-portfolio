import { useForm } from "react-hook-form"
import "./input.css"

const inputFields = [
    {
        idName: "nome",
        placeholder: "Nome Completo",
    },
    {
        type: "email",
        idName: "email",
        placeholder: "Seu E-mail",
    },
    {
        idName: "title",
        placeholder: "Assunto",
    }
]

const handleSubmitForm = (data: any) => {
    console.log(data)
}

export const ContactForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(handleSubmitForm)}>
            {
                inputFields.map(({ type = "text", idName, placeholder }, index) => (
                    <div key={index}>
                        <input type={type} id={idName} placeholder={placeholder} aria-invalid={errors[idName] ? "true" : "false"}
                            {...register(`${idName}`, {
                                required: "Campo obrigatório"
                            })}
                        />
                        {errors[idName] && <p role="alert">{errors[idName]?.message?.toString()}</p>}
                    </div>
                ))
            }
            <div>
                <textarea id="textBody" placeholder="Mensagem" aria-invalid={errors.textBody ? "true" : "false"}
                    {...register("textBody", {
                        required: "Campo Obrigatório"
                    })}
                />
                {errors.textBody && <p role="alert">{errors.textBody.message?.toString()}</p>}
            </div>
            <input type="submit" />
        </form>
    )
}