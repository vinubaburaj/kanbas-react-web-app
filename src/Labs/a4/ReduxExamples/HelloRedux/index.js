import { useSelector, useDispatch } from "react-redux";
function HelloRedux() {
  const { message } = useSelector((state) => state.helloReducer);
  return (
    <>
      <h1>Hello Redux</h1>
      <h2>{message}</h2>
    </>
  );
}
export default HelloRedux;