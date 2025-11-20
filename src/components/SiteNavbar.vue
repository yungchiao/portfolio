<template>
  <nav
    class="navbar navbar-expand-lg fixed-top navbar-dark"
    :class="{
      att_top: !atTop,
    }"
  >
    <div class="container-fluid">
      <a
        class="navbar-brand"
        href="#header_index"
        @click.prevent="$emit('scrollTo', '#header_index')"
        >Portfolio</a
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#nav"
        aria-controls="nav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div class="collapse navbar-collapse" id="nav">
        <ul class="navbar-nav ms-auto mb-2 mb-ml-0">
          <li class="nav-item">
            <a
              class="nav-link"
              href="#section_about"
              @click.prevent="$emit('scrollTo', '#section_about')"
              >Experience</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#section_service"
              @click.prevent="$emit('scrollTo', '#section_service')"
              >Intro</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#section_works"
              @click.prevent="$emit('scrollTo', '#section_works')"
              >Works</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#section_contact"
              @click.prevent="$emit('scrollTo', '#section_contact')"
              >Contact</a
            >
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
};
</script>
