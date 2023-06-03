# Contacts Simple Framework Documentation

The Contacts Framework is a simple JavaScript framework designed to manage a list of contacts. It provides a set of functions for adding, deleting, and displaying contacts on a web page.

## Installation

To use the Contacts Framework, you need to include the following files:

1. `script.js`: The main JavaScript file that defines the functions and logic of the framework.
2. `styles.css`: The file containing styles for the framework's appearance.

```html
<!-- Include the framework files -->
<script src="script.js"></script>
<link rel="stylesheet" href="styles.css">
```

## Usage

### 1. Create a Container

First, you need to create a container on your web page where the list of contacts will be displayed. This can be a `<div>` element with a unique identifier:

```html
<div id="contactsList"></div>
```

### 2. Add a Contact

To add a new contact, call the `addContact` function and pass a contact object as an argument. The contact object should have the following properties: `name`, `phone`, `email`, `company`, `additionalInfo`, and `address`.

```javascript
var contact = {
  name: "John Doe",
  phone: "+1 123-456-789",
  email: "john@example.com",
};

addContact(contact);
```

### 3. Delete a Contact

To delete a contact, call the `deleteContact` function and pass the index of the contact in the contacts list. The index is the sequential number of the contact in the list, starting from 0.

```javascript
deleteContact(0); // Delete the first contact
```

### 4. Save and Load Contacts

The Contacts Framework automatically saves the list of contacts to the browser's local storage whenever there is a change (addition or deletion of a contact). When the browser page is refreshed, the list of contacts will be restored.

### 5. Display Contacts

To display the list of contacts on the web page, call the `displayContacts` function. It will automatically load the saved contacts from local storage and create HTML elements for each contact. Then, it will add these elements to the container with the id "contactsList" on the web page.

```javascript
displayContacts();
```

## Example Full Code

Here's an example of the complete code that combines all the previous steps:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Contacts Framework</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Contact List</h1>
  <div id="contactsList"></div>
  <script src="script.js"></script>
</body>
</html>
```
