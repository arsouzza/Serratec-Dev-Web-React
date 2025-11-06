import { useState } from "react";
import Form from "../components/Form";
import type { FormData } from "../components/Form";



export default function Create() {
    const [message, setMessage] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);


    const handleSubmit = (data: FormData) => {
        setLoading(true);
        setMessage("Enviando...");


        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => {
                if (!res.ok) throw new Error("Erro ao enviar os dados");
                return res.json();
            })
            .then((json) => {
                setMessage("Cadastro realizado com sucesso!");
            })
            .catch((err: Error) => setMessage(err.message))
            .finally(() => setLoading(false));
    };


    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Cadastrar Novo Post</h2>
            <Form onSubmit={handleSubmit} />
            {loading && <p>Enviando...</p>}
            {message && <p className="mt-4 text-blue-600">{message}</p>}
        </div>
    );
}