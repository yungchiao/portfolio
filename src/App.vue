<template>
  <div id="app">
    <SiteNavbar :at-top="atTop" @scrollTo="smoothScroll" />
    <router-view />

    <footer id="footer" class="text-center bg-secondary">
      <img class="icon" src="https://i.imgur.com/kypAbqH.png" alt="footer" />
    </footer>
  </div>
</template>

<script>
import SiteNavbar from "../src/components/SiteNavbar.vue";

export default {
  name: "App",
  components: { SiteNavbar },
  data() {
    return { atTop: true };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll, { passive: true });
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      this.atTop = window.pageYOffset <= 0;
    },
    smoothScroll(target) {
      // 不在首頁就先導到首頁並帶 hash
      if (this.$route.name !== "home") {
        this.$router.push({ name: "home", hash: target });
        return;
      }
      // 已在首頁就直接平滑捲動
      const el = document.querySelector(target);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>
