import Route from "./components/Route";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import ButtonPage from "./pages/ButtonPage";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <Sidebar />

      <div className="col-span-5">
        <Route pathTo="/">
          <DropdownPage />
        </Route>
        <Route pathTo="/accordion">
          <AccordionPage />
        </Route>
        <Route pathTo="/buttons">
          <ButtonPage />
        </Route>
        <Route pathTo="/modal">
          <ModalPage />
        </Route>
        <Route pathTo="/table">
          <TablePage />
        </Route>
      </div>
    </div>
  );
};

export default App;
