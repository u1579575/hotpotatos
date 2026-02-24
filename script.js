const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");

// Tracking Attendance
let count = 0;
const maxCount = 50;


// To Handle Form Submission
form.addEventListener("submit", function (e) {
  event.preventDefault();

  //Getting the form values
  const name = nameInput.value;
  const team = teamSelect.value;
 const teamName = teamSelect.selectedOptions[0].text;

  console.log(name, teamName);

// Increment Count
count++
console.log("Total check-ins: ", count);

// Update Progress Bar
const percentage = Math.round((count / maxCount) * 100 ) + "%";
console.log(`Progress: ${percentage}`);

// Update Team counter
const teamCounter = document.getElementById(team + "Count");
teamCounter.textContent = parseInt(teamCounter.textContent) + 1;

// The Message
const message = `🎉Welcome, ${name} from ${teamName}!🎉`;
console.log(message);

form.reset();

// Additional parts post video

(() => {
  const summitForm = document.getElementById("checkInForm");
  const summitNameInput = document.getElementById("attendeeName");
  const summitTeamSelect = document.getElementById("teamSelect");
  const summitGreeting = document.getElementById("greeting");
  const summitAttendeeCount = document.getElementById("attendeeCount");
  const summitProgressBar = document.getElementById("progressBar");
  const summitWaterCount = document.getElementById("waterCount");
  const summitZeroCount = document.getElementById("zeroCount");
  const summitPowerCount = document.getElementById("powerCount");

  const summitGoal = 50;

  let summitTotal = Number(summitAttendeeCount.textContent) || 0;
  let summitTeams = {
    water: Number(summitWaterCount.textContent) || 0,
    zero: Number(summitZeroCount.textContent) || 0,
    power: Number(summitPowerCount.textContent) || 0,
  };

  function summitRender() {
    summitAttendeeCount.textContent = summitTotal;
    summitWaterCount.textContent = summitTeams.water;
    summitZeroCount.textContent = summitTeams.zero;
    summitPowerCount.textContent = summitTeams.power;

    const summitPercent = Math.min((summitTotal / summitGoal) * 100, 100);
    summitProgressBar.style.width = `${summitPercent}%`;
  }

  function summitTeamLabel(teamValue) {
    if (teamValue === "water") return "Team Water Wise";
    if (teamValue === "zero") return "Team Net Zero";
    if (teamValue === "power") return "Team Renewables";
    return "";
  }

  summitRender();

  summitForm.addEventListener(
    "submit",
    function (event) {
      event.preventDefault();
      event.stopImmediatePropagation();

      const summitName = summitNameInput.value.trim();
      const summitSelectedTeam = summitTeamSelect.value;

      if (!summitName || !summitSelectedTeam) return;

      summitTotal += 1;
      summitTeams[summitSelectedTeam] += 1;

      summitRender();

      summitGreeting.textContent = `Welcome, ${summitName}! Checked in to ${summitTeamLabel(
        summitSelectedTeam
      )}.`;
      summitGreeting.classList.add("success-message");
      summitGreeting.style.display = "block";

      summitForm.reset();
      summitNameInput.focus();
    },
    true
  );
})();

});
