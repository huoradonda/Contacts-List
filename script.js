// Function for meeting at storage location
function saveContactsToLocalStorage(contacts) {
  localStorage.setItem("contacts", JSON.stringify(contacts));
}

// Function to download contacts from local storage
function loadContactsFromLocalStorage() {
  var contacts = localStorage.getItem("contacts");
  if (contacts) {
    return JSON.parse(contacts);
  } else {
    return [];
  }
}

// Function to display saved contacts
function displayContacts() {
  var contactsList = document.getElementById("contactsList");
  contactsList.innerHTML = "";

  var contacts = loadContactsFromLocalStorage();

  contacts.forEach(function(contact, index) {
    var contactElement = document.createElement("div");
    contactElement.className = "contact";
    contactElement.innerHTML = "<h3>" + contact.name + "</h3>" +
                               "<p>Number: " + contact.phone + "</p>" +
                               "<p>Email: " + contact.email + "</p>"
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "deleteButton";
    deleteButton.addEventListener("click", function() {
      deleteContact(index);
    });

    contactElement.appendChild(deleteButton);
    contactsList.appendChild(contactElement);
  });
}

// Function to delete a contact by index
function deleteContact(index) {
  var contacts = loadContactsFromLocalStorage();
  contacts.splice(index, 1); 
  saveContactsToLocalStorage(contacts); 
  displayContacts();
}


// Load contacts on page load
window.addEventListener("load", function() {
  displayContacts();
});

// Form submission handler
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); 

  // Getting values from input fields
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;

  // Create a new contact
  var contact = {
    name: name,
    phone: phone,
    email: email,
  };

  // Loading existing contacts
  var contacts = loadContactsFromLocalStorage();

  // Adding a new contact to the contact list
  contacts.push(contact);

  // Save the updated contact list to local storage
  saveContactsToLocalStorage(contacts);

  // Displaying contacts
  displayContacts();

  // Clearing input fields
  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("email").value = "";
  });

  