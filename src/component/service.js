import Header from './header';
import Footer from './footer';
import img from '../asset/img/1.png';


function Service() {
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
        </div>
      <Footer />
    </div>
  )
}

export default Service;
