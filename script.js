//Select the Elements
const leaveReminderBtn = document.querySelector('#leaveReminderBtn');
const viewRemindersSection = document.querySelector('#viewRemindersSection');
const here = document.querySelector('#here')
const yourRemindersSection = document.querySelector('#yourRemindersSection');
const leaveReminderSection = document.querySelector('#leaveReminderSection')
const newReminderSection = document.querySelector('#newReminderSection');
const leaveReminderButtons = document.querySelector('#leaveReminderButtons');
const sendNewRemindersBtn = document.querySelector('#sendNewRemindersBtn');
const input = document.querySelector('input');
const leaveAnotherReminderBtn = document.querySelector('#leaveAnotherReminderBtn');
const viewRemindersList = document.querySelector('ol');
//Aray
let reminders = [];

// loop through the array and list out on page
const listReminders = (array) => {
    reminders = [];
    for (let item of array){
        viewRemindersList.innerHTML += `<li>${item}</li>`;
    }
}

//when we click the leave reminder button : do this
leaveReminderBtn.addEventListener('click', () => {
    input.style.display = 'none';
    viewRemindersSection.style.display = 'block';
    leaveAnotherReminderBtn.style.display = 'block';
    leaveReminderBtn.style.display ='none';
    reminders.push(input.value); //Adding to the end of the array
    input.value = ''; //reset the value to blank
});

//when we click the here button : do this
here.addEventListener('click', () => {
    yourRemindersSection.style.display = 'block';
    newReminderSection.style.display = 'block';
    leaveReminderSection.style.display = 'none';
    leaveReminderButtons.style.display = 'none';
    viewRemindersSection.style.display = 'none';
    listReminders(reminders);
});

//when we click the send new reminder button : do this
sendNewRemindersBtn.addEventListener('click', () => {
    leaveReminderSection.style.display = 'block';
    leaveReminderButtons.style.display = 'block';
    input.style.display = 'block';
    yourRemindersSection.style.display = 'none';
    newReminderSection.style.display = 'none';
    leaveAnotherReminderBtn.style.display = 'none';
    leaveReminderBtn.style.display ='block';

})

//when we click the leave another reminder button : do this
leaveAnotherReminderBtn.addEventListener('click', () => {
    leaveReminderSection.style.display = 'block';
    viewRemindersSection.style.display = 'none';
    input.style.display = 'block';
    leaveAnotherReminderBtn.style.display = 'none';
    leaveReminderBtn.style.display = 'block';
})