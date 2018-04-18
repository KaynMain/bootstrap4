/*jshint esversion: 6 */
const canvasElem = document.getElementById('canvas');
const ctx = canvasElem.getContext('2d');

// x, y, width, height
ctx.fillRect(25, 25, 100, 100);

// czyszczenie
ctx.clearRect(45, 45, 60, 60);

for (var i = 0; i < 10; i++ ) {
ctx.strokeRect(50 + i *2, 50 + i * 2, 50 - i * 2, 50 - i * 2);
}

//określenie czcionki
ctx.font = 'italic bold 30px arial';
//top, bottom
ctx.textBaseline = 'middle';
ctx.fillText('Witaj w Canvas', 5, 210);

//określenie czcionki
ctx.font = 'italic bold 20px arial';
//określenie koloru wypełnienia
ctx.fillStyle = '#ff0000';
//top, bottom
ctx.textBaseline = 'middle';
ctx.textAlign = 'center'
ctx.fillText('Wstawiamy tekst', 90, 260);

//rysowanie koła
ctx.fillStyle ='green';
ctx.beginPath();
//
ctx.arc(150, 150, 50, 0, 2*Math.PI);
ctx.fill();
ctx.strokeStyle ='#ffffff'
ctx.arc(150, 150, 40, 0, 1.5*Math.PI);
ctx.stroke();
