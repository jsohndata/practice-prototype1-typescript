
interface BannerProps {
  title: string;
  quantity: number;
}

const Banner = ({ title, quantity }: BannerProps) => {

  return (
    <>
      <h2>Banner Title: {title}</h2>
      <p>How much Banner? {quantity} times!</p>
    </>
  );
}

export default Banner;