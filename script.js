// Global Array to hold selected services (Cart)
var cartItems = [];
var totalAmount = 0;

// 1. HERO BUTTON CLICK: Scroll to Booking Section
// As per the requirement in Screenshot 2026-06-09 211429.png
document.getElementById("hero-book-btn").addEventListener("click", function() {
    var targetSection = document.getElementById("services-section");
    targetSection.scrollIntoView({ behavior: "smooth" });
});

// 2. ADD ITEM TO CART FUNCTION
function addItem(serviceName, price) {
    // Push item details as a simple object into our array
    cartItems.push({
        name: serviceName,
        price: price
    });
    
    // Update the UI Table and Total
    updateCartUI();
}

// 3. REMOVE ITEM FROM CART FUNCTION
function removeItem(serviceName, price) {
    // Find the item index from the end or beginning
    var indexToRemove = -1;
    for (var i = 0; i < cartItems.length; i++) {
        if (cartItems[i].name === serviceName) {
            indexToRemove = i;
            break; // Stop at first match
        }
    }

    // If found, remove it using splice
    if (indexToRemove !== -1) {
        cartItems.splice(indexToRemove, 1);
    } else {
        alert("This item is not in your cart!");
    }

    // Update the UI Table and Total
    updateCartUI();
}

// 4. FUNCTION TO REDRAW THE CART TABLE
function updateCartUI() {
    var tbody = document.getElementById("cart-body");
    // Clear previous rows completely
    tbody.innerHTML = "";
    
    totalAmount = 0;

    // Loop through the array to build table rows (Student Style)
    for (var i = 0; i < cartItems.length; i++) {
        var row = document.createElement("tr");

        // Serial Number Column
        var tdSerial = document.createElement("td");
        tdSerial.innerText = i + 1;
        row.appendChild(tdSerial);

        // Service Name Column
        var tdName = document.createElement("td");
        tdName.innerText = cartItems[i].name;
        row.appendChild(tdName);

        // Price Column
        var tdPrice = document.createElement("td");
        tdPrice.innerText = "₹" + cartItems[i].price.toFixed(2);
        row.appendChild(tdPrice);

        // Append whole row to body
        tbody.appendChild(row);

        // Add to total
        totalAmount += cartItems[i].price;
    }

    // Update the Total Amount Text
    document.getElementById("total-amount").innerText = "₹" + totalAmount.toFixed(2);
}

// 5. BOOK NOW FORM SUBMISSION WITH EMAILJS
document.getElementById("booking-form").addEventListener("submit", function(event) {
    // Prevent default reloading behavior of form
    event.preventDefault();

    // Check if cart is empty
    if (cartItems.length === 0) {
        alert("Please add at least one service to your cart before booking!");
        return;
    }

    // Fetch values from inputs
    var fullName = document.getElementById("cust-name").value;
    var emailId = document.getElementById("cust-email").value;
    var phoneNo = document.getElementById("cust-phone").value;

    // Create a readable string of ordered items for the email text
    var orderedServicesString = "";
    for (var j = 0; j < cartItems.length; j++) {
        orderedServicesString += (j + 1) + ". " + cartItems[j].name + " (₹" + cartItems[j].price + ")\n";
    }

    // Prepare parameters matching your EmailJS Template variables
    var templateParams = {
        to_email: emailId, // Sends an email to the user's provided address
        user_name: fullName,
        user_phone: phoneNo,
        order_details: orderedServicesString,
        total_price: "₹" + totalAmount.toFixed(2)
    };

    // Send via EmailJS (Make sure you configure Service ID and Template ID inside EmailJS dashboard)
    // Replace "YOUR_SERVICE_ID" and "YOUR_TEMPLATE_ID" with actual ones
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
        .then(function(response) {
            console.log("SUCCESS!", response.status, response.text);
            
            // Show custom dynamic confirmation message below the button
            var confirmationMsg = document.getElementById("confirmation-msg");
            confirmationMsg.innerText = "Thank you For Booking the Service We will get back to you soon!";
            confirmationMsg.style.display = "block"; // Make it visible

            // Reset the form and the cart after successful booking
            document.getElementById("booking-form").reset();
            cartItems = [];
            updateCartUI();

        }, function(error) {
            console.log("FAILED...", error);
            alert("Oops... Something went wrong with the email service.");
        });
});

// 6. NEWSLETTER FORM (Simple Student Alert)
document.getElementById("newsletter-form").addEventListener("submit", function(e) {
    e.preventDefault();
    var newsName = document.getElementById("news-name").value;
    alert("Thank you " + newsName + " for subscribing to our newsletter!");
    document.getElementById("newsletter-form").reset();
});