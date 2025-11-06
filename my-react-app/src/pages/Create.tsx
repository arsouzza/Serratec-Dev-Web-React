import { useState } from "react";
import Form from "../components/Form";

export default function Create() {
  const [message, setMessage] = useState("");

  const handleSubmit = (title: string, body: string) => {
    setMessage("");
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, body }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao enviar o post");
        return res.json();
      })
      .then((json) => {
        setMessage(`✅ Post criado com sucesso! ID: ${json.id}`);
      })
      .catch(() => setMessage("❌ Falha ao criar o post."));
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-6">
      <Form onSubmit={handleSubmit} />
      {message && <p className="text-center text-sm mt-4 text-blue-400">{message}</p>}
    </div>
  );
}
