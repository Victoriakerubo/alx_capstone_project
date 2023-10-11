document.getElementById('task-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const accountPlanName = document.getElementById('account-plan-name').value;
    const accountName = document.getElementById('account-name').value;
    const dateOfVisit = document.getElementById('date-of-visit').value;
    const meetingStatus = document.getElementById('meeting-status').value;
    const contactPersonName = document.getElementById('contact-person-name').value;
    const emailAddress = document.getElementById('email-address').value;
    const meetingNotes = document.getElementById('meeting-notes').value;
    const nextMeetingDate = document.getElementById('next-meeting-date').value;

    // You can save this data, display it, or perform other actions here
    console.log({
        accountPlanName,
        accountName,
        dateOfVisit,
        meetingStatus,
        contactPersonName,
        emailAddress,
        meetingNotes,
        nextMeetingDate,
    });

    // Clear the form
    this.reset();
});
