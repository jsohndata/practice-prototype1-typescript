import Banner from "../layout/Banner";
import AppLayout from "../layout/AppLayout";
import Portfolio from "../layout/Portfolio/Portfolio";

const Home = () => {
  
  return (
    <AppLayout>
      <Banner
        title="This is a title for Banner"
        quantity={10} />
      <h1>This is Home</h1>
      <Portfolio
        title="This is a title for Portfolio"
        quantity={100} />
    </AppLayout>
  );
}

export default Home;