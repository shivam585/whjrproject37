class Question {

  constructor() {
    this.title = createElement('h1')

    this.input1 = createInput("Enter Your Name Here....");
    this.input2 = createInput("Enter Correct Option No..");

    this.input3 = createInput("Enter Your Name Here....");
    this.input4 = createInput("Enter Correct Option No..");

    this.input5 = createInput("Enter Your Name Here....");
    this.input6 = createInput("Enter Correct Option No..");

    this.button = createButton('Submit');
    this.button2= createButton('Submit');
    this.button3= createButton('Submit');

    this.question = createElement('h3');
    this.question2 = createElement('h3');
    this.question3 = createElement('h3');

    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');

    this.option5 = createElement('h4');
    this.option6 = createElement('h4');
    this.option7 = createElement('h4');
    this.option8 = createElement('h4');

    this.option9 = createElement('h4');
    this.option10 = createElement('h4');
    this.option11= createElement('h4');
 

    this.message = createElement("h2") 
    this.message2 = createElement("h2")
    this.message3 = createElement("h2")

  }

  hide(){
    this.title.hide();

    this.input1.hide();
    this.input2.hide();
    this.input3.hide();
    this.input4.hide();
    this.input5.hide();
    this.input6.hide();

    this.button.hide();
    this.button2.hide();
    this.button3.hide();

    this.message.hide();
    this.message2.hide();
    this.message3.hide();
  }


  display(){
    this.title.html("Kaun banega krorepati");
    this.title.class("title")
    this.title.position(350, -10);

    // this.question("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );
    // this.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );

    this.question.html("Question:- What is shivams dream? " );
    this.question2.html("Question:-who is the best student of my batch " );
    this.question3.html("Question:- What  is shivams best hobby " );
    
this.question.class("greeting")
this.question2.class("greeting2")
this.question3.class("greeting3")

    // question.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );

    this.question.position(150, 50);
    this.question2.position(150, 300);
    this.question3.position(150, 530);

    this.option1.html("1: IIT engineer " );
    this.option1.class("option")
    this.option1.position(150, 75);
    this.option2.html("2: doctor" );
    this.option2.class("option")
    this.option2.position(150, 105);
    this.option3.html("3: Police" );
    this.option3.class("option")
    this.option3.position(150, 135);
    this.option4.html("4: engineer" );
    this.option4.class("option")
    this.option4.position(150, 160);

    this.option5.html("1: shivam" );
    this.option5.class("option")
    this.option5.position(150, 330);

    this.option6.html("2: mayur" );
    this.option6.class("option")
    this.option6.position(150, 360);

    this.option7.html("3: kaashvi " );
    this.option7.class("option")
    this.option7.position(150, 390);

    this.option8.html("4: abrar" );
    this.option8.class("option")
    this.option8.position(150, 420);

    this.option9.html("1: craft" );
    this.option9.class("option")
    this.option9.position(150, 560);

    this.option10.html("2: meditation" );
    this.option10.class("option")
    this.option10.position(150, 590);

    this.option11.html("3: music" );
    this.option11.class("option")
    this.option11.position(150, 620);

    this.input1.position(150, 230);
    this.input2.position(350, 230);

    this.input3.position(150, 500);
    this.input4.position(350, 500);

    this.input5.position(150, 720);
    this.input6.position(350, 720);

    this.button.position(290, 270);
    this.button2.position(290, 540);
    this.button3.position(590, 720);


    
    this.button.mousePressed(()=>{
            
       this.message.html("Thank You, Your Answer Has Been Submitted");
     //  this.message.Color=("red")
       this.message.position(350, 250);
      
    });

    this.button2.mousePressed(()=>{
            
      this.message.html("Thank You, Your Answer Has Been Submitted");
    //  this.message.Color=("red")
      this.message.position(350,520);
     
   });

   this.button3.mousePressed(()=>{
            
    this.message.html("Thank You, Your Answer Has Been Submitted");
  //  this.message.Color=("red")
    this.message.position(700,650);
   
 });
  }

  
}
