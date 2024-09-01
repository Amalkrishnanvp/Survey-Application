document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const mobileMenu = document.querySelector("#mobile-menu");

  const passwordEyeIcon = document.querySelector(".password-eye-icon");
  const showPassword = document.querySelector(".show-password");
  const passwordInput = document.querySelector("#password");

  const confirmPasswordEyeIcon = document.querySelector(
    ".confirm-password-eye-icon"
  );
  const showConfirmPassword = document.querySelector(".show-confirm-password");
  const confirmPasswordInput = document.querySelector("#confirmPassword");

  const loginPasswordEyeIcon = document.querySelector(
    ".login-password-eye-icon"
  );
  const loginShowPassword = document.querySelector(".login-show-password");
  const loginPasswordInput = document.querySelector(".login-password");

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  passwordEyeIcon.addEventListener("click", () => {
    togglePassword();
  });

  showPassword.addEventListener("click", () => {
    togglePassword();
  });

  confirmPasswordEyeIcon.addEventListener("click", () => {
    toggleConfirmPassword();
  });

  showConfirmPassword.addEventListener("click", () => {
    toggleConfirmPassword();
  });

  loginPasswordEyeIcon.addEventListener("click", () => {
    toggleLoginPassword();
  });

  loginShowPassword.addEventListener("click", () => {
    toggleLoginPassword();
  });

  function togglePassword() {
    const passwordType = passwordInput.getAttribute("type");

    if (passwordType === "password") {
      passwordInput.setAttribute("type", "text");
      passwordEyeIcon.classList.add("hide");
      showPassword.classList.remove("hide");
    } else {
      passwordInput.setAttribute("type", "password");
      showPassword.classList.add("hide");
      passwordEyeIcon.classList.remove("hide");
    }
  }

  function toggleConfirmPassword() {
    const passwordType = confirmPasswordInput.getAttribute("type");

    if (passwordType === "password") {
      confirmPasswordInput.setAttribute("type", "text");
      confirmPasswordEyeIcon.classList.add("hide");
      showConfirmPassword.classList.remove("hide");
    } else {
      confirmPasswordInput.setAttribute("type", "password");
      showConfirmPassword.classList.add("hide");
      confirmPasswordEyeIcon.classList.remove("hide");
    }
  }

  function toggleLoginPassword() {
    const passwordType = loginPasswordInput.getAttribute("type");

    if (passwordType === "password") {
      loginPasswordInput.setAttribute("type", "text");
      loginPasswordEyeIcon.classList.add("hide");
      loginShowPassword.classList.remove("hide");
    } else {
      loginPasswordInput.setAttribute("type", "password");
      loginShowPassword.classList.add("hide");
      loginPasswordEyeIcon.classList.remove("hide");
    }
  }
});
