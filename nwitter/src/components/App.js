import { useState } from "react";
import AppRouter from "./Router";
import { authService } from "fbase";

function App() {

  const [isLoggedIn,setisLoggedIn] = useState(authService.currentUser);
  //authService모듈안에 있는 currentUser함수를 통해 로그인 검사할것. 비어있으면 null을 출력
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn}/>
      {/*자식 컴포넌트에 isLoggedIn을 프롭스로 전달*/}
      <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
    </>
  );
}

export default App;
