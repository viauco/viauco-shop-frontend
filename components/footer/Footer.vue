<template>
<footer class="site-footer mt-2">
  <div class="container">
    <div class="columns">
      <div class="column">
        <div class="site-footer__title">Viauco</div> 
        <ul class="site-footer__list multipart">
          <li class="site-footer__item">
            <nuxt-link :to="localePath({name: 'apps-about'})">About us</nuxt-link>
          </li> 
          <li class="site-footer__item">
            <nuxt-link :to="localePath({name: 'apps-contact'})">Contact us</nuxt-link>
          </li> 
          <li class="site-footer__item">
            <nuxt-link :to="localePath({name: 'apps-why'})">Why</nuxt-link>
          </li> 
          <li class="site-footer__item">
            <nuxt-link :to="localePath({name: 'apps-term'})">Term</nuxt-link>
          </li> 
          <li class="site-footer__item">
            <nuxt-link :to="localePath({name: 'apps-policy'})">Policy</nuxt-link>
          </li>
        </ul>
      </div> 
      
      <div class="column">
        <div class="site-footer__title">Further</div> 
        <ul class="site-footer__list">
          <li class="site-footer__item">
            <nuxt-link :to="localePath({name: 'index'})">Ticket</nuxt-link>
          </li> 
          <li class="site-footer__item">
            <nuxt-link :to="localePath({name: 'index'})">Domitic flight</nuxt-link>
          </li> 
          <li class="site-footer__item">
            <nuxt-link :to="localePath({name: 'index'})">International flight</nuxt-link>
          </li> 
          <li class="site-footer__item">
            <nuxt-link :to="localePath({name: 'index'})">Train</nuxt-link>
          </li> 
          <li class="site-footer__item">
            <nuxt-link :to="localePath({name: 'index'})">Bus</nuxt-link>
          </li> 
          <li class="site-footer__item">
            <nuxt-link :to="localePath({name: 'index'})">Hotel</nuxt-link>
          </li> 
        </ul>
      </div> 
      <div class="column app-download">
        <div class="site-footer__title">App</div> 
        <p class="hidden-xs hidden-sm">Installing the Alibaba app is the ticket for all trips in your pocket. Experience the easiest, most complete, and most reliable way to get tickets and hotels with the Alibaba app.</p> 
        <div class="app-download__links">
          <a href="javascript:;" class="app---download-link ios-app">
            <img src="/images/apple-store.svg" alt="Apple store">
          </a> 
          <a href="javascritp:;" target="_blank" rel="noopener noreferrer" class="app---download-link">
            <img src="/images/google-play.svg" alt="Google Play" />
          </a>  
        </div>
      </div> 
      <div class="column signs-container has-text-centered">
        <div class="site-footer__title">Company</div> 
            <ul class="contact-info">
              <li class="contact-info__address">
              Kahtarya, Andersugo Boulevard, corner of North Baloch Alley, No. 2
              </li> 
              <li class="contact-info__phone clearfix">
                <span>Support phone</span> 
                <span class="ltr">0912345555</span> |
                <span class="ltr">(+84) 240-1234</span>
              </li>
            </ul> 
            <ul class="signs">
              <li class="signs__virtualBusinesses">
                <img alt="" src="/images/app.svg" class="clickable">
              </li>
              <li class="signs__enamad">
                <img alt="" src="/images/app.svg" class="clickable">
              </li>
              <li class="signs__passengerRights">
                <img alt="" src="/images/app.svg" class="clickable">
              </li>
              <li class="signs__stateAirline">
                <img alt="" src="/images/app.svg" class="clickable">
              </li>
            </ul>
          </div>
        </div>
      </div> 
      <div class="copyright-socials">
        <div class="container">
          <div class="columns">
            
            <div class="column has-text-left">
              <ul class="socials">
                <li class="socials__aparat">
                  <a href="#" target="_blank" class="icon" :title="$t('FacebookTooltip')">
                    <app-icon file="zocial" id="si-zocial-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" class="icon" :title="$t('TwitterTooltip')">
                    <app-icon file="zocial" id="si-zocial-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" class="icon" :title="$t('InstagramTooltip')">
                    <app-icon file="zocial" id="si-zocial-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" class="icon" :title="$t('LinkedinTooltip')">
                    <app-icon file="zocial" id="si-zocial-linkedin" />
                  </a>
                </li>
                
              </ul>
            </div>
            <div class="column has-text-right">
              <p class="copyright">
                <span>All rights reserved by Viauco.</span> 
              </p>
            </div> 
          </div>
        </div>
      </div>
    </footer>
</template>

<script>
export default {
  name: 'VmFooter',
}
</script>