import { useEffect, useState } from "react";
import Card from "../components/Card";


interface Post {
    id: number;
    title: string;
    body: string;
}


export default function Home() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);


    useEffect(() => {
        setLoading(true);
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=6")
            .then((res) => {
                if (!res.ok) throw new Error("Erro ao buscar dados");
                return res.json();
            })
            .then((data: Post[]) => setPosts(data))
            .catch((err: Error) => setError(err.message))
            .finally(() => setLoading(false));
    }, []);


    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Posts Recentes</h2>
            {loading && <p>Carregando...</p>}
            {error && <p className="text-red-500">{error}</p>}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                    <Card key={post.id} title={post.title} body={post.body} />
                ))}
            </div>
        </div>
    );
}