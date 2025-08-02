import "./SauceList.css";
function SauceList({ sauces = [] }) {
  const sauceDescriptions = {
    "Alla Puttanesca": 'molho à base de tomates, aliche, alcaparras, azeitonas sem caroço, alho e pimenta vermelha.',
    "Al Pesto di Basilico": 'molho a base manjericão, inclui azeite de oliva extravirgem, queijo pecorino romano, queijo grana padano, pinoli, alho, sal.',
    "Cacio e Pepe": 'molho brilhante composto por pimenta-do-reino e queijo Pecorino Romano.',
    "Alla Matriciana": 'tomates, guanciale (bochecha de porco curada), queijo pecorino romano , pimenta-do-reino, azeite extra virgem , vinho branco seco e sal.',
  };

  if (!sauces.length) {
    return null;
  }
  return (
    <div className="SauceList">
      <h4>Molhos:</h4>
      <ul>
        {sauces.map((sauce) => (
          <li key={sauce}>
            <strong>{sauce}</strong>: {sauceDescriptions[sauce] || 'Sem descrição'}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default SauceList;