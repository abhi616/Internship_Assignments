function getData(){
    const id = document.getElementById('Did').value;
    const fname = document.getElementById('DfName').value;
    const mname = document.getElementById('DmName').value;
    const surname = document.getElementById('DSurName').value;
    const fullname = fname+" "+mname+" "+surname;
    const dob = document.getElementById('Ddob').value;
    const age = document.getElementById('DAge').value;
    const gen = document.getElementById('Gen').value;
    const education = document.getElementById('DEducation').value;
    const mob = document.getElementById('mob').value;
    const alternateno = document.getElementById('alternatemob').value;
    const email = document.getElementById('email').value;
    const aadhar = document.getElementById('aadhaar').value;
    const address = document.getElementById('address').value;
    alert(`Doctor Registered Successfully...

Doctor ID : ${id}
Doctor Name : ${fullname}
DOB : ${dob}
Age : ${age}
Gender : ${gen}
Education : ${education}
Mobile Number : ${mob}
Alternate Number : ${alternateno}
Email ID : ${email}
Aadhaar Number : ${aadhar}
Address : ${address}`
);

}

function clrData(){
    document.getElementById('Did').value = "";
    document.getElementById('DfName').value = "";
    document.getElementById('DmName').value = "";
    document.getElementById('DSurName').value = "";
    document.getElementById('Ddob').value = "";
    document.getElementById('DAge').value = "";
    document.getElementById('Gen').value = "";
    document.getElementById('DEducation').value = "";
    document.getElementById('mob').value = "";
    document.getElementById('alternatemob').value = "";
    document.getElementById('email').value = "";
    document.getElementById('aadhaar').value = "";
    document.getElementById('address').value = "";
    document.getElementById('Did').focus(); 
}