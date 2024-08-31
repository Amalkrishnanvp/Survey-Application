document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const mobileMenu = document.querySelector("#mobile-menu");
  const passwordEyeIcon = document.querySelector(".password-eye-icon");
  const confirmPasswordEyeIcon = document.querySelector(
    ".confirm-password-eye-icon"
  );
  const passwordInput = document.querySelector("#password");
  const confirmPasswordInput = document.querySelector("#confirmPassword");

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  passwordEyeIcon.addEventListener("click", () => {
    togglePassword();
  });

  confirmPasswordEyeIcon.addEventListener("click", () => {
    toggleConfirmPassword();
  });

  function togglePassword() {
    if (passwordInput.value) {
      const passwordType = passwordInput.getAttribute("type");

      if (passwordType === "password") {
        passwordInput.setAttribute("type", "text");
      } else {
        passwordInput.setAttribute("type", "password");
      }
    }
  }

  function toggleConfirmPassword() {
    if (confirmPasswordInput.value) {
      const passwordType = confirmPasswordInput.getAttribute("type");

      if (passwordType === "password") {
        confirmPasswordInput.setAttribute("type", "text");
      } else {
        confirmPasswordInput.setAttribute("type", "password");
      }
    }
  }
});
