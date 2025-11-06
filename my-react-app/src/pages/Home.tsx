import { useEffect, useState } from "react";
import Card from "../components/Card";

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=9")
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao buscar posts");
        return res.json();
      })
      .then((data) => setPosts(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-blue-400 mb-6">
        Lista de Posts
      </h1>

      {loading && <p className="text-center text-gray-400">Carregando...</p>}
      {error && <p className="text-center text-red-400">{error}</p>}

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {posts.map((post) => (
          <Card key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    </div>
  );
}
