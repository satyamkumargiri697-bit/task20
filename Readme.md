# Laundry Services Web App

This is a simple and responsive web application for a **Laundry Service**. Users can see different laundry services, add or remove items from their cart, and book an appointment by filling out a form. When they click "Book Now", an email confirmation is sent using **EmailJS**.

This project was built using standard **HTML5**, **CSS3**, and **Vanilla JavaScript** (without any complex frameworks).

---

## Features

* **Responsive Navigation Bar**: Easy to navigate across different sections (Home, Services, About Us, Contact Us).
* **Smooth Scrolling**: Clicking the "Book a Service Today!" button automatically scrolls down to the services section.
* **Dynamic Cart System**: 
  * Add services to the cart with the "Add Item ➕" button.
  * Remove services from the cart with the "Remove Item ➖" button.
  * The Total Amount updates automatically in real-time.
* **Email Confirmation**: Sends an order details email to the user using the EmailJS library when a booking is successfully made.
* **Newsletter Subscription**: A clean newsletter form at the bottom for user interaction.

---

## Files Included

1. **`index.html`** - Contains the layout and structure of the website.
2. **`style.css`** - Contains the styling, colors, and layout management using CSS Flexbox.
3. **`script.js`** - Contains the logic for adding/removing items, calculating the total price, and sending emails.

---

## How to Setup EmailJS

To make the booking form send real emails, you need to link your own EmailJS account:

1. Go to [emailjs.com](https://www.emailjs.com/) and create a free account.
2. Add a **Email Service** (like Gmail).
3. Create an **Email Template** with these exact variables:
   * `{{user_name}}`
   * `{{user_phone}}`
   * `{{to_email}}`
   * `{{order_details}}`
   * `{{total_price}}`
4. Open `index.html` and replace `YOUR_EMAILJS_PUBLIC_KEY` with your actual Public Key.
5. Open `script.js` and replace `YOUR_SERVICE_ID` and `YOUR_TEMPLATE_ID` with your actual IDs.

---

## How to Run the Project

1. Download or clone all 3 files (`index.html`, `style.css`, `script.js`) into the same folder.
2. Double-click the `index.html` file to open it in any modern web browser (like Google Chrome, Brave, or MS Edge).
3. Test the buttons, add some laundry services to your cart, fill the form, and try booking!

---

## Author
* **Student Name**: [satyam]
* **Project Task**: (JS) Project: Laundry Services Web App