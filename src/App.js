import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductAll from "./Page/ProductAll";
import Login from "./Page/Login";

import Navbar from "./component/Navbar";
import React from "react";
import PrivateRoute from "./route/PrivateRoute";

//1.전체상품페이지, 로그인, 상품상세페이지
//1-1 navigation bar
//2. 전체 상품 페이지에서는 전체 상품을 볼 수 있다.
//3. 로그인 버튼을 누르면 로그인 페이지가 나온다.
//4. 상품디테일을 눌렀으나, 로그인이 안되있을 경우, 로그인 페이지가 나온다.
//5. 로그인이 되어있을 경우, 상품 디테일 페이지를 볼 수 있다.
//6. 로그아웃을 클릭하면 로그아웃이 된다.
//7. 로그아웃이되면 상품 디테일 페이지를 볼수 없다ㅣ. 다시 로그인 페이지가 보인다.
//8. 로그인을 하면 로그아웃이 보이고, 로그아웃을 하면 로그인이 보인다.
//9. 상품을 검색할수 있다.
function App() {
  const [authenticate, setAuthenticate] = useState(false); //true = login //false = logined yet
  useEffect(() => {
    console.log("login", authenticate);
  }, [authenticate]);
  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={
            <Login
              authenticate={authenticate}
              setAuthenticate={setAuthenticate}
            />
          }
        />
        <Route
          path="/product/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
