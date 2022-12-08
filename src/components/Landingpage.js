import React from 'react'
import Navbar2 from './Navbar2';
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
crossorigin="anonymous"></link>

export default function Landingpage() {
  return (
    <div className="landing">

    <div className='page3'>
      <Navbar2/>
      <h1 style={{textAlign: "center",marginTop:"160px", color: "#0d6efd", fontSize:"90px"}}>Welcome to College Eazy</h1>
    </div>
      <div className="about">
        <h2 style={{textAlign: "center",marginTop:"130px", color: "#0d6efd", fontSize:"70px", textDecoration: "underline"}}>ABOUT</h2>
        <div className="para" style={{ background:"aqua"}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere totam, quod incidunt ea ad enim atque provident sed quasi nulla blanditiis veniam numquam, corporis consectetur ab animi aperiam quidem dolores quo officiis. At repellendus delectus, iure animi quo suscipit esse perspiciatis obcaecati dolores inventore soluta nulla praesentium amet deserunt? Enim nobis laudantium debitis quisquam obcaecati non quia, voluptatum animi ipsa, assumenda quos, ducimus fugit. Illum, quos temporibus. Officia minus blanditi, expedita nulla assumenda temporibus. Eos perferendis atque nemo voluptate architecto neque odit enim, exercitationem reprehenderit harum dicta ullam consectetur, odio itaque in distinctio tempora nu, ducimus soluta. Vitae soluta nemo, quis dolore iusto eaque fuga a ab deserunt consectetur dicta quisquam eius sapiente nulla consequatur nisi ducimus vel enim voluptatum impedit, obcaecati dolor aperiam! Illo corrupti laudantium inventore culpa, beatae distinctio ullam! Rem, doloribus.
        </div>
      </div>
<div className="cardss" style={{ display:"flex", flexDirection:"row",justifyContent: "space-around", marginTop:"40px", marginBottom:"40px"}}>

<div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="bg.jpg" class="d-block w-100" alt="photo"></img>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="bg.jpg" class="d-block w-100" alt="photo"></img>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="bg.jpg" class="d-block w-100" alt="photo"></img>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

    
      {/* <div className="card" style={{width: "18rem"}}>
  <img className="card-img-top" src="..." alt="Card image cap"></img>
  <div className="card-body">
    <h5 className="card-title">Notes</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go to Notes </a>
  </div>
</div>
      <div className="card" style={{width: "18rem"}}>
  <img className="card-img-top" src="..." alt="Card image cap"></img>
  <div className="card-body">
    <h5 className="card-title">Attendence</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go to Attendence</a>
  </div>
</div>
      <div className="card" style={{width: "18rem"}}>
  <img className="card-img-top" src="..." alt="Card image cap"></img>
  <div className="card-body">
    <h5 className="card-title">Sell & Buy</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go to Sell & Buy</a>
  </div>
</div> */}
</div>
<div className="footer" style={{background:"grey"}}>
  <span>
    <h5>Contact Us:</h5>
    <div className="contact">
    <p>www.collegeazy.com</p>
    <p>Mobile: +91 76782 58***</p>
    <p>Email: collegeazy@gmail.com</p>
    </div>
    <div style={{textAlign: "center"}}>
    <p >
            Copyright &copy; Mycart.com
    </p>
    </div>
  </span>
</div>
      </div>
  )
}
