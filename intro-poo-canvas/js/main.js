document.addEventListener('DOMContentLoaded', function () {
    const squareCanvas = document.getElementById('squareCanvas');
    const triangleCanvas = document.getElementById('triangleCanvas');
    const happyFaceCanvas = document.getElementById('happyFaceCanvas');
    const trapezoidCanvas = document.getElementById('trapezoidCanvas');
    
    const squareCtx = squareCanvas.getContext('2d');
    const triangleCtx = triangleCanvas.getContext('2d');
    const happyFaceCtx = happyFaceCanvas.getContext('2d');
    const trapezoidCtx = trapezoidCanvas.getContext('2d');
    
    const window_height = 150;
    const window_width = 150;
    
    squareCanvas.height = window_height;
    squareCanvas.width = window_width;
    
    triangleCanvas.height = window_height;
    triangleCanvas.width = window_width;
    
    happyFaceCanvas.height = window_height;
    happyFaceCanvas.width = window_width;
    
    trapezoidCanvas.height = window_height;
    trapezoidCanvas.width = window_width;
    
    class Circle {
        constructor(x, y, radius, color, text) {
            this.posX = x;
            this.posY = y;
            this.radius = radius;
            this.color = color;
            this.text = text;
        }
    
        drawArc(context) {
            context.beginPath();
            context.strokeStyle = this.color;
            context.fillStyle = "white";
            context.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2);
            context.stroke();
            context.fill();
            context.closePath();
            
            context.fillStyle = this.color;
            context.font = "12px Arial";
            context.textAlign = "center";
            context.textBaseline = "middle";
            context.fillText(this.text, this.posX, this.posY);
        }
    }

    function generateRandomCircle(canvasWidth, canvasHeight, text) {
        let centerX = Math.random() * canvasWidth;
        let centerY = Math.random() * canvasHeight;
        let randomRadius = Math.floor(Math.random() * 30 + 10);
        return new Circle(centerX, centerY, randomRadius, 'black', text);
    }
    
    // Dibujar un solo arco en el primer canvas
    let singleCircle = new Circle(window_width / 2, window_height / 2, 50, 'black', 'Tec');
    singleCircle.drawArc(squareCtx);

    // Dibujar varios arcos en el segundo canvas
    for (let i = 0; i < 5; i++) {
        let circle = generateRandomCircle(window_width, window_height, `A${i}`);
        circle.drawArc(triangleCtx);
    }

    // Dibujar varios arcos en el tercer canvas, asegurando que no se salgan del canvas
    for (let i = 0; i < 5; i++) {
        let radius = Math.floor(Math.random() * 30 + 10);
        let centerX = Math.random() * (window_width - 2 * radius) + radius;
        let centerY = Math.random() * (window_height - 2 * radius) + radius;
        let circle = new Circle(centerX, centerY, radius, 'black', `B${i}`);
        circle.drawArc(happyFaceCtx);
    }

    // Dibujar un arco en el cuarto canvas
    let fourthCircle = new Circle(window_width / 2, window_height / 2, 50, 'black', 'Tec');
    fourthCircle.drawArc(trapezoidCtx);
});
