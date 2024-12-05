// Función para generar un número aleatorio entre 0 y 9
function generateRandomNumber() {
    return Math.floor(Math.random() * 10);
}

// Función para generar el problema matemático
function generateQuestion() {
    let n1 = generateRandomNumber();
    let n2 = generateRandomNumber();
    return {
        problemText: `What is ${n1} + ${n2}?`,
        correctAnswer: n1 + n2
    };
}

// Función para solicitar la respuesta del usuario
function askUser(problemText) {
    return Number(prompt(problemText));
}

// Función para procesar la respuesta del usuario
function processAnswer(userResponse, correctAnswer, problemText) {
    while (userResponse !== correctAnswer) {
        alert("Wrong answer! Try again.");
        userResponse = askUser(problemText);
    }
}

// Función para mostrar un mensaje de motivación aleatorio
function showMotivationalMessage() {
    const messages = ["Well done!", "Very good!", "Correct!", "Keep it up!", "Nice work!"];
    const randomIndex = Math.floor(Math.random() * messages.length);
    alert(messages[randomIndex]);
}

// Función principal para ejecutar el programa
function runCAL() {
    // Generar el problema
    const { problemText, correctAnswer } = generateQuestion();

    // Solicitar la respuesta del usuario
    let userResponse = askUser(problemText);

    // Procesar la respuesta
    processAnswer(userResponse, correctAnswer, problemText);

    // Mostrar el mensaje motivacional
    showMotivationalMessage();
}

// Ejecutar el programa
runCAL();
