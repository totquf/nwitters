import { HashRouter as Router , Route, Switch } from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";

const AppRouter = ({isLoggedIn}) => { //부모 컴포넌트로부터 받은 isLoggedIn를 사용선언
    return(
        <Router>
            <Switch>
                {isLoggedIn ? ( //isLoggedIn값이 참일경우
                    <Route exact path="/">
                        <Home />
                    </Route>
                ):( //isLoggedIn값이 거짓일경우
                    <Route exact path="/">
                        <Auth />
                    </Route>
                )}
            </Switch>
        </Router>
    );
};

export default AppRouter;