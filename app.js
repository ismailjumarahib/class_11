const team = document.querySelector('.team');
const students = document.querySelector('.student');
const tbody = document.querySelector('.data table tbody');




devs.map(data => {

    team.innerHTML += `
    <div class="team-item">

       <img src="${data.photo}" alt="devs">

        <h2>${data.name}</h2>

        <blod> Skill : ${data.skill}</blod>

        <p> Selery : $ ${data.income}</p>

        <p>Lorem, ipsum dolor sit amet</p>

        <blod> Age :${data.age} year </bold>

         <blod> Sex :${data.gender}</blod>

        <bold> Location ${data.location}</bold>

</div>
    
    `;
})

  studentlist.map(data => {

    students.innerHTML += `
    <div class="student-item">
                     <img src="${data.photo}" alt="students">
                     <h2>${data.name}</h2>
                     <p>Roll:${data.roll}</p>
                     <p>Reg :${data.reg}</p>
                     <p>Father Name : ${data.fname}</p>
                     <p>Mother Name : ${data.mname}</p>
                     <p>Gender ${data.gender}</p>
                     <p>Age    ${data.age}
                     <p>Location : ${data.location}</p>

                </div>
    `
})


family.map(data => {

    tbody.innerHTML += `
   
               <tr>
                    <td>${data.id}</td>
                    <td>${data.name}</td>
                    <td>${data.phone}</td>
                    <td> ${data.age}</td>
                    <td>${data.location}</td>
                    <td> <img style="width:70px" height:70px; src="${data.photo}"</td>
                </tr>
  
  `
})