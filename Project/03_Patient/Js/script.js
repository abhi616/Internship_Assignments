function getData(){
    const fname = document.getElementById('fName').value;
    const dob = document.getElementById('dob').value;
    const age = document.getElementById('Age').value;
    const gen = document.getElementById('Gen').value;
    const education = document.getElementById('Education').value;
    const mob = document.getElementById('mob').value;
    const alternateno = document.getElementById('alternatemob').value;
    const email = document.getElementById('email').value;
    const aadhar = document.getElementById('aadhaar').value;
    const address = document.getElementById('address').value;

    alert(`Patient Registered Successfully...!!!

Patient Name : ${fname}
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

function getTest(){
    const refereddoc = document.getElementById('referedDoc').value;
    const testcat = document.getElementById('testcategory').value;
    const test = document.getElementById('testname').value;
    const totamt = document.getElementById('totamt').value;
    const disc = document.getElementById('discount').value;
    const payamt = document.getElementById('payamount').value;

    alert(`Test Added Successfully...!!!!
    
Refered Doctor : ${refereddoc}
Test Category : ${testcat}
Test Name : ${test}
Total Amount : ${totamt}
Discount : ${disc}
Payment : ${payamt}`);
}

function clrData(){
    document.getElementById('fName').value = "";
    document.getElementById('dob').value = "";
    document.getElementById('Age').value = "";
    document.getElementById('Gen').value = "";
    document.getElementById('Education').value = "";
    document.getElementById('mob').value = "";
    document.getElementById('alternatemob').value = "";
    document.getElementById('email').value = "";
    document.getElementById('aadhaar').value = "";
    document.getElementById('address').value = "";
    
    document.getElementById('fName').focus(); 
}


function clrTestData(){
    document.getElementById('referedDoc').value = "";
    document.getElementById('testcategory').value = "";
    document.getElementById('testname').value = "";
    document.getElementById('totamt').value = "";
    document.getElementById('discount').value = "";
    document.getElementById('payamount').value = "";

    document.getElementById('referedDoc').focus();
}