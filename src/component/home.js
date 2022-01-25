import Header from './header';
import Footer from './footer';
import img from '../asset/img/1.png';


function Home() {
  return (
    <div>
      <Header />
        <div>      
          <div class="hero">
              <div class="hero-container">
                  <div class="hero-left">
                      <div class="hero-left-header">
                          Dr. Fency <br />
                          Jaman
                      </div>

                      <p>Reliable and Affordable Family Doctor</p>

                      <div class="hero-left-phone">
                          <div class="hero-left-phone-left">
                              <span class="fa fa-phone"></span>
                          </div>

                          <div class="hero-left-phone-right">
                              <b>+0 (000) 000-00-00</b>
                              <span>Call Now and Get a FREE Consultation</span>
                          </div>
                      </div>

                      <address>
                          2965 Pine Garden Ln.
                          Nelson, GA 30107
                      </address>
                  </div>

                  <div class="hero-right">
                      <img src={img} width="100%" height="100%" alt="" class="hero-right-img" />
                  </div>
              </div>
          </div>

          <div class="help">
              <div class="help-container">
                  <div class="help-block">
                      <div class="help-block-left">
                          <span class="fa fa-medkit"></span>
                      </div>

                      <div class="help-block-right">
                          <b>Outpatient Medicine</b>

                          <p>
                              Our medical clinic provides quality care for the entire family while maintaining a personable atmosphere.
                          </p>
                      </div>
                  </div>

                  <div class="help-block">
                      <div class="help-block-left">
                          <span class="fa fa-user"></span>
                      </div>

                      <div class="help-block-right">
                          <b>Pediatric Services</b>

                          <p>
                              Make sure your child is hitting all their benchmarks while growing up, and getting properly immunized.
                          </p>
                      </div>
                  </div>

                  <div class="help-block">
                      <div class="help-block-left">
                          <span class="fa fa-briefcase"></span>
                      </div>

                      <div class="help-block-right">
                          <b>Urgent Care Services</b>

                          <p>
                              Quick, convenient care for non-emergency illnesses and injuries.
                          </p>
                      </div>
                  </div>
              </div>
          </div>

          <div class="shedule">
              <div class="shedule-container">
                  <div class="shedule-left">
                      <div class="open-block">
                          <div class="open-header">Opening Hours</div>

                          <div class="open-content">
                              <div>Monday - Friday</div>
                              <div>8:00 AM - 3:30 AM</div>
                          </div>

                          <div class="open-content">
                              <div>Saturday</div>
                              <div>9:00 AM - 1:30 AM</div>
                          </div>

                          <div class="open-content">
                              <div>Sunday</div>
                              <div>Closed</div>
                          </div>
                      </div>

                      <div class="visit-block">
                          <div class="open-header">Visitors Hours</div>

                          <div class="open-content">
                              <div>Monday - Friday</div>
                              <div>8:00 AM - 3:30 AM</div>
                          </div>

                          <div class="open-content">
                              <div>Saturday</div>
                              <div>9:00 AM - 1:30 AM</div>
                          </div>

                          <div class="open-content">
                              <div>Sunday</div>
                              <div>Closed</div>
                          </div>
                      </div>
                  </div>

                  <div class="shedule-right">
                      <div class="shedule-right-block">
                          <div class="shedule-right-header">Why People Choose My <span>Chamber</span></div>
                          
                          <div class="shedule-right-content">
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="about">
              <div class="about-container">
                  <div class="about-left">
                      <img src={img} width="100%" height="100%" class="about-left-img" alt="" />
                  </div>

                  <div class="about-right">
                      <div class="about-right-header">About Dr. Fency Jaman, Family Doctor</div>
                      <address>Dr. Fency Jaman is one of the top family medicine practitioners in the World.</address>
                      <p>As one of the most experienced family doctors in the area, Dr. Fency has experience in emergency medicine and physical therapy. Her professional background allows her to deliver the utmost level of health care for her patients. You can expect high-quality approach from Dr. Fency</p>
                      
                      <div class="about-right-block">
                          <div><span class="fa fa-check"></span> Emergency & express care services</div>
                          <div><span class="fa fa-check"></span> Home care & medication therapy management</div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="counter">
              <div class="counter-container">
                  <div class="counter-block">
                      <span class="fa fa-briefcase"></span>
                      <b>10+</b>
                      <h6>Years of experience</h6>
                  </div>

                  <div class="counter-block">
                      <span class="fa fa-smile-o"></span>
                      <b>2599+</b>
                      <h6>Happy Patients</h6>
                  </div>

                  <div class="counter-block">
                      <span class="fa fa-user"></span>
                      <b>150+</b>
                      <h6>Number of Doctors</h6>
                  </div>

                  <div class="counter-block">
                      <span class="fa fa-users"></span>
                      <b>250+</b>
                      <h6>Number of Staffs</h6>
                  </div>
              </div>
          </div>

          <div class="range">
              <div class="range-container">
                  <div class="range-header">
                      I Offer a Whole Range of Medical Services
                  </div>

                  <div class="range-block">
                      <div class="range-block-header"><span>01.</span> Doctor's Consultation</div>
                      <div class="range-content"></div>
                  </div>

                  <div class="range-block">
                      <div class="range-block-header"><span>02.</span> Diagnostic Services</div>
                      <div class="range-content"></div>
                  </div>

                  <div class="range-block">
                      <div class="range-block-header"><span>03.</span> Urgent Care</div>
                      <div class="range-content"></div>
                  </div>

                  <div class="range-block">
                      <div class="range-block-header"><span>04.</span> Primary Care</div>
                      <div class="range-content"></div>
                  </div>

                  <div class="range-block">
                      <div class="range-block-header"><span>05.</span> Annual Wellness Physical</div>
                      <div class="range-content"></div>
                  </div>
              </div>
          </div>

          <div class="review">
              <div class="review-container">
                  <div class="review-header">What's Patient Say</div>
                  
                  <div class="review-img-block">
                      <span class="fa fa-angle-left"></span>
                      <img src={img} width="100%" height="100%" alt="" class="review-img" />
                      <span class="fa fa-angle-right"></span>
                  </div>

                  <div class="review-text">
                      <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores rem ratione consectetur tempora nisi modi necessitatibus reprehenderit vel id atque, suscipit voluptate laborum nihil accusantium quibusdam autem veniam obcaecati eligendi.</h5>

                      <section>
                          <b>Helena Deo</b>
                      </section>
                  </div>

                  <div class="review-dot-block">
                      <div class="review-dot"></div>
                      <div class="review-dot"></div>
                      <div class="review-dot"></div>
                  </div>
              </div>
          </div>

          <div class="contact">
              <div class="contact-container">
                  <div class="contact-header">Get in Touch</div>
                  
                  <div class="contact-content">
                      <div class="contact-left">
                          <div class="contact-left-header">Make an Appointment</div>

                          <form action="" class="contact-left-content">
                              <div class="contact-left-block">
                                  <input type="text" name="" placeholder="Patient Full Name" class="patient-text-field" id="" />
                                  <input type="email" name="" placeholder="Email Address" class="patient-text-field" id="" />    
                              </div>

                              <div class="contact-left-block">
                                  <input type="text" name="" placeholder="Subject" class="patient-text-field" id="" />
                              </div>

                              <div class="contact-left-block">
                                  <input type="date" name="" placeholder="Appointment Date" class="patient-text-field" id="" />
                              </div>

                              <div class="contact-left-block">
                                  <textarea name="" id="" cols="10" rows="5" placeholder="Write Description" class="patient-text-field"></textarea>
                              </div>

                              <input type="submit" value="REGISTER APPOINTMENT" class="app-btn" />
                          </form>
                      </div>

                      <div class="contact-right">
                          <div class="contact-right-block">
                              <div class="contact-right-block-left">
                                  <span class="fa fa-map-marker"></span>
                              </div>

                              <div class="contact-right-block-right">
                                  <h4>Our Address</h4>
                                  <section>
                                      2292 Peachtree Rd NW <br />
                                      Atlanta, GA, United States
                                  </section>
                              </div>
                          </div>

                          <div class="contact-right-block">
                              <div class="contact-right-block-left">
                                  <span class="fa fa-phone"></span>
                              </div>

                              <div class="contact-right-block-right">
                                  <h4>Contact us</h4>
                                  <section>
                                      <span>+0000 000 0000</span>
                                      <span>doctor@medicalclinic.com</span>
                                  </section>
                              </div>
                          </div>

                          <div class="contact-right-block">
                              <div class="contact-right-block-left">
                                  <span class="fa fa-clock-o"></span>
                              </div>

                              <div class="contact-right-block-right">
                                  <h4>Our Address</h4>
                                  <section>
                                      <span>Monday - Friday 8:00 AM - 3:30 AM</span>
                                      <span>Saturday 9:00 AM - 1:30 AM</span>
                                  </section>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      <Footer />
    </div>
  )
}

export default Home;
