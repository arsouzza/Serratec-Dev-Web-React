interface CardProps {
  title: string;
  body: string;
}

export default function Card({ title, body }: CardProps) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-md p-5 hover:shadow-xl hover:border-blue-500 transition-all duration-300">
      <h2 className="text-xl font-bold text-blue-400 mb-2">{title}</h2>
      <p className="text-gray-300 text-sm leading-relaxed">{body}</p>
    </div>
  );
}
