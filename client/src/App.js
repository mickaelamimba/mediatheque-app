
import{ Route, Switch} from 'react-router-dom'

import Layout from "./component/Lyaout/Layout";
import PageToAddBook from "./pages/PageToAddBook";
import PageCatalogueBook from "./pages/PageCatalogueBook";
import PageUserManagement from "./pages/PageUserManagement";
import {OpenModalProvider} from "./context/OpenModalContext";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./component/Login/Login";
import PageLoanBook from "./pages/PageLoanBook";
import Logout from "./component/Login/Logout";
import React from "react";
import Register from "./component/Register/Register";





function App() {



  return (
        <OpenModalProvider>
          <Layout>
            <Switch>
              <Route exact path="/">
                <PageCatalogueBook/>
              </Route>
                <Route  path="/login">
                    <Login/>
                </Route>
                <Route  path="/logout">
                    <Logout />
                </Route>
                <Route  path="/register">
                    <Register />
                </Route>

              <ProtectedRoute path="/ajouter-un-livre" component={PageToAddBook}/>
              <ProtectedRoute path="/gestions-utilisateurs" component={PageUserManagement}/>
              <ProtectedRoute path="/mes-livres" component={PageLoanBook}/>

            </Switch>

          </Layout>
        </OpenModalProvider>

  );
}

export default App;
