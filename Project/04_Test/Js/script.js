function getData(){
    const id = document.getElementById('Did').value;
    const tcategory = document.getElementById('testCat').value;
    const tname = document.getElementById('testName').value;
    const tdesc = document.getElementById('testDesc').value;  
    const tlwrRange = document.getElementById('testLwrRange').value;
    const tuprRange = document.getElementById('testUprRange').value;
    const tunit = document.getElementById('unit').value;
    const tcharges = document.getElementById('testCharges').value;

    alert(`Test Added Successfully...!!!

Test ID : ${id}
Test Category : ${tcategory}
Test Name : ${tname}
Description : ${tdesc}
Lower Range : ${tlwrRange}
Upper Range : ${tuprRange}
Test Unit : ${tunit}
Test Charges : ${tcharges}`
);

}

function clrData(){
    document.getElementById('id').value = "";
    document.getElementById('testCat').value = "";
    document.getElementById('testName').value = "";
    document.getElementById('testDesc').value = "";
    document.getElementById('testLwrRange').value = "";
    document.getElementById('testUprRange').value = "";
    document.getElementById('unit').value = "";
    document.getElementById('testCharges').value ="";

    document.getElementById('id').focus(); 
}