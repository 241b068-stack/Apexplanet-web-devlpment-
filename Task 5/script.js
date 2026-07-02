let students = JSON.parse(localStorage.getItem("students")) || [];

function saveData(){
localStorage.setItem("students",JSON.stringify(students));
displayStudents();
}

function addStudent(){

let name=document.getElementById("name").value;
let course=document.getElementById("course").value;

if(name=="" || course==""){
alert("Fill all fields");
return;
}

students.push({name,course});

saveData();

document.getElementById("name").value="";
document.getElementById("course").value="";
}

function displayStudents(){

let list=document.getElementById("studentList");

list.innerHTML="";

students.forEach((student,index)=>{

list.innerHTML+=`
<tr>
<td>${student.name}</td>
<td>${student.course}</td>
<td>
<button onclick="deleteStudent(${index})">Delete</button>
</td>
</tr>
`;

});

}

function deleteStudent(index){
students.splice(index,1);
saveData();
}

function searchStudent(){

let filter=document.getElementById("search").value.toLowerCase();

let rows=document.querySelectorAll("#studentList tr");

rows.forEach(row=>{
let text=row.innerText.toLowerCase();
row.style.display=text.includes(filter)?"":"none";
});

}

displayStudents();