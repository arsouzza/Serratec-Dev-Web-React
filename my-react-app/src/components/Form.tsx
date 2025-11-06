import { useState } from "react";
import type{ FormEvent } from "react";


export interface FormData {
    title: string;
    body: string;
}


interface FormProps {
    onSubmit: (data: FormData) => void;
}


export default function Form({ onSubmit }: FormProps) {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");


    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onSubmit({ title, body });
        setTitle("");
        setBody("");
    };


    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto">
            <input
                className="border rounded p-2"
                type="text"
                placeholder="Título"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                className="border rounded p-2"
                placeholder="Conteúdo"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                required
            />
            <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
                Enviar
            </button>
        </form>
    );
}