var open = document.querySelector(".btn-feedback");
    var modal = document.querySelector(".feedback-form-wrapper");
    var close = modal.querySelector(".feedback__btn-close");
    var userName = modal.querySelector("[name=feedback-name]");
    var userMail = modal.querySelector("[name=feedback-email]");
    var form = modal.querySelector(".feedback-form__content");
    
    open.addEventListener("click", function(evt) {
      evt.preventDefault();
      modal.classList.add("modal-show");
      userName.focus();
    });
    
    close.addEventListener("click", function(evt) {
      evt.preventDefault();
      modal.classList.remove("modal-show");
    });
    
    form.addEventListener("submit", function(evt) {
      if (!userName.value || !userMail.value) {
      evt.preventDefault();
      console.log("¬ведите им€ и почту!");
      }
    });