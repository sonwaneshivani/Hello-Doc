function getBotResponse(input) {
    //rock paper scissors
    //rock paper scissors
    if (input == "rock") {
        return "paper";}
    else if(input=="hi" || input=="hello" || input=="hii" ){
        return "hello";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }
    else if(input=="Good Morning"){
        return "Gorgeous Morning";
    }
    else if(input=="I got fever"){
        return "book an Appointment with the Doctor";
    }
    else if(input == "Do you have a Refund policy"){
        return "Have a take-it-easy policy.If for any reason you're not convinced with our online consultation You can right us at contact helloThere@gmail.com ";
    }
    else if(input == "For how long is Consultation is valid"){
        return "In case of a paid Consult, You can follow-up with your Doctor fro up to 3 days.In case you opt for a free consult, follow-up questions, are valid for one Day only.";
    }
    else if(input == "What is Online Consultation"){
        return "Online Consultation or Onlinemedical Consultation is a method to connect patients and Doctors virtually.It is a convient and east way to get online Doctor adice using Doctors apps and telemedicine apps and the Internet.";
    }
    else if(input == "Thank You"){
        return "Thank You. Ask Something Else...";
    }
    else if(input=="I got Stomach Pain"){
        return "book an Appointment with the Doctor";
    }
    else if(input=="I am Suffering from Headache"){
        return "book an Appointment with the Doctor";
    }
    else{
        return "Hello peep how can i help you?";
    }
    

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}