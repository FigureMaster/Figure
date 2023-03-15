import React from "react";
import './App.css';
import { Select } from './components/common/select/Select';

const App = () => (
  <>
    <h1>React without CRA...</h1>
    <Select label={"테스트"} value={"테스트"} options={[{label:"test11", value:"test"}]} onChange={function (): void {
      throw new Error("Function not implemented.");
    } }></Select>
  </>
);

export default App;