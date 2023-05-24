import App from "../App";

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={App} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;