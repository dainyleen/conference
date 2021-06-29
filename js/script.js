// Create a variable to "Name" input field
const nameInput = document.getElementById('name')
//Give name input field focus
nameInput.focus()

// Create variables to reference the "Job Role" and the "Other Job Role"
const jobRole = document.getElementById('title')
const otherJobRole = document.getElementById('other-job-role')

// Hide "Other Job Role" by default
otherJobRole.style.display = 'none'

// Display "Other Job Role" when selected
jobRole.addEventListener('change', (e) => {
  if (e.target.value == 'other') {
    otherJobRole.style.display = 'inherit'
  } else {
    otherJobRole.style.display = 'none'
  }
})
