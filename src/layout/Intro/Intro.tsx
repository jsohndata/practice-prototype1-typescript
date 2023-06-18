
interface IntroProps {
  message: string;
}

const Intro = ({ message }: IntroProps) => {

  return (
    <>
      <h1>{message}</h1>
    </>
  );
}

export default Intro;