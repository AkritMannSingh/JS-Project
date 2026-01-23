const dictionary = {
            "ephemeral": {
                meaning: "Lasting for a very short time",
                example: "The ephemeral beauty of cherry blossoms reminds us to appreciate fleeting moments.",
                type: "Adjective",
                pronunciation: "ɪˈfɛm(ə)r(ə)l"
            },
            "serendipity": {
                meaning: "The occurrence of events by chance in a happy or beneficial way",
                example: "Finding this old photograph was pure serendipity.",
                type: "Noun",
                pronunciation: "ˌsɛrənˈdɪpɪti"
            },
            "ubiquitous": {
                meaning: "Present, appearing, or found everywhere",
                example: "Smartphones have become ubiquitous in modern society.",
                type: "Adjective",
                pronunciation: "juːˈbɪkwɪtəs"
            },
            "mellifluous": {
                meaning: "Sweet or musical; pleasant to hear",
                example: "Her mellifluous voice captivated the entire audience.",
                type: "Adjective",
                pronunciation: "mɛˈlɪflʊəs"
            },
            "eloquent": {
                meaning: "Fluent or persuasive in speaking or writing",
                example: "His eloquent speech moved everyone to tears.",
                type: "Adjective",
                pronunciation: "ˈɛləkwənt"
            }
        };

        
        function searchWord() {
            const input = document.getElementById('wordInput');
            const word = input.value.trim().toLowerCase();
            const resultSection = document.getElementById('resultSection');

            if (!word) {
                showError("Please enter a word to search");
                return;
            }

            if (dictionary[word]) {
                const wordData = dictionary[word];
                displayResult(word, wordData);
            } else {
                showError(`"${word}" not found in dictionary. Try: ${Object.keys(dictionary).join(', ')}`);
            }

            input.value = '';
            input.focus();
        }

       
        function displayResult(word, data) {
            const resultSection = document.getElementById('resultSection');

            resultSection.innerHTML = `
                <div class="word-display">
                    ${word.charAt(0).toUpperCase() + word.slice(1)}
                    <span class="word-type">${data.type}</span>
                </div>
                <div class="meaning">
                    <strong>Meaning:</strong> ${data.meaning}
                </div>
                <div class="example">
                    <strong>Example:</strong> "${data.example}"
                </div>
                <div style="margin-top: 20px; color: #7f8c8d;">
                    <strong>Pronunciation:</strong> /${data.pronunciation}/
                </div>
            `;

           
            addToWordList(word, data);
        }

        
        function showError(message) {
            const resultSection = document.getElementById('resultSection');
            resultSection.innerHTML = `<div class="error">${message}</div>`;
        }

       
        function displayAllWords() {
            const wordList = document.getElementById('wordList');
            let html = '';

            Object.keys(dictionary).forEach(word => {
                const data = dictionary[word];
                html += `
                    <div class="word-item" onclick="displayResult('${word}', ${JSON.stringify(data).replace(/'/g, "\\'")})">
                        <div class="word-header">
                            <div class="word-text">${word.charAt(0).toUpperCase() + word.slice(1)}</div>
                            <span class="word-type">${data.type}</span>
                        </div>
                        <div class="meaning">${data.meaning}</div>
                    </div>
                `;
            });

            wordList.innerHTML = html;
        }

        
        function addToWordList(word, data) {
            const wordList = document.getElementById('wordList');
            const wordItem = document.createElement('div');
            wordItem.className = 'word-item';
            wordItem.onclick = () => displayResult(word, data);
            wordItem.innerHTML = `
                <div class="word-header">
                    <div class="word-text">${word.charAt(0).toUpperCase() + word.slice(1)}</div>
                    <span class="word-type">${data.type}</span>
                </div>
                <div class="meaning">${data.meaning}</div>
            `;

            
            wordList.insertBefore(wordItem, wordList.firstChild);
        }

        
        function initApp() {
            displayAllWords();

            
            document.getElementById('wordInput').addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    searchWord();
                }
            });

            
            document.getElementById('wordInput').focus();

            
            const words = Object.keys(dictionary);
            const randomWord = words[Math.floor(Math.random() * words.length)];
            displayResult(randomWord, dictionary[randomWord]);
        }

        window.onload = initApp;