document.addEventListener('DOMContentLoaded',() => {
    const form= document.getElementById('contactForm');
    const feedback=document.getElementById('formFeedback');

    form.addEventListener('submit',(event) =>{
        event.preventDefault();

        const fullName = document.getElementById('fullName').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        if(!fullName || !email  || !subject || !message){
            feedback.style.color='#f87171';
            feedback.textContent='Please fill in all fields before sumbtting.';
            
            return;
            if(!email.includes('@')){
                feedback.style.color='#f87171'
                feedback.textContent= 'Please enter a valid email address'
            }
        }
        feedback.style.color= '#34d399';
        feedback.textContent='Thank you, ${fullName}! Your message has been routed to Gonzaga Tech Engineers.';

        form.reset();
    });
});