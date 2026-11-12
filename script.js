
const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

// Mobile navigation
menuToggle.addEventListener("click", () => {
  navigation.classList.toggle("active");

  menuToggle.setAttribute(
    "aria-expanded",
    navigation.classList.contains("active")
  );
});

// Close navigation after selecting a link
document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    navigation.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Automatic copyright year
document.getElementById("year").textContent =
  new Date().getFullYear();

// WhatsApp enquiry form
const orderForm = document.getElementById("orderForm");

orderForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("customerName").value.trim();
  const phone = document.getElementById("customerPhone").value.trim();
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value.trim();

  if (!name || !phone || !service) {
    alert("Please complete all required fields.");
    return;
  }

  const whatsappNumber = "2348143011854";

  const text = `Hello Enny Cakes and More!

My name is ${name}.
My phone number is ${phone}.

I'm interested in: ${service}.

Additional details:
${message || "I'd like to make an enquiry."}

I look forward to hearing from you.`;

  const whatsappURL =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

  window.open(whatsappURL, "_blank", "noopener,noreferrer");
});
