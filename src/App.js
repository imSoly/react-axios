import React, { useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const url = "http://4df8-222-234-150-89.ngrok.io/api";

  useEffect(() => {
    axios
      .get(url, {
        // 데이터 전송
        params: {
          id: 123,
        },
      })
      // get 요청 성공 시 run
      .then(function (response) {
        console.log(response.data);
      })
      // get 요청 실패 시 run
      .catch(function (error) {
        console.log("실패");
      })
      // // get 요청 성공실패 상관 없이 끝나면 run
      .then(function () {
        console.log("end");
      });

    // 앱 릴로드 됐다고 알려주는 부분
    console.log("reload");
  }, []);

  return <div className="App">console 확인</div>;
}

export default App;
