function Success({ selectedPizza }) {
  return (
    <div>
      <h1>Siparişiniz Alındı!</h1>
      <p>{selectedPizza?.name}</p>
    </div>
  );
}

export default Success;