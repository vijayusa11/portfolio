import emailjs from "emailjs-com";
import React from 'react';

export default function ContactPage() {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('gmail', 'template_om6i5uq', e.target, 'user_nAQbhQPhOKgwK60N6z3Sb')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    (function () {
        'use strict'
      
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation')
      
        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
          .forEach(function (form) {
            form.addEventListener('submit', function (event) {
              if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
              }
      
              form.classList.add('was-validated')
            }, false)
          })
      })()

    return(
        <div>
            <br />
                    <div className="container">
                        
                        <form class="row g-3 needs-validation" novalidate onSubmit={sendEmail}>
                            <div class="col-8 form-group pt-2 mx-auto">
                               
                                <input type="text" class="form-control" id="validationCustom01" placeholder="Name" name="name" required />
                                <div class="valid-feedback">
                                Looks good!
                                </div>
                            </div>

                            <div class="col-8 form-group pt-2 mx-auto">
                               
                               <input type="email" class="form-control" id="validationCustom02" placeholder="Email" name="email" required />
                               <div class="valid-feedback">
                               Looks good!
                               </div>
                           </div>

                           <div class="col-8 form-group pt-2 mx-auto">
                               
                               <input type="text" class="form-control" id="validationCustom03" placeholder="Subject" name="subject" required />
                               <div class="valid-feedback">
                               Looks good!
                               </div>
                               <div id="validationServerUsernameFeedback" class="invalid-feedback">
        Please choose a username.
      </div>
                           </div>

                           <div class="col-8 form-group pt-2 mx-auto">
                               
                           <textarea className="form-control" id="validationCustom04" cols="30" rows="8" placeholder="Your message" name="message" required />
                               <div class="valid-feedback">
                               Looks good!
                               </div>
                           </div>

                           <div class="col-8 form-group pt-2 mx-auto">
                            <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                            <label class="form-check-label" for="invalidCheck2">
                                Agree to terms and conditions
                            </label>
                            </div>
                            </div>
  
                            <div className="col-8 pt-3 mx-auto">
                                <input type="submit" className="btn btn-info" value="Send Message"></input>
                            </div>
                            
                        </form>
                    </div>
                
            
        </div>
    )
}