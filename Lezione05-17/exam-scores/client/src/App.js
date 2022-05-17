import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { ExamScores } from './ExamScores';
import ExamForm from './ExamForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import API from './API';

function App() {
  const [exams, setExams] = useState([]); //modifica 1
  useEffect(()=>{
    API.getAllExams()
    .then((exams)=>setExams(exams))
    .catch(err=>console.log(err))
  },[])

  function deleteExam(code) {
    // setExams(...)   // remove exam
    setExams( exams.filter( (e)=> e.code !== code ) );
  }

  function addExam(exam) {
    setExams( oldExams => [...oldExams, exam] );
  }

  function updateExam(exam) {
    setExams(exams => exams.map(
      e => (e.code === exam.code) ? Object.assign({}, exam) : e
    ));
  }


  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<ExamScores exams={exams} deleteExam={deleteExam} />} />
        <Route path='/add' element={<ExamForm exams={exams} addExam={addExam} />} />
        <Route path='/edit/:examId' element={<ExamForm addExam={updateExam} exams={exams} />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
