function getData(){
    const name = document.getElementById("name").value;
    const clg = document.getElementById("college").value;
    const mob = document.getElementById("mobileno").value;
    const email = document.getElementById("email").value;
    alert(`Name : ${name} 
College : ${clg} 
Mobile Number : ${mob} 
Email ID : ${email}`);
}