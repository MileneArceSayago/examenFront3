function Card({petName, petAge, petColor, vet}) {
  return (
    <>
      <h2>Tu amigo {petName} de {petAge} años y de color {petColor}</h2>
      <h3>fue registrado con éxito para el Vet {vet}!</h3>
    </>
  );
}

export default Card;