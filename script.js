document
.querySelector("#contact")
.addEventListener("submit", async e => {

    e.preventDefault();

    const form = new FormData(e.target);

    const response = await fetch(
        "https://contact.smurfer42.workers.dev/",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: form.get("name"),
                message: form.get("message"),
                website: form.get("website")
            })
        }
    );


    if (response.ok) {
        alert("Message sent!");
    } else {
        alert("Failed to send.");
    }

});
