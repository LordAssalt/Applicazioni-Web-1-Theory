import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import dayjs from 'dayjs';
import { ExamScores } from './ExamScores';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ExamForm from './ExamForm';

const fakeExams = [
  { code: '01TYMOV', name: 'Information systems security', score: 30, date: dayjs('2022-02-01') },
  { code: '01SQJOV', name: 'Data Science and Database Technology', score: 21, date: dayjs('2021-06-15') },
  { code: '04GSPOV', name: 'Software Engineering', score: 26, date: dayjs('2022-06-04') },
  { code: '05TYJSJ', name: 'Information systems security 2', score: 28, date: dayjs('2022-01-20') },
  { code: '02GSGAS', name: 'Data Science and Database Technology 2', score: 25, date: dayjs('2021-02-10') },
  { code: '06GLLMA', name: 'Software Engineering 2', score: 27, date: dayjs('2022-03-01') }
];

function App() {
  const [exams, setExams] = useState(fakeExams);

  function addExam(exam) {
    setExams( oldExams => [...oldExams, exam] );
  }

  function updateExam(exam) {
    setExams(exams => exams.map(
      e => (e.code === exam.code) ? Object.assign({}, exam) : e
    ));
  }

  function deleteExam(code) {
    setExams( exams.filter( (e)=> e.code !== code ) );
  }

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<ExamScores exams={exams} deleteExam={deleteExam}/> } />
        <Route path='/add' element={<ExamForm addExam={addExam} />} />
        <Route path='/edit/:examId' element={<ExamForm addExam={updateExam} exams={exams} />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
