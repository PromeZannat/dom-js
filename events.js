function makeRed(){
    document.body.style.backgroundColor = 'red';
}
//blue button by setting function nameS
const blueButton = document.getElementById('make-blue-button');
        blueButton.onclick= makeBlue;

        function makeBlue(){
            document.body.style.backgroundColor = 'blue';
        }
//green button using anonymous function
const greenButton = document.getElementById('make-green-button');
        greenButton.onclick = function (){
            document.body.style.backgroundColor = 'green';
        } 

//addlistener
        const aquaButton = document.getElementById('make-aqua');
        aquaButton.addEventListener('click', makeAqua);

        function makeAqua(){
            document.body.style.backgroundColor = 'Aqua';
        }
//lime button
        const limeButton = document.getElementById('make-lime');
        limeButton.addEventListener('click', function() {
            document.body.style.backgroundColor = 'Lime';
        })