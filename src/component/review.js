import Header from './header';
import Footer from './footer';
import img from '../asset/img/1.png';


function Review() {
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
        </div>
      <Footer />
    </div>
  )
}

export default Review;
