import { BrowserRouter } from "react-router-dom";
import Footer from "./app/layout/footer";
import Header from "./app/layout/header";
import Main from "./app/layout/main";


function App() {
  return (
    <BrowserRouter>
  <Header />
  <Main />
  <Footer />
  </BrowserRouter>

  );
}

export default App;
