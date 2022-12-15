var arr = [
    {
        name: "Raheem",
        rollnum: 62768,
        program: "Software Engniearning ",
        age: 20,

    }, {
        name: "Asif",
        rollnum: 62760,
        program: "E Commerce ",
        age: 19,
    },
    {
        name: "Amir",
        rollnum: 62761,
        program: "Commerce ",
        age: 19,
    }, {
        name: "Ahsan",
        rollnum: 62762,
        program: "Commerce ",
        age: 20,
    }, {
        name: "Rahib",
        rollnum: 62763,
        program: "Commerce ",
        age: 17,

    },
    {
        name: "ShahZaib",
        rollnum: 62764,
        program: "Programming",
        age: 27,
    }, {
        name: "Kabir",
        rollnum: 62765,
        program: "Arts ",
        age: 24,

    },
    {
        name: "Qadeer",
        rollnum: 62766,
        program: "Arts ",
        age: 24,

    }, {
        name: "Ahsan",
        rollnum: 62767,
        program: "Law",
        age: 20,

    },

]
var inp = document.getElementById("inp")


function searchRollNo() {
    for (var i = 0; i < arr.length; i++) {
        if (inp.value == arr[i].rollnum) 
        {
         document.getElementById("myTable").style.display = "block";
        
        
      
        // //    console.log(arr[i])
        // var tbody = document.getElementById("student-record");
        // tbody.append('<tr><td>'+arr[i].rollnum+'</td></tr>')

        var tbodyRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];
        var newRow = tbodyRef.insertRow();
        var newCell1 = newRow.insertCell();
        var newCell2 = newRow.insertCell();
        var newCell3 = newRow.insertCell();
        var newCell4 = newRow.insertCell();
        var rollnum = document.createTextNode(arr[i].rollnum);
        var name = document.createTextNode(arr[i].name);
        var age = document.createTextNode(arr[i].age);
        var program = document.createTextNode(arr[i].program);
        newCell1.appendChild(rollnum);
        newCell2.appendChild(name);
        newCell3.appendChild(age);
        newCell4.appendChild(program);

        }}
        //         console.log(arr[i])
        //     console.log(serach.value)
    }


