import Banner from "../layout/Banner";
import AppLayout from "../layout/AppLayout";

const Home = () => {
  
  return (
    <AppLayout>
      <Banner
        title="This is a title for Banner"
        quantity={10} />
      <h1>This is Home</h1>
    </AppLayout>
  );
}

export default Home;