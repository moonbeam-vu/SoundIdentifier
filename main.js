function start(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/186Ga1XRW/model.json',modelloaded)
}
function modelloaded(){
    console.log('modelloaded')
    classifier.classify(gotresult)
}
function gotresult(error,result){
    if(error){
        console.log(error)
    }
    else{
        console.log(result)
        document.getElementById('result').innerHTML='I hear'+ result[0].label
        document.getElementById('accuracy').innerHTML='Accuracy'+ result[0].confidence
        if(result[0].label=='Clapping'){
            document.getElementById('alien1').src='aliens-01.gif'
            document.getElementById('alien2').src='aliens-02.png'
            document.getElementById('alien3').src='aliens-03.png'
            document.getElementById('alien4').src='aliens-04.png'
        }
        if(result[0].label=='Typing'){
            document.getElementById('alien1').src='aliens-01.png'
            document.getElementById('alien2').src='aliens-02.gif'
            document.getElementById('alien3').src='aliens-03.png'
            document.getElementById('alien4').src='aliens-04.png'
        }
        if(result[0].label=='Banging'){
            document.getElementById('alien1').src='aliens-01.png'
            document.getElementById('alien2').src='aliens-02.png'
            document.getElementById('alien3').src='aliens-03.gif'
            document.getElementById('alien4').src='aliens-04.png'
        }
        if(result[0].label=='Scratching'){
            document.getElementById('alien1').src='aliens-01.png'
            document.getElementById('alien2').src='aliens-02.png'
            document.getElementById('alien3').src='aliens-03.png'
            document.getElementById('alien4').src='aliens-04.gif'
        }
    }
}