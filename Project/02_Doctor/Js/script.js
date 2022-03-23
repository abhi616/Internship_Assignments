function getData(){
    const fullname = document.getElementById('DfName').value;
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
    document.getElementById('DfName').value = "";
    document.getElementById('Ddob').value = "";
    document.getElementById('DAge').value = "";
    document.getElementById('Gen').value = "";
    document.getElementById('DEducation').value = "";
    document.getElementById('mob').value = "";
    document.getElementById('alternatemob').value = "";
    document.getElementById('email').value = "";
    document.getElementById('aadhaar').value = "";
    document.getElementById('address').value = "";
    document.getElementById('DfName').focus(); 
}