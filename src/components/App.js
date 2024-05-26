import '../styles/App.css'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import SelectProfile from './SelectProfile';
import StudentLogin from './StudentLogin';
import AdminLogin from './AdminLogin';
import AdminSignup from './AdminSignup';
import StudentSignup from './StudentSignup';
import CreateQuestions from './CreateQuestions';
import StartQuiz from './StartQuiz';
import Quiz from './Quiz'
import Result from './Result';
import Dummy from './Dummy';

function App() {

    return (
        <Router>
            <div>
                <Routes>
                    <Route exact path="/" element={<SelectProfile />} />

                    {/* Student Links */}
                    <Route exact path="/student/login" element={<StudentLogin />} />
                    <Route exact path="/student/signup" element={<StudentSignup />} />

                    {/* Admin Links */}
                    <Route exact path="/admin/login" element={<AdminLogin />} />
                    <Route exact path="/admin/signup" element={<AdminSignup />} />
                    <Route exact path="/admin/createquestion" element={<CreateQuestions />} />

                    {/* Other Components */}
                    <Route eaxat path='/startquiz' element={<StartQuiz />} />
                    <Route eaxat path='/quiz' element={<Quiz />} />
                    <Route eaxat path='/quiz/result' element={<Result />} />
                    <Route eaxat path='/dummy' element={<Dummy/>} />

                </Routes>
            </div>
        </Router>
    );
}

export default App;
