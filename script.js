document.getElementById('keyForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const keyInput = document.getElementById('keyInput').value;
    const messageList = document.getElementById('messageList');
    messageList.innerHTML = ''; // Clear previous messages

    // Simple key validation logic (customize as needed)
    if (keyInput.length < 8) {
        messageList.innerHTML += '<li>Key must be at least 8 characters long.</li>';
    } else if (!/^[a-zA-Z0-9]+$/.test(keyInput)) {
        messageList.innerHTML += '<li>Key must only contain alphanumeric characters.</li>';
    } else {
        messageList.innerHTML += '<li style="color: green;">Key is valid!</li>';
    }
});
