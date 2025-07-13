document.getElementById('asciiButton').addEventListener('click', function () {
    const char = document.getElementById('charInput').value;
    const result = document.getElementById('asciiResult');

    if (char.length === 0) {
        result.textContent = "Please enter a character.";
        result.style.color = "red";
    } else {
        const ascii = char.charCodeAt(0);
        result.textContent = `The ASCII value of '${char}' is ${ascii}.`;
        result.style.color = "green";
    }
});

