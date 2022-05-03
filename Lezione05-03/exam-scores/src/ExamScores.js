import { Table, Button } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate} from 'react-router-dom';

function ExamScores(props) {
  return (
    <>
    <Container>
      <Row>
        <Col>
          <h1>My Exams</h1>
        </Col>
      </Row>
      <Row>
        <Col>
        <ExamTable exams={props.exams} deleteExam={props.deleteExam}></ExamTable>
        </Col>
      </Row>
    </Container>
    </>
  );
}

function ExamTable(props) {

  const navigate=useNavigate();

  return (
    <>
    <Table>
      <thead>
        <tr>
          <th>Exam</th>
          <th>Score</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          props.exams.map((ex) => <ExamRow exam={ex} key={ex.code} deleteExam={props.deleteExam} 
          editExam={()=>{/*setExamToEdit(ex); setShowForm(true);*/}} />)
        }
      </tbody>
    </Table>
    <Button onClick={()=>navigate('/add')}> Add </Button>

      {/*(!showForm) ? <Button onClick={() => setShowForm(true)}>Add</Button> :
        <ExamForm key={examToEdit? examToEdit.code : 'nocode'} 
          cancel={() => { setShowForm(false); setExamToEdit(undefined); }}
      addExam={examToEdit ? updateExam : addExam} examToEdit={examToEdit} /> */}
    </>
  );
}

function ExamRow(props) {
  return (
    <tr><ExamData exam={props.exam} />
    <ExamActions code={props.exam.code} deleteExam={props.deleteExam} editExam={props.editExam} /></tr>
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
  const navigate=useNavigate();
  return (<td>
    <Button className='mx-3' variant='warning' onClick={()=>{navigate(`/edit/${props.code}`)}} >
      <i className='bi bi-pencil'></i></Button>
    <Button variant='danger' onClick={() => { props.deleteExam(props.code) }}
    ><i className='bi bi-trash3'></i></Button>
  </td>);
}


export { ExamScores };