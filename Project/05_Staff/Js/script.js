function getData(){
    const id = document.getElementById('id').value;
    const fname = document.getElementById('fName').value;
    const mname = document.getElementById('mName').value;
    const surname = document.getElementById('Surname').value;
    const fullname = fname+" "+mname+" "+surname;
    const dob = document.getElementById('dob').value;
    const age = document.getElementById('Age').value;
    const gen = document.getElementById('Gen').value;
    const education = document.getElementById('Education').value;
    const mob = document.getElementById('mob').value;
    const alternateno = document.getElementById('alternatemob').value;
    const email = document.getElementById('email').value;
    const aadhar = document.getElementById('aadhaar').value;
    const address = document.getElementById('address').value;
    const post = document.getElementById('Post').value;
    const shift = document.getElementById('Shift').value;

    alert(`Staff Registered Successfully...

Staff ID : ${id}
Staff Name : ${fullname}
DOB : ${dob}
Age : ${age}
Gender : ${gen}
Education : ${education}
Mobile Number : ${mob}
Alternate Number : ${alternateno}
Email ID : ${email}
Aadhaar Number : ${aadhar}
Address : ${address}
Post : ${post}
Shift Timing : ${shift}`
);

}

function clrData(){
    document.getElementById('id').value = "";
    document.getElementById('fName').value = "";
    document.getElementById('mName').value = "";
    document.getElementById('Surname').value = "";
    document.getElementById('dob').value = "";
    document.getElementById('Age').value = "";
    document.getElementById('Gen').value = "";
    document.getElementById('Education').value = "";
    document.getElementById('mob').value = "";
    document.getElementById('alternatemob').value = "";
    document.getElementById('email').value = "";
    document.getElementById('aadhaar').value = "";
    document.getElementById('address').value = "";
    document.getElementById('Post').value = "";
    document.getElementById('Shift').value = "";
   
    document.getElementById('id').focus(); 
}