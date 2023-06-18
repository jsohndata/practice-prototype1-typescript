interface PortfolioProps {
  title: string;
  quantity: number;
}

const Portfolio = ({ title, quantity }: PortfolioProps) => {

  return (
    <>
      <h2>{title}</h2>
      <p>{quantity}</p>
    </>
  );
}

export default Portfolio;