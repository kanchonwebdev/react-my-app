import Header from './header';
import Footer from './footer';
import img from '../asset/img/1.png';


function About() {
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
        </div>
      <Footer />
    </div>
  )
}

export default About;
