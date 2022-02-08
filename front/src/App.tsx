import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/HomeOverview";
import { HomeCompany } from "./pages/HomeCompany";
import { AssetPage } from "./pages/AssetPage";
import "./style/global.scss";


function App() {
  return (

    <Router>
        <Routes>
          <Route path="/" element={<HomeCompany />} />
          <Route path="/overview/:id" element={<Home />} />
          <Route path="/assetPage/:id" element={<AssetPage />} />
          <Route path="*" element={<h1>Ops.. 404</h1>} />
        </Routes>
    </Router>

  );
}

export default App;
