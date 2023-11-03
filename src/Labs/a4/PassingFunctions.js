function PassingFunctions({ theFunction }) {
  return (
    <>
      <h2>Passing Functions</h2>
      <button className="btn btn-primary" onClick={theFunction}>
        Invoke the Function
      </button>
    </>
  );
}
export default PassingFunctions;
