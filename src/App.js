import "react-toastify/dist/ReactToastify.css";

import { AnimatePresence } from "framer-motion";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import About from "views/About";
import Feature from "views/Feature";
import Footer from "components/footer";
import Header from "components/header";
import Home from "views/Home";
import InPlay from "views/InPlay";
import Logout from "views/Logout";
import NotFound from "views/NotFound";
import Play from "views/Play";
import Pricing from "views/Pricing";
import ProtectedRoute from "components/protectedRoute";
import Testimonial from "views/Testimonial";
import useDarkMode from "hooks/useDarkMode";

function App() {
  useDarkMode();
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <ToastContainer position="top-right" />
      <Header />
      <main className="dark:bg-black-500">
        <Switch location={location} key={location.pathname}>
          <Route path="/play" component={Play} />
          <Route path="/logout" component={Logout} />
          <ProtectedRoute path="/in-play" component={InPlay} />
          <Route path="/testimonial" component={Testimonial} />
          <Route path="/about" component={About} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/feature" component={Feature} />
          <Route path="/" exact component={Home} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </main>
      <Footer />
    </AnimatePresence>
  );
}

export default App;
