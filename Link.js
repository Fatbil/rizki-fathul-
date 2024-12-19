const actionLink = document.querySelectorAll(".link-card .link-action");

actionLink.forEach((action) => {
  action.addEventListener("click", (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(action.parentElement.getAttribute("href"));

    /**
     * Untuk memunculkan toast notification
     */
    document.getElementById("toast").innerHTML = `
        <div class="toast-container">
            <p>✅ Link <strong> ${action.parentElement.innerText} </strong> berhasil disalin!</p>
        </div>
    `;

    /**
     * Untuk menghilangkan toast notification
     */

    setTimeout(() => {
      document
        .querySelector("#toast .toast-container")
        .classList.add("toast-gone");
    }, 300);

    setTimeout(() => {
      document.querySelector("#toast .toast-container").remove();
    }, 2000);
  });
});
document.querySelectorAll(".sosmed i").forEach((sosmed) => {
  sosmed.addEventListener("mouseenter", () => {
    sosmed.classList.remove("ph");
    sosmed.classList.add("ph-fill"); 
  });

  sosmed.addEventListener("mouseleave", () => {
    sosmed.classList.remove("ph-fill");
    sosmed.classList.add("ph");
  });
});

document.addEventListener("scroll", (e) => {
  document.querySelector(".bg-text-animation").style.transform = `translateX(${
    window.scrollY / 5
  }px)`;
});



var typed = new Typed('.typing', {
            strings: ["gakpapa, kalau umur segini", "belum bisa kayak yang lain", "jalanin aja dulu sebisanya", " wa ufawwididuamri ilallah", "QS. AL GHAFIR:44"],
            typeSpeed: 100,
            loop: true,
            showCursor: true,
            cursorChar: '|',
            startDelay: 1000,
            fadeOut: true,
        });