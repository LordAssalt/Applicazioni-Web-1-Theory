# React Scores Server API

### __List Courser__ 
* URL: `/courses`
* Method: GET
* Description: Get all the courses
* Request body: _None_
* Response: `200 OK` (succes) `500` (internal server error)
* Response Body: //esempio del body

### __Get A Course__ 
* URL: `/courses/<code>`
* Method: GET
* Description: Get a specific course
* Request body: _None_
* Response: `200 OK` (succes) `500` (internal server error) `404` (not found)
* Response Body: //esempio del body

### __Add A New Exam__ 
* URL: `/exams>`
* Method: POST
* Description: Add a new exam to the list of the student's exams
* Request body: ``` { "code":"01MDSGS"  
                      "score":"25" 
                      "date":"2022-05-23" 
                    }```
* Response: `200 OK` (succes) `500` (internal server error) `422` (request body not valid)
* Response Body: //esempio del body

### __Delete Exam__ 
* URL: `/exams/<code>`
* Method: DELETE
* Description: Delete a specific exam from the list of the student's exams
* Request body: _None_
* Response: `200 OK` (succes) `500` (internal server error) `404` (not found)
* Response Body: //esempio del body

