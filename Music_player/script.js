var files = [
    'Music/Beauty and a Beat.mp3',
    'Music/Manasa❤️ - Yem Maya Chesave.mp3',
    'Music/Blinding Lights.mp3',
    'Music/Memories.m4a',
    'Music/Pachandaname pachadaname 🥰.mp3',
    'Music/Preminche Premava❤️.m4a',
    'Music/Yenta Mandhi Vacchi - Yem Maya Chesave.mp3'
  ];

var audioele = document.getElementById("myaudio");
var srcele = document.getElementById("mysrc");
var image= document.getElementById("here2");

var x=files[0];
var val=0;
var len=files.length;

  function clickok() {
    if(val<len-1){
      val=val+1;
  }
  else{
    val=0;
  }
    
        // console.log(val)
        x=files[val];
        document.querySelector('.title').innerHTML=x;
        srcele.src=x;
        audioele.load();

        if(val==5){
            image.src='Images/Preminche Premava crop copy.jpg';
        }
        else {
            image.src='Images/music-headphone-png.png';
        }
        

    }

    function clickback(){
      if(val<len & val>0){
        val=val-1;
      }
     else if(val == 0){
        val=len-1;
      }
        // console.log(val)
        x=files[val];
        document.querySelector('.title').innerHTML=x;
        srcele.src=x;
        audioele.load();

        if(val==5){
            image.src='Images/Preminche Premava crop copy.jpg';
        }
        else {
            image.src='Images/music-headphone-png.png';
        }
    }

      // for(var i=0;i<files.length;i++){
    //     val=val+1;
    //     x=files[1];
    //     console.log(x,val);
    //     srcele.src=x;
    //     audioele.load();
    // }