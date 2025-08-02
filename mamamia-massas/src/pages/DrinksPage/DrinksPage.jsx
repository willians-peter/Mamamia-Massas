import "./DrinksPage.css";
import PageSection from "../../components/PageSection/PageSection";

function DrinksPage() {
  return (
    <PageSection id="drinks" title="Bebidas" className="DrinksPage">
      <div className="RichText drinks-columns">
        <div>
          <strong>Não Alcoólicas:</strong>
          <ul>
            <li>Água - R$ 3,00</li>
            <li>Água com gás - R$ 4,00</li>
            <li>Água Tônica - R$ 5,00</li>
          </ul>
          <strong>Sucos:</strong>
          <ul>
            <li>Morango - R$ 8,00</li>
            <li>Laranja - R$ 8,00</li>
            <li>Uva - R$ 8,00</li>
          </ul>
        </div>
        <div>
          <strong>Refrigerantes:</strong>
          <ul>
            <li>Coca-Cola - R$ 7,00</li>
            <li>Guaraná - R$ 6,00</li>
            <li>Sprite - R$ 6,00</li>
          </ul>
          <strong>Alcoólicas:</strong>
          <ul>
            <li>Vinho tinto (taça) - R$ 15,00</li>
            <li>Vinho tinto (garrafa) - R$ 80,00</li>
            <li>Vinho branco (garrafa) - R$ 80,00</li>
          </ul>
        </div>
      </div>
    </PageSection>
  );
}
export default DrinksPage;
