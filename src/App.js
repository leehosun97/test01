import Header from "./html_area/Header";
import DayList from "./componet02/DayList";
import Day from "./componet02/Day";
import EmptyPage from "./componet02/EmptyPage";
import CreateWord from "./componet02/CreateWord";
import CreateDay from "./componet02/CreateDay";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<DayList />} />
          <Route path="/day/:day" element={<Day />} />
          <Route path="*" element={<EmptyPage />} />
          <Route path="/create_word" element={<CreateWord/>} />
          <Route path="/create_day" element={<CreateDay/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;