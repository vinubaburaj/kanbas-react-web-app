import JavaScript from "./Javascript";
import PathParameters from "./PathParameters";
import DynamicStyling from "./DynamicStyling";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoList from "./todo/TodoList";

function Assignment3() {
  return (
    <div className="container">
      <h1>Assignment 3</h1>
      <TodoList />
      <ConditionalOutput />
      <Styles />
      <Classes />
      <PathParameters />
      <JavaScript />
      <DynamicStyling />
    </div>
  );
}

export default Assignment3;
