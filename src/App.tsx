import type { FC } from "react";
import Input from "./Input";

const App: FC = () => {
  return (
    <div className="container">
      <h1 className="title">Давайте составим ваш дуа</h1>
      <Input />
      <button className="btn">Продолжить</button>
    </div>
  );
};

export default App;
