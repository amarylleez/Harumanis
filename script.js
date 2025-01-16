const pricePerKilo = 10;

function calculateTotalPrice(quantity) {
    return quantity * pricePerKilo;
}

function generateReceipt() {
    // Retrieve inputs
    const name = document.getElementById("name").value;
    const quantity = parseInt(document.getElementById("quantity").value);
    const address = document.getElementById("address").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const payment = document.getElementById("payment").value;

    // Calculate total price
    const totalPrice = calculateTotalPrice(quantity);

    // Display the receipt
    document.getElementById("receipt-name").innerText = `Name: ${name}`;
    document.getElementById("receipt-quantity").innerText = `Quantity: ${quantity} kg`;
    document.getElementById("receipt-address").innerText = `Delivery Address: ${address}`;
    document.getElementById("receipt-phone").innerText = `Contact Number: ${phone}`;
    document.getElementById("receipt-email").innerText = `Email Address: ${email}`;
    document.getElementById("receipt-payment").innerText = `Payment Method: ${payment}`;
    document.getElementById("receipt-total").innerText = `Total Price: RM ${totalPrice.toFixed(2)}`;

    // Show the receipt
    document.getElementById("receipt").style.display = "block";

    // Prevent form submission
    return false;
}

function updateDateTime() {
    const dateTimeElement = document.getElementById("current-date-time");
    const now = new Date();
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    };
    dateTimeElement.textContent = now.toLocaleDateString("en-MY", options);
}

// Update the date and time every second
setInterval(updateDateTime, 1000);

// Initialize immediately
updateDateTime();


