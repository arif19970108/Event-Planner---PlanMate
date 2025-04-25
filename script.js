// Wait for everything to load
document.addEventListener("DOMContentLoaded", () => {

    //  CREATE EVENT button click
    const createBtn = document.querySelector(".create-event");
    if (createBtn) {
      createBtn.addEventListener("click", () => {
        alert("🎉 Create Event feature will be available soon!");
      });
    }
  
    //  RSVP status toggle
    const rsvpCards = document.querySelectorAll(".event-card, .card");
    rsvpCards.forEach((card) => {
      card.addEventListener("click", () => {
        const isAttending = card.classList.contains("attending");
  
        if (isAttending) {
          card.classList.remove("attending");
          card.classList.add("not-attending");
          card.querySelector("p:last-child").innerHTML =
            'Status: Not Attending <img src="assets/cross-icon.png" />';
        } else {
          card.classList.remove("not-attending");
          card.classList.add("attending");
          card.querySelector("p:last-child").innerHTML =
            'Status: Attending <img src="assets/tick-icon.png" />';
        }
      });
    });
  
    //  Fake reminder (console log)
    setTimeout(() => {
      console.log("🔔 Reminder: You have an upcoming event soon!");
    }, 5000);
  });
  