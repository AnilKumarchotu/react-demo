import React from 'react'

const Regis = () => {
  return (
    <div>
      <section className="gradient-custom">

<div className="container py-5 h-100">
  <div className="row  align-items-center h-100">
    <div className="col-xl-7">
      <div className="card shadow-2-strong card-registration">
        <div className="card-body p-4 p-md-5">
          <center><u><h2 className="mb-4 pb-2 pb-md-0 mb-md-5 gggg">Registration Form</h2></u></center>

          <form>

            <div className="body">
              <div class="container">

              </div>

              <div className="row">
                <div className="col-md-6 mb-4">


                  <div className="form-outline">
                    <input type="text" id="firstName" className="form-control form-control-lg" />
                    <label className="form-label" for="firstName">First Name</label>
                  </div>


                </div>
                <div className="col-md-6 mb-4">

                  <div className="form-outline">
                    <input type="text" id="lastName" className="form-control form-control-lg" />
                    <label className="form-label" for="lastName">Last Name</label>
                  </div>

                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-4 d-flex align-items-center">



                </div>

              </div>

              <div className="row">
                <div className="col-md-12 mb-4 pb-2">

                  <div className="form-outline">
                    <input type="email" id="emailAddress" className="form-control form-control-lg" />
                    <label className="form-label" for="emailAddress">Email</label>
                  </div>

                </div>
              
                
                  <div className="col-md-6 mb-4">
                    <div className="form-outline datepicker w-100">
                      <input type="text" className="form-control form-control-lg" id="Password" />
                      <label for="Password" className="form-label">Password</label>
                    </div>
                  </div>
                
                <div className="col-md-6 mb-4 pb-2">

                  <div className="form-outline">
                    <input type="tel" id="phoneNumber" className="form-control form-control-lg" />
                    <label className="form-label" for="phoneNumber">Phone Number</label>
                  </div>
                    
                </div>
              </div>
            
              
                
                <div className="col-md-6 mb-4">
                  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                    Select Country
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li><a class="dropdown-item" href="#">India</a></li>
                    <li><a class="dropdown-item" href="#">Nepal</a></li>
                    <li><a class="dropdown-item" href="#">Bhutan</a></li>
                    <li><a class="dropdown-item" href="#">Sri Lanka</a></li>
                  </ul>
                </div>
               
                  
                 <div className="col-md-12 mb-4">

                <h6 className="mb-2 pb-1">Select Gender: </h6>

                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                    value="option1" checked />
                  <label className="form-check-label" >Female</label>
                </div>

                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                    value="option2" />
                  <label className="form-check-label" >Male</label>
                </div>

                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                    value="option3" />
                  <label className="form-check-label" for="otherGender">Other</label>
                </div>

               </div>
               
               <div class="form-check d-flex justify-content-left mb-5">
               <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
               <label class="form-check-label" for="form2Example3">
                I agree all statements in <a href="#!">Terms of service</a>
               </label>
               </div>
                <h5>Kindly verify your details before submission.</h5>
               <div className="mt-4 pt-4">
                <div className='rst'>


                  <input className="btn btn-primary btn-lg pull-left" type="Reset" value="Reset" />
                </div>
               </div>
               <div className="mt-0 pt-0">
                <div className='button'>


                  <input className="btn btn-primary btn-lg pull-right" type="submit" value="Submit" />
                </div>
              </div>

            </div>

          </form>


        </div>
      </div>
    </div>

    <div className='col-xl-5'>
      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
        class="img-fluid" alt="Sample image" image-size="100" />
    </div>
  </div>
</div>

</section>
    </div>
  )
}

export default Regis
