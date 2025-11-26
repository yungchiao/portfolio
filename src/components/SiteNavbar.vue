<template>
  <nav
    class="navbar navbar-expand-lg fixed-top navbar-dark"
    :class="{ att_top: !atTop }"
  >
    <div class="container-fluid">
      <a
        class="navbar-brand"
        href="#header_index"
        @click.prevent="onNavClick('#header_index')"
      >
        Portfolio
      </a>

      <!-- 只用 @click，不用 data-bs-* -->
      <button class="navbar-toggler" type="button" @click="isOpen = !isOpen">
        <span class="navbar-toggler-icon" />
      </button>

      <!-- 用 isOpen 控制 show class -->
      <div :class="['navbar-collapse', 'collapse', { show: isOpen }]" id="nav">
        <ul class="navbar-nav ms-auto mb-2 mb-ml-0">
          <li class="nav-item">
            <a
              class="nav-link"
              href="#section_service"
              @click.prevent="onNavClick('#section_service')"
            >
              Intro
            </a>
          </li>

          <li class="nav-item">
            <a
              class="nav-link"
              href="#section_works"
              @click.prevent="onNavClick('#section_works')"
            >
              Works
            </a>
          </li>

          <li class="nav-item">
            <a
              class="nav-link"
              href="#section_contact"
              @click.prevent="onNavClick('#section_contact')"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "SiteNavbar",
  props: { atTop: { type: Boolean, default: true } },
  data() {
    return {
      isOpen: false, // 控制手機版 menu 收合
    };
  },
  methods: {
    onNavClick(selector) {
      // 叫 App 去滾動
      this.$emit("scrollTo", selector);
      // 點完選單後把 menu 收回去
      this.isOpen = false;
    },
  },
};
</script>
