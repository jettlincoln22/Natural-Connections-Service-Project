function analyzeMentalHealth() {
    const stressLevel = document.getElementById('stress').value;
    const medStatus = document.getElementById('med-status').value;
    const alertBox = document.getElementById('human-loop-alert');
    const alertMsg = document.getElementById('alert-message');

    let triggerHumanLoop = false;
    let reason = "";

    // Logic: Trigger if stress is high (e.g., 8+) [cite: 21]
    if (stressLevel >= 8) {
        triggerHumanLoop = true;
        reason = "We've noticed you're having a very rough day.";
    }

    // Logic: Trigger if med adherence is at risk [cite: 25, 28]
    if (medStatus === "unsure" || medStatus === "skipping") {
        triggerHumanLoop = true;
        reason = "It sounds like you're struggling with your medication schedule.";
    }

    if (triggerHumanLoop) {
        alertMsg.innerText = reason;
        alertBox.classList.remove('hidden');
        console.log("ALERT: Contacting trusted family member via SMS..."); 
        // In a real app, an API call to Twilio would go here.
    } else {
        alert("Great job checking in! Your patterns look stable today.");
    }
}

function closeAlert() {
    document.getElementById('human-loop-alert').classList.add('hidden');
}
