import './card.css'

type CardProps = {
  title: string;
  description: string;
  image?: string;
  children?: React.ReactNode;
};

function Card({ title, description, children }: CardProps) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      {children}
    </div>
  );
}

export default Card;
