document.getElementById("fbForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const fname = document.getElementById("fname").value;
    const minit = document.getElementById("minit").value;
    const lname = document.getElementById("lname").value;

    const defaultWord = document.getElementById("defaultWord").value;
    const count = parseInt(document.getElementById("count").value);

    const word1 = document.getElementById("word1").value;
    const div1 = parseInt(document.getElementById("div1").value);

    const word2 = document.getElementById("word2").value;
    const div2 = parseInt(document.getElementById("div2").value);

    const word3 = document.getElementById("word3").value;
    const div3 = parseInt(document.getElementById("div3").value);

    const showNumbers = document.getElementById("showNumbers").checked;

    document.getElementById("welcome").innerText =
        `Welcome ${fname} ${minit} ${lname}!`;

    const results = document.getElementById("results");
    results.innerHTML = "";

    for (let i = 1; i <= count; i++) {
        let output = "";

        if (i % div1 === 0) output += word1 + " ";
        if (i % div2 === 0) output += word2 + " ";
        if (i % div3 === 0) output += word3 + " ";

        output = output.trim();

        // If no words matched, use default word
        if (output === "") output = defaultWord;

        let finalText;

        if (showNumbers) {
            // Show numbers ALWAYS when checkbox is ON
            finalText = `${i}: ${output}`;
        } else {
            // Classic fizzbuzz behavior
            if (output === defaultWord) {
                finalText = `${i}`;   // ONLY number
            } else {
                finalText = output;   // ONLY word(s)
            }
        }

        const li = document.createElement("li");
        li.textContent = finalText;
        results.appendChild(li);
    }
});


