/**
 * All the API calls
 */
import dayjs from 'dayjs';
const APIURL = new URL('http://localhost:3001/api/');  // Do not forget '/' at the end

async function getAllExams(){
  const response=await fetch(APIURL+'exams');
  const examsJson=await response.json();
  if(response.ok){
    return  examsJson.map((ex)=>({code:ex.code, name:ex.name, score:ex.score, date: dayjs(ex.date)}))
  }else{
    throw examsJson; //Il server mi manderà un ogetto json con il dettaglio degli errori
    }
}

const API ={getAllExams}
export default API; 