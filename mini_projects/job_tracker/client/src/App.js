import './App.css';
import './dashboard.css';
import Dashboard from './views/Dashboard';
import {Route, Routes} from "react-router-dom";
import CreatePage from './views/CreatePage';
import DetailsPage from './views/DetailsPage';
import EditPage from './views/EditPage';


function App() {
  return (
    <div className="app_container">
      <h1> Jobs Board </h1>

      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/jobs/new" element={<CreatePage/>} />
        <Route path="/jobs/:id" element={<DetailsPage/>} />
        <Route path="/jobs/edit/:id" element={<EditPage/>} />
      </Routes>

    </div>
  );
}

export default App;
