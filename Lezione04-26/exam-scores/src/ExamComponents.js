import { Table, Button, Form, Alert } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import dayjs from 'dayjs';
import { useState } from 'react';

function ExamScores(props) {
  return (
    <ExamTable exams={props.exams}></ExamTable>
  );
}

function ExamTable(props) {
  const [exams, setExams] = useState(props.exams);
  const [showForm, setShowForm] = useState(false);

  function deleteExam(code) {
    // setExams(...)   // remove exam
    setExams( exams.filter( (e)=> e.code !== code ) );
  }

  function addExam(exam) {
    setExams( oldExams => [...oldExams, exam] );
    setShowForm(false);
  }

  return (
    <>
    <Table>
      <Thead>
        <tr>
          <th>Exam</th>
          <th>Score</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </Thead>

      <Tbody>
        {
          exams.map((ex) => <ExamRow exam={ex} key={ex.code} deleteExam={deleteExam} />)
        }
      </Tbody>
    </Table>
    { (!showForm) ? <Button onClick={()=>setShowForm(true)}>Add</Button> :
    <ExamForm cancel={()=>setShowForm(false)} addExam={addExam}/>}
    </>
  );
}

function ExamRow(props) {
  return (
    <tr><ExamData exam={props.exam} /><ExamActions code={props.exam.code} deleteExam={props.deleteExam} /></tr>
  );
}

function ExamData(props) {
  return (
    <>
      <td>{props.exam.name}</td>
      <td>{props.exam.score}</td>
      <td>{props.exam.date.format('YYYY-MM-DD')}</td>
    </>
  );
}

function ExamActions(props) {
  return <td><Button variant='danger'
    onClick={() => { props.deleteExam(props.code) }}
  ><i className='bi bi-trash3'></i></Button></td>
}

function ExamForm(props){
  const [code, setCode] = useState('');
  const [name, setName] = useState('');
  const [score, setScore] = useState(0);
  const [date, setDate] = useState(dayjs());  
  const [errorMg,setErrorMg]=useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    if(score >= 18){
      const newExam = {code:code, name: name, score:score, date:date}
      props.addExam(newExam);
    }else{
      setErrorMg('Errore voto: '+ score)
    }
  }

  return (
  <>
  {errorMg ? <Alert variant ='danger' onClose={()=>setErrorMg('')} dismissible>{errorMg}</Alert> : false}
      <Form>
        <Form.Group>
          <Form.Label>Code</Form.Label>
          <Form.Control value={code} onChange={ev => setCode(ev.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Course name</Form.Label>
          <Form.Control value={name} onChange={ev => setName(ev.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Score</Form.Label>
          <Form.Control type='number' min={18} max={31} value={score} onChange={ev => setScore(ev.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Date</Form.Label>
          <Form.Control type='date' value={date.format('YYYY-MM-DD')} onChange={ev => setDate(dayjs(ev.target.value))} />
        </Form.Group>
      </Form>
      <Button onClick={handleSubmit} type='submit'>Save</Button>
    <Button onClick={props.cancel} variant='secondary'>Cancel</Button>
    </>
  );
}

export { ExamScores };