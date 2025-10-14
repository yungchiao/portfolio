<template>
    <div>
      <site-navbar :at-top="atTop" @scrollTo="smoothScroll" />
      <header-hero :at-top="atTop" id="header_index" />
  
      <section-about id="section_about" />
      <section-service id="section_service" />
      <section-works id="section_works" />
      <section-contact id="section_contact" />
  
      <footer id="footer" class="text-center bg-secondary">
        <img class="icon" src="https://i.imgur.com/kypAbqH.png" alt="footer" />
      </footer>
    </div>
  </template>
  
  <script>
  import HeaderHero from './components/HeaderHero.vue';
import SectionAbout from './components/SectionAbout.vue';
import SectionContact from './components/SectionContact.vue';
import SectionService from './components/SectionService.vue';
import SectionWorks from './components/SectionWorks.vue';
import SiteNavbar from './components/SiteNavbar.vue';
  
  export default {
    name: 'App',
    components: { SiteNavbar, HeaderHero, SectionAbout, SectionService, SectionWorks, SectionContact },
    data() {
      return { atTop: true }
    },
    mounted() {
      this.onScroll()
      window.addEventListener('scroll', this.onScroll, { passive: true })
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.onScroll)
    },
    methods: {
      onScroll() { this.atTop = window.pageYOffset <= 0 },
      smoothScroll(selector) {
        const el = document.querySelector(selector)
        if (!el) return
        const top = el.getBoundingClientRect().top + window.pageYOffset
        window.scrollTo({ top, behavior: 'smooth' })
      }
    }
  }
  </script>
  
  <style>
  /*（精簡版，全數源自你原始 CSS；如需全部細節我可再補完整檔）*/
  * { font-family: "Oswald", 微軟正黑體; }
  html, body { overflow-x: hidden; font-size: 16px; }
  header { position: relative; background:#333; text-align:center; }
  header .icon { max-width:650px; width:80%; padding:150px 0; margin-bottom:80px; }
  header .marginbottom { position:absolute; width:95%; bottom:0; right:0; z-index:3; animation: upin 2s both; }
  @keyframes upin { 0%{bottom:-100px;} 100%{bottom:0;} }
  header .explore { position:absolute; left:50%; transform:translateX(-50%); top:85%; background:transparent; color:#E6AF2E; opacity:0; transition:.5s; }
  header .explore:after { content:"v"; display:block; transform:scaleX(1.2) scaleY(0.5); }
  header .explore.at_top { opacity:1; }
  
  nav.navbar { border-bottom: 1px solid #fff; transition:.5s; }
  nav.navbar a { transition:.5s; color:#fff; }
  nav.navbar.att_top { background:#f2f2f2; }
  nav.navbar.att_top a, nav.navbar.att_top .nav-link { color:#282f44; }
  nav.navbar.att_top button.navbar-toggler { background-color: rgba(40,47,68, .5); }
  
  section { padding:60px 0; position:relative; }
  .chinese{ margin-left:10px; font-size:20px; }
  
  /* About */
  #section_about { background:#E6AF2E; }
  #section_about h1 { margin-bottom:20px; color:#fff; }
  .line{ margin-bottom:50px; }
  
  /* Service */
  #section_service .col-sm-3 img { width:100%; border-radius:100%; text-align:center; }
  #section_service .col-sm-3 .info.first { margin-top:30px; text-align:center; }
  #section_service .col-sm-3 .info { text-align:center; }
  #section_service .col-sm-9 { padding-left:50px; }
  #section_service .col-sm-9 h4 { color:#E6AF2E; }
  #section_service .lefttiger img { position:absolute; width:25%; right:5px; bottom:0; }
  
  /* Works */
  #section_works { background:#ececec; }
  #section_works .col-sm-3 { text-align:center; padding:20px; }
  #section_works #icon-i { margin-top:30px; }
  #section_works .col-sm-3 .btn { background:#fff; margin-top:10px; transform:rotate(10deg); box-shadow:6px 4px #666; }
  #section_works .col-sm-3 #btn-i { margin-top:50px; }
  #section_works .col-sm-3 .btn:hover { background:#ececec; }
  
  /* Contact */
  #section_contact { background:#282f44; color:#fff; overflow:hidden; }
  #section_contact img.paper { position:absolute; width:95%; top:0; right:0; z-index:4; animation: upin 2s both; }
  #section_contact .mails { max-width:500px; }
  #section_contact .col-sm-6 { z-index:3; margin:200px 0 90px; }
  #section_contact .mailbody { background:#ececec; color:#282f44; padding:20px 20px 20px 40px; transform:translateX(-30px); }
  #section_contact .mailbody label { margin-top:10px; }
  #section_contact .mailbody input, #section_contact .mailbody textarea { display:block; background:transparent; border:3px solid #282f44; padding:1px 2px; width:100%; }
  #section_contact .mailbody textarea { height:140px; }
  #section_contact #cat_blue { width:25%; position:absolute; right:0; bottom:0; padding-bottom:0; z-index:3; }
  
  footer#footer .icon { width:100%; max-width:450px; padding:60px 0; }
  </style>
  