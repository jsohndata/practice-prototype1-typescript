import Intro from "./Intro";
import Footer from "./Footer";

const AppLayout = ({ children }: any) => {

  return (
    <>
      <Intro message="hi there" />
       {children}
      <Footer />
    </>
  );
}

export default AppLayout;