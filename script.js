const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('nav');
if(toggle&&nav){toggle.addEventListener('click',()=>nav.classList.toggle('open'));}
document.querySelectorAll('form[data-demo]').forEach(form=>{
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const message=form.querySelector('.form-message');
    if(message) message.textContent='Thank you! Your details have been received (demo only).';
    form.reset();
  });
});
