import { CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, description, imageUrl, children }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md">
      <img src={imageUrl} alt={title} className="w-32 h-32 object-cover rounded-full mb-4" />
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      {children}
    </div>
  );
};

export default Card;
