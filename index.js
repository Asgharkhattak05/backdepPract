require('dotenv').config()
const express = require('express'); 
const app = express();

const  port= 4000
const studentData=[
    {
      "name": "Ali Khan",
      "fatherName": "Ahmed Khan",
      "city": "Karachi",
      "profession": "Software Developer",
      "salary": 90000
    },
    {
      "name": "Fatima Akhtar",
      "fatherName": "Mohammad Akhtar",
      "city": "Lahore",
      "profession": "Doctor",
      "salary": 120000
    },
    {
      "name": "Muhammad Abbas",
      "fatherName": "Abdul Ghani",
      "city": "Islamabad",
      "profession": "Teacher",
      "salary": 65000
    },
    {
      "name": "Sana Batool",
      "fatherName": "Murtaza Batool",
      "city": "Faisalabad",
      "profession": "Engineer",
      "salary": 80000
    },
    {
      "name": "Amna Aslam",
      "fatherName": "Tariq Aslam",
      "city": "Rawalpindi",
      "profession": "Accountant",
      "salary": 75000
    },
    {
      "name": "Bilal Hassan",
      "fatherName": "Kamran Hassan",
      "city": "Multan",
      "profession": "Lawyer",
      "salary": 85000
    },
    {
      "name": "Sadia Farooq",
      "fatherName": "Rizwan Farooq",
      "city": "Quetta",
      "profession": "Nurse",
      "salary": 70000
    },
    {
      "name": "Ahmed Malik",
      "fatherName": "Naveed Malik",
      "city": "Hyderabad",
      "profession": "Architect",
      "salary": 95000
    },
    {
      "name": "Zainab Ali",
      "fatherName": "Kamal Ali",
      "city": "Peshawar",
      "profession": "Marketing Manager",
      "salary": 110000
    },
    {
      "name": "Hassan Ahmed",
      "fatherName": "Rashid Ahmed",
      "city": "Gujranwala",
      "profession": "Financial Analyst",
      "salary": 100000
    }
  ]
  
app.get("/", (req, res)=>{
    res.send("Welcome to Hello World!");
})

app.get("/students" , (req, res)=>{
    res.send("Hello Students!")
})

app.get("/head" , (req, res)=>{
    res.send("<h1>This is the first Head!</h1>")
})
app.get("student", (req, res)=>{
    res.json(studentData)
})

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${port}`)
})