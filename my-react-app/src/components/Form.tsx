interface FormProps {
  onSubmit: (title: string, body: string) => void;
}

export default function Form({ onSubmit }: FormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const title = (form.elements.namedItem("title") as HTMLInputElement).value;
    const body = (form.elements.namedItem("body") as HTMLInputElement).value;
    onSubmit(title, body);
    form.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-900 border border-gray-800 rounded-2xl p-6 max-w-md mx-auto shadow-lg space-y-4"
    >
      <h2 className="text-2xl font-semibold text-center text-blue-400">
        Criar Novo Post
      </h2>

      <input
        name="title"
        placeholder="Título"
        className="w-full bg-gray-800 border border-gray-700 rounded-lg p-2 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"
        required
      />

      <textarea
        name="body"
        placeholder="Conteúdo"
        rows={4}
        className="w-full bg-gray-800 border border-gray-700 rounded-lg p-2 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"
        required
      />

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg py-2 transition duration-200"
      >
        Enviar
      </button>
    </form>
  );
}
