import PageSection from "../../components/PageSection/PageSection";
import reataurantPhoto from "../../assets/fachada_restaurante.jpeg";
import "./HomePage.css";

function HomePage() {
  return (
    <PageSection id="home" title="Início" className="HomePage" hideTitle>
      <div className="left">
        <p>Servindo massas há mais de 70 anos!</p>
        <br />
        <p>Qualidade passada por gerações!</p>
      </div>
      <div className="right">
        <img src={reataurantPhoto} alt="Foto da fachada do restaurante" />
      </div>
    </PageSection>
  );
}

export default HomePage;
