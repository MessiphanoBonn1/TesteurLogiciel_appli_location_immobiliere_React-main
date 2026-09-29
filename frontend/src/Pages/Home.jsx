import Banner from "../Components/Banner.jsx";
import Cards from "../Components/Cards.jsx";
import BannerImg from "../assets/images/banner.jpg";

function Home() {
  return (
    <>
      <Banner image={BannerImg} text="Chez vous, partout et ailleurs" />
      <Cards />
    </>
  );
}

export default Home;
