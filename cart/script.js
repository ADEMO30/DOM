document.addEventListener("DOMContentLoaded", function () {
  const plusButtons = document.querySelectorAll(".fa-plus-circle");
  const minusButtons = document.querySelectorAll(".fa-minus-circle");
  const deleteButtons = document.querySelectorAll(".fa-trash-alt");
  const heartButtons = document.querySelectorAll(".fa-heart");
  const totalDisplay = document.querySelector(".total");

  function updateTotal() {
    let total = 0;
    document.querySelectorAll(".card-body").forEach((productCard) => {
      const unitPrice = parseFloat(
        productCard.querySelector(".unit-price").textContent.replace("$", "")
      );
      const quantity = parseInt(
        productCard.querySelector(".quantity").textContent
      );
      total += unitPrice * quantity;
    });
    totalDisplay.textContent = `${total} $`;
  }

  plusButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const quantityEl = btn.parentElement.querySelector(".quantity");
      quantityEl.textContent = parseInt(quantityEl.textContent) + 1;
      updateTotal();
    });
  });

  minusButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const quantityEl = btn.parentElement.querySelector(".quantity");
      const current = parseInt(quantityEl.textContent);
      if (current > 0) {
        quantityEl.textContent = current - 1;
        updateTotal();
      }
    });
  });

  deleteButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".card-body");
      card.remove();
      updateTotal();
    });
  });

  heartButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("liked");
      btn.style.color = btn.classList.contains("liked") ? "red" : "black";
    });
  });
});
