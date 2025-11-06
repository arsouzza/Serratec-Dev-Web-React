interface CardProps {
    title: string;
    body: string;
}


export default function Card({ title, body }: CardProps) {
    return (
        <div className="border p-4 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-2">{title}</h3>
            <p>{body}</p>
        </div>
    );
}