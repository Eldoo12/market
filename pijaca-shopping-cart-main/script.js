let ukupna_cijena=0;

function addToCart(element)
{
    let main = element.closest('.single-item');
    let cijena = main.querySelector('.price').innerText;
    let naziv = main.querySelector('h3').innerText;
    let kolicina = main.querySelector('input').value;
    let ispis = document.querySelector('.cart-items');
    let ispis_ukupne = document.querySelector('.total');
    
    
    if(kolicina>0)
    {
       cijena = cijena.substring(1);
       cijena = parseInt(cijena);
       let ukupna=cijena*kolicina;

       ukupna_cijena += ukupna;

       ispis.innerHTML += `<div class="cart-single-item"> 
             <h3> ${naziv}</h3>
             <p>  $${cijena} x ${kolicina}= $<span>${ukupna}</span></p>
             <button onclick="remove(this)">Ukloni</button>
             </div>`;

         document.querySelector('.total').innerText = `Ukupno $${ukupna_cijena}`;    
        element.innerText='Dodato';
        element.setAttribute('disabled', 'true');

       

    }else{
        alert('Dodaj kolicnu');
    }
}

function remove(element)
{
  let main = element.closest('.cart-single-item');
  let cijena = main.querySelector('p span').innerText;
  let ime = main.querySelector('h3').innerText;
  let voce =document.querySelectorAll('.single-item')

  console.log(cijena);

  ukupna_cijena=ukupna_cijena-cijena;
  document.querySelector('.total').innerText = `Ukupno $${ukupna_cijena}`; 
  main.remove();


  voce.forEach(function b(jedno) {
   let vrsta = jedno.querySelector('.si-content h3').innerText;
   console.log(vrsta)
   if(vrsta === ime )
   {
     jedno.querySelector('.actions input').value=0;
     jedno.querySelector('.actions button').removeAttribute('disabled')
     jedno.querySelector('.actions button').innerText='Dodaj';
     

   }


  })
  
}