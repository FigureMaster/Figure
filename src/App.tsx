import React from "react";
import './App.css';
import { Select } from './components/common/select/Select';
import { Routes, Route, Link } from 'react-router-dom'

const App = () => (
  <>
<Link to={"/"}>메인</Link>
<Link to={"/detail"}>상세화면</Link>
    
<Routes>
      <Route path="/" element={
        <>
            <h1>React without CRA...</h1>

            <Select label={"테스트"} value={"테스트"} options={[{label:"test11", value:"test"}]} onChange={function (): void {
              throw new Error("Function not implemented.");
            } }></Select>
        </>
      }/>
      <Route path="/detail" element={<div>상세페이지</div>}/>
      <Route path="/about" element={<div>어바웃페이지</div>}/>
    </Routes>
  </>
);

export default App;