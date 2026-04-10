let div = document.getElementById("result");
let input = document.getElementById("searchInput");

const contacts = [
    { name: "Alice", phone: "123-456-7890" },
    { name: "Bob", phone: "987-654-3210" },
    { name: "Charlie", phone: "555-555-5555" }
];


searchButton.addEventListener("click", function() {
    for (let i = 0; i < contacts.length; i++) {
        let contact = contacts[i];

        if (input.value.toLowerCase() === contact.name.toLowerCase()) {
            div.innerHTML = `Name: ${contact.name}, Phone: ${contact.phone}`;
        }
    }
});