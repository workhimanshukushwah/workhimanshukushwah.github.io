(function(){
  var s = window.SITE || {};
  document.querySelectorAll('[data-site="name"]').forEach(function(e){e.textContent=s.name;});
  var map = {email:"mailto:"+s.email, linkedin:s.linkedin};
  document.querySelectorAll('[data-link]').forEach(function(a){
    var k=a.dataset.link; a.href=map[k]; if(k==="email") a.textContent=s.email;
  });
  document.getElementById('yr').textContent=new Date().getFullYear();

  var btn=document.querySelector('.menu-btn'), links=document.getElementById('links');
  btn.addEventListener('click',function(){
    var o=links.classList.toggle('open'); btn.setAttribute('aria-expanded',o);
  });
  links.addEventListener('click',function(e){ if(e.target.tagName==='A'){links.classList.remove('open');btn.setAttribute('aria-expanded',false);} });

  // Hero: the JSON response appears line by line once on load.
  var code=document.querySelector('#api code');
  if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    var lines=code.textContent.split('\n'); code.innerHTML='';
    lines.forEach(function(t,i){
      var sp=document.createElement('span'); sp.className='ln'; sp.style.animationDelay=(i*90)+'ms';
      sp.textContent=t; code.appendChild(sp);
    });
  }

  // Contact form: opens the visitor's email app (no backend needed on GitHub Pages).
  var form=document.getElementById('form'), note=document.getElementById('note');
  form.addEventListener('submit',function(e){
    e.preventDefault();
    var d=new FormData(form), n=d.get('name').trim(), m=d.get('email').trim(), msg=d.get('message').trim();
    if(!n||!/\S+@\S+\.\S+/.test(m)||!msg){note.textContent="Enter your name, a valid email and a message.";return;}
    var body=encodeURIComponent(msg+"\n\n– "+n+" ("+m+")");
    window.location.href="mailto:"+s.email+"?subject="+encodeURIComponent("Portfolio enquiry from "+n)+"&body="+body;
    note.textContent="Opening your email app to send the message.";
  });
})();