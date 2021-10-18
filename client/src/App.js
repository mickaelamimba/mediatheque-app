
import{ Route, Switch} from 'react-router-dom'

import Layout from "./component/Lyaout/Layout";
import PageToAddBook from "./pages/PageToAddBook";
import PageCatalogueBook from "./pages/PageCatalogueBook";
import PageUserManagement from "./pages/PageUserManagement";
import {OpenModalProvider} from "./context/OpenModalContext";





function App() {



  return (
        <OpenModalProvider>
          <Layout>
            <Switch>
              <Route exact path="/">

                <PageCatalogueBook/>
              </Route>
              <Route path="/ajouter-un-livre">
                <PageToAddBook/>
              </Route>
              <Route path="/gestions-utilisateurs">

                <PageUserManagement/>



              </Route>

            </Switch>

          </Layout>
        </OpenModalProvider>

  );
}

export default App;
