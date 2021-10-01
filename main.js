screen_width=0;
screen_height=0;
apple="";
speak_data="";
to_number="";

function preload()
{
apple=loadImage("apple.jpg");
}

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("status").innerHTML="system is listening please speak";
    recognition.start();
}

recognition.onresult()=function(event)
{
console.log(event);
content=event.results[0][0].transcript;
to_number = Number(content);
if(Number.isInterger(to_number))
{
document.getElementById("status").innerHTML="started drawing apple";
draw_apple="set";
}
else
{
    document.getElementById("status").innerHTML="not recognized any number please speak again";
}
}

function setup()
{
    screen_width=window.innerWidth;
    screen_height=window.innerHeight;

    canvas=createCanvas(screen_width,screen_height-150);
    canvas.position(0,150);

}

function speak()
{
    var synth = window.speechSynthesis;
    var utterthis = new SpeechSynthesisUtterance (speak_data);
    synth.speak(utterthis);
}

function draw()
{
    if(draw_apple=="set")
    {
        for(var i=1; i<=to_number; i++)
        {
            x=Math.floor(Math.random()*700);
            y=Math.floor(Math.random()*400);
            Image(apple,x,y,50,50);
        }

        document.getElementById("status").innerHTML=to_number+"apple drawn";
        speak_data=to_number+"apple drawn";
        speak();
        draw_apple="";
    } 
}