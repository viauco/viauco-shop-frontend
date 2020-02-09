<template>
<footer class="site-footer mt-2">
  <div class="container">
    <div class="columns">
      <div class="column">
        <div class="site-footer__title">Viauco</div> 
        <ul class="site-footer__list multipart">
          <li class="site-footer__item">
            <a href="/about-us" class="">About us</a>
          </li> 
          <li class="site-footer__item">
            <a href="/contact-us" class="">Contact us </a>
          </li> 
          <li class="site-footer__item">
            <a href="/why-alibaba" class="">Why</a>
          </li> 
          <li class="site-footer__item">
            <a href="/loyalty" class="">Loyalty</a>
          </li> 
          <li class="site-footer__item">
            <a href="/policy" class="">Policy</a>
          </li>
        </ul>
      </div> 
      
      <div class="column">
        <div class="site-footer__title">Further</div> 
        <ul class="site-footer__list">
          <li class="site-footer__item">
            <a href="/charter-ticket" class="">Ticket</a>
          </li> 
          <li class="site-footer__item">
            <a href="/purchase-guide?section=domestic-flight" class="">Domitic flight</a>
          </li> 
          <li class="site-footer__item">
            <a href="/purchase-guide?section=international-flight" class="">International flight</a>
          </li> 
          <li class="site-footer__item">
            <a href="/purchase-guide?section=train" class="">Train</a>
          </li> 
          <li class="site-footer__item">
            <a href="/purchase-guide?section=bus" class="">Bus</a>
          </li> 
          <li class="site-footer__item">
            <a href="/purchase-guide?section=international-hotel" class="">Hotel</a>
          </li> 
        </ul>
      </div> 
      <div class="column app-download">
        <div class="site-footer__title">App</div> 
        <p class="hidden-xs hidden-sm">Installing the Alibaba app is the ticket for all trips in your pocket. Experience the easiest, most complete, and most reliable way to get tickets and hotels with the Alibaba app.</p> 
        <div class="app-download__links">
          <a href="javascript:;" class="app-download__link ios-app">
            <img src="@/assets/images/apple-store.svg" alt="Apple store">
          </a> 
          <a href="javascritp:;" target="_blank" rel="noopener noreferrer" class="app-download__link">
            <img src="@/assets/images/google-play.svg" alt="Google Play" />
          </a>  
        </div>
      </div> 
      <div class="column signs-container has-text-centered">
        <img src="https://cdn.alibaba.ir/dist/2329e046/img/ef8be5e.svg" alt="" class="site-footer__logo"> 
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
                <img alt="" src="https://cdn.alibaba.ir/dist/2329e046/img/f1720ad.png" class="clickable">
              </li>
              <li class="signs__enamad">
                <img alt="" src="https://trustseal.enamad.ir/logo.aspx?id=8607&amp;Code=MKrh33vhkzb6UNA2VDkk" class="clickable">
              </li>
              <li class="signs__passengerRights">
                <img alt="" src="https://cdn.alibaba.ir/dist/2329e046/img/9eea7f0.svg" class="clickable">
              </li>
              <li class="signs__stateAirline">
                <img alt="" src="https://cdn.alibaba.ir/dist/2329e046/img/317506d.svg" class="clickable">
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
            <div class="column">
              <p class="copyright">
                <span>All rights reserved by Alibaba Airlines & Tourism Agency.</span> 
                <span>(Version 4.172.2)</span>
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