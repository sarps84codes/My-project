// function profileText(){
    //     document.getElementById("profile").innerHTML = "Name: Nhyiraba Sarpong Osei-Bonsu <br> Age: 18 <br> Country: Ghana <br> Occupation: Student ";

    // }
    // function profileImage(){
    //     document.getElementById("profileImg").innerHTML = "<img src='me.jpg' alt='Nhyiraba's profile picture' width='200px' height='200px'> ";
    // }

    // function viewProfile(){
    //     document.getElementById("profile").innerHTML = "Name: Nhyiraba Sarpong Osei-Bonsu <br> School: University Of Ghana,Legon <br> Age: 18 <br> Country: Ghana <br>  Occupation: Student";
    //     document.getElementById("profileImg").innerHTML = "<img src='me.jpg' alt='Nhyiraba's profile picture' width='200px' height='200px'> ";
    // }

    function showProfile(){
    // Show profile text
    document.getElementById("profile").innerHTML =
    "Name: Nhyiraba Sarpong Osei-Bonsu <br> School: University Of Ghana,Legon <br> Age: 18 <br> Country: Ghana <br> Occupation: Student";

    // Reveal the image button
    document.getElementById("imageSection").style.display = "block";
    }

    function showImage(){
        document.getElementById("profileImg").innerHTML =
        "<img src='me.jpg' alt='Profile picture' width='200px'>";
    }