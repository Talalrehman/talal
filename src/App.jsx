import React from 'react'
import Img from "./images/images-7.jpg"
import "./App.css"
function App() {
  return (
    <div className="container  border  border-primary align-items-center" >
<div className="  row border border-danger p-4 ">
    <h1>Publicity offers to the media</h1>
<div className='col-lg-5 col-md-6 col-sm-12 col-12 p-4 border border-primary '>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, sed aut consectetur nobis ipsam, provident libero repellat blanditiis eum ipsum possimus molestias quas nihil pariatur, deleniti enim voluptatum. Possimus, impedit.
    Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/><br/>  Accusamus quisquam non neque doloremque itaque nesciunt modi accusantium, similique odit deleniti laudantium, perferendis a commodi! Excepturi quibusdam non porro optio consequuntur.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam reiciendis facere iusto rerum optio, itaque ex distinctio! Quaerat saepe recusandae voluptates officia fugiat! Vero, expedita et. Corrupti deleniti et quo!
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic beatae<br/><br/> laudantium eos maxime tempora nam repellat earum vitae repellendus porro cupiditate reiciendis, ad deserunt minus dolorum assumenda nemo voluptate sequi!
    


</div>
<div className='back col-lg-7 col-md-6 col-sm-12 col-12 d-flex justify-content-center p-4 border border-secondry'> 
{/* <img src={Img} class="img-fluid" alt="..."> */}
  {/* </img> */}
    <div className='col-lg-5 col-md-6 col-sm-12 border border-primary bg-white p-2'>
    <form>
  <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail3"/>
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Pass</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword3"/>
    </div>
  </div>
  <fieldset class="row mb-3">
    <legend class="col-form-label col-sm-2 pt-0">Radios</legend>
    <div class="col-sm-10">
      <div class="form-check">
        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
        <label class="form-check-label" for="gridRadios1">
          First radio
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
        <label class="form-check-label" for="gridRadios2">
          Second radio
        </label>
      </div>
      <div class="form-check disabled">
        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled/>
        <label class="form-check-label" for="gridRadios3">
          Third disabled radio
        </label>
      </div>
    </div>
  </fieldset>
  <div class="row mb-3">
    <div class="col-sm-10 offset-sm-2">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck1"/>
        <label class="form-check-label" for="gridCheck1">
          Example checkbox
        </label>
      </div>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Sign in</button>
</form>

    </div>

  </div>
</div>
    </div>
  )
}

export default App