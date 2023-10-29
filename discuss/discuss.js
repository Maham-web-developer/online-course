        // Your JavaScript code here
        const discussionForm = document.getElementById('discussion-form');
        const discussionContainer = document.getElementById('discussion-container');

        discussionForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const message = document.getElementById('message').value;
            const username = document.getElementById('username').value;

            if (message && username) {
                const messageElement = document.createElement('div');
                messageElement.classList.add('message');

                const usernameElement = document.createElement('h3');
                usernameElement.textContent = username;

                const contentElement = document.createElement('p');
                contentElement.textContent = message;

                messageElement.appendChild(usernameElement);
                messageElement.appendChild(contentElement);

                discussionContainer.appendChild(messageElement);

                document.getElementById('message').value = '';
                document.getElementById('username').value = '';
            } else {
                alert('Please enter both your name and a message.');
            }
        });