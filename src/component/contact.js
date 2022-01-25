import Header from './header';
import Footer from './footer';
import img from '../asset/img/1.png';


function Contact() {
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

export default Contact;
