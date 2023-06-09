let stuarr = [
  {
    ID: 1,
    FirstName: "Jane",
    LastName: "Smith",
    age: 22,
    Gender: "Female",
    Email: "janesmith@example.com",
    PhoneNumber: "987-654-3210",
    Address: "456 Elm Street",
    Major: "Psychology",
    YearOfStudy: "4",
    Status: "pending",
    isDelete: false,
  },
  {
    ID: 2,
    FirstName: "John",
    LastName: "Doe",
    age: 20,
    Gender: "Male",
    Email: "johndoe@example.com",
    PhoneNumber: "123-456-7890",
    Address: "123 Main Street",
    Major: "Computer Science",
    YearOfStudy: "2",
    Status: "pending",
    isDelete: false,
  },
];
const filtered = false;
const showStudent = (id) => {
  const studentData = document.getElementById("std-data");
  studentData.innerHTML = ''
  const student = stuarr.find((val) => val.ID === id);
  
  if (student && student.Status === 'active') {
    studentData.classList.remove("display-none");
    studentData.innerHTML =  `<h2>Student Information</h2>
    <p><strong>ID:</strong> <span>${student.ID}</span></p>
    <p><strong>First Name:</strong> <span id="firstName">${student.FirstName}</span></p>
    <p><strong>Last Name:</strong> <span id="lastName">${student.LastName}</span></p>
    <p><strong>Age:</strong> <span id="age">${student.age}</span></p>
    <p><strong>Gender:</strong> <span id="gender">${student.Gender}</span></p>
    <p><strong>Email:</strong> <span id="email">${student.Email}</span></p>
    <p><strong>Phone Number:</strong> <span id="phoneNumber">${student.PhoneNumber}</span></p>
    <p><strong>Address:</strong> <span id="address">${student.Address}</span></p>
    <p><strong>Major:</strong> <span id="major">${student.Major}</span></p>
    <p><strong>Year of Study:</strong> <span id="yearOfStudy">${student.YearOfStudy}</span></p>
    <p><strong>Status:</strong> <span id="status">${student.Status}</span></p>
    <p><strong>Is Deleted:</strong> <span id="isDelete">${student.isDelete}</span></p>`;
    
    studentData.classList.add("display-block");
    return studentData;
  }
  else 
  {
    alert('the student is pendingz');
  }
}


const buildStuBox = () => {
  const stulist = document.getElementById("student-list");
  stulist.innerHTML = ""; // Clear the previous content
  stuarr.map((student) => {
    const row = document.createElement("tr");
    
    row.innerHTML = `
      <td>${student.ID}</td>
      <td>${student.FirstName} ${student.LastName}</td>
      <td>
        <button onclick="setActiveStatus(${student.ID})">Activate</button>
        <button onclick="showStudent(${student.ID})">Show Data</button>
        <button onclick="deleteStudent(${student.ID})">Delete</button>
      </td>
    `;
    
    stulist.appendChild(row);
  });

  return stulist;
};



const reset = () => {
  document.getElementById("id").value = "";
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("age").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phoneNumber").value = "";
  document.getElementById("address").value = "";
  document.getElementById("major").value = "";
  document.getElementById("yearOfStudy").value = "";
};

const setActiveStatus = (id) => {
  const student = stuarr.find((active) => active.ID === id );
  if (student) {
    student.Status = 'active';
    console.log('Student status updated successfully');
    console.log(student);
    buildStuBox();
  } else {
    alert("The student is not found.");
  }
};


const deleteStudent = (id) => {
  let i =0;
          stuarr.forEach((student)=>{
  
              if (id === student.ID ){
                  student.isDelete= true;
                  console.log('object');
                  stuarr.splice(i,1);

              }
              i++;
              buildStuBox();
})};

const filter = () => {
   filtered = ture;
  const age = document.getElementById('filter-age').value;
  const major = document.getElementById('filter-major').value;
  
 const res=   stuarr.filter((student) => student.age == age && student.Major == major);
  console.log(res);
};




const storageInfo = () => {
  let id = document.getElementById("id").value;
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let age = document.getElementById("age").value;
  let gender = document.getElementById("gender").value;
  let email = document.getElementById("email").value;
  let phoneNumber = document.getElementById("phoneNumber").value;
  let address = document.getElementById("address").value;
  let major = document.getElementById("major").value;
  document.getElementById("status").value = "pending";
  let status = document.getElementById("status").value;
  let yearOfStudy = document.getElementById("yearOfStudy").value;

  if (
    id &&
    firstName &&
    lastName &&
    age &&
    gender &&
    email &&
    phoneNumber &&
    address &&
    major &&
    yearOfStudy &&
    status
  ) {
    const student = {
      ID: parseInt(id),
      FirstName: firstName,
      LastName: lastName,
      age: parseInt(age),
      Gender: gender,
      Email: email,
      PhoneNumber: phoneNumber,
      Address: address,
      Major: major,
      YearOfStudy: yearOfStudy,
      Status: status,
      isDelete: false,
    };

    stuarr.push(student);
    console.log("student :>> ", stuarr);
    buildStuBox();
    reset();
  } else {
    alert("Please fill in all the fields");
    reset();
  }
};
