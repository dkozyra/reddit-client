import React, { useState } from "react";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [phrase, setPhrase] = useState();
  const onChangeHandler = (value) => {
    setPhrase(value);
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/*"
            element={
              <>
                <Header onChangeHandler={onChangeHandler} phrase={phrase} />
                <Home phrase={phrase} />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
