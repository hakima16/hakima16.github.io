document.getElementById("fbForm").addEventListener("submit", function(e){
    e.preventDefault();

    let first = document.getElementById("fname").value.trim();
    let mid = document.getElementById("minit").value.trim();
    let last = document.getElementById("lname").value.trim();

    let fullName = mid ? `${first} ${mid}. ${last}` : `${first} ${last}`;
    document.getElementById("welcome").textContent = `Welcome, ${fullName}!`;

    let defaultWord = document.getElementById("defaultWord").value;
    let count = parseInt(document.getElementById("count").value);

    let word1 = document.getElementById("word1").value;
    let div1 = parseInt(document.getElementById("div1").value);

    let word2 = document.getElementById("word2").value;
    let div2 = parseInt(document.getElementById("div2").value);

    let word3 = document.getElementById("word3").value;
    let div3 = parseInt(document.getElementById("div3").value);

    let results = document.getElementById("results");
    results.innerHTML = "";

    for (let i = 1; i <= count; i++) {
        let output = "";

        if (i % div1 === 0) output += word1;
        if (i % div2 === 0) output += word2;
        if (i % div3 === 0) output += word3;

        if (output === "") output = defaultWord;

        let li = document.createElement("li");
        li.textContent = `${i}: ${output}`;
        results.appendChild(li);
    }
});
