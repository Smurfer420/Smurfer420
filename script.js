const form = document.querySelector("#contact");
const button = document.querySelector("#send");
const status = document.querySelector("#status");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = new FormData(form);

    button.classList.add("loading");
    button.disabled = true;
    status.textContent = "";
    status.className = "";

    try {
        const response = await fetch(
            "https://contact.smurfer42.workers.dev",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: data.get("name"),
                    message: data.get("message"),
                    website: data.get("website")
                })
            }
        );

        if (response.ok) {
            status.textContent = "✓ Message sent!";
            status.classList.add("success");
            form.reset();
        } else {
            status.textContent = "✗ Failed to send.";
            status.classList.add("error");
        }
    } catch (error) {
        status.textContent = "✗ Connection error.";
        status.classList.add("error");
    }

    button.classList.remove("loading");
    button.disabled = false;
});
