<template>
  <main class="project-detail">
    <!-- Hero -->
    <section class="hero position-relative text-white">
      <div
        class="hero__bg"
        :style="{ backgroundImage: 'url(' + project.cover + ')' }"
      ></div>
      <div class="container py-5 position-relative">
        <h1 class="display-5 fw-bold">{{ project.title }}</h1>
        <ul class="list-inline mt-3 small opacity-75">
          <li class="list-inline-item me-3">
            <strong>Client:</strong> {{ project.client }}
          </li>
          <li class="list-inline-item me-3">
            <strong>Role:</strong> {{ project.role.join(", ") }}
          </li>
          <li class="list-inline-item">
            <strong>Year:</strong> {{ project.year }}
          </li>
        </ul>
        <div class="mt-3">
          <a
            v-for="(l, i) in project.links"
            :key="i"
            class="btn btn-outline-light btn-sm me-2"
            :href="l.url"
            target="_blank"
            rel="noopener"
            >{{ l.label }}</a
          >
        </div>
      </div>
    </section>

    <!-- Overview -->
    <section class="py-5 bg-light">
      <div class="container">
        <h2 class="h4 mb-3">Overview</h2>
        <p class="mb-0" style="white-space: pre-line">{{ project.overview }}</p>
      </div>
    </section>

    <!-- Gallery -->
    <section v-if="project.gallery && project.gallery.length" class="py-5">
      <div class="container">
        <h2 class="h4 mb-4">Gallery</h2>
        <div class="row g-3">
          <div
            v-for="(img, idx) in project.gallery"
            :key="idx"
            class="col-12 col-md-6 col-lg-4"
          >
            <div class="ratio ratio-4x3 rounded overflow-hidden shadow-sm">
              <img :src="img" class="w-100 h-100 object-fit-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Video -->
    <section v-if="project.video" class="py-5 bg-light">
      <div class="container">
        <h2 class="h4 mb-4">Video</h2>
        <div class="ratio ratio-16x9 rounded overflow-hidden shadow-sm">
          <!-- YouTube -->
          <iframe
            v-if="project.video.type === 'youtube'"
            :src="`https://www.youtube.com/embed/${project.video.id}`"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>

          <!-- 若用 <video> 本地檔案
          <video v-else controls :src="project.video.src"></video>
          -->
        </div>
      </div>
    </section>

    <!-- Features -->
    <section v-if="project.features && project.features.length" class="py-5">
      <div class="container">
        <h2 class="h4 mb-3">Key Features</h2>
        <ul class="list-unstyled mb-0">
          <li v-for="(f, i) in project.features" :key="i" class="mb-2">
            <span>•</span> {{ f }}
          </li>
        </ul>
      </div>
    </section>

    <!-- Process -->
    <section
      v-if="project.process && project.process.length"
      class="py-5 bg-light"
    >
      <div class="container">
        <h2 class="h4 mb-4">Design Process</h2>
        <div class="row g-3">
          <div
            v-for="(step, i) in project.process"
            :key="i"
            class="col-12 col-md-6 col-lg-3"
          >
            <div class="p-3 border rounded h-100">
              <div class="small text-muted mb-1">Step {{ i + 1 }}</div>
              <h3 class="h6 mb-2">{{ step.title }}</h3>
              <p class="mb-0">{{ step.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Credits / CTA -->
    <section class="py-5">
      <div class="container">
        <div class="row g-4">
          <div class="col-12 col-md-8">
            <h2 class="h4 mb-3">Credits</h2>
            <ul class="list-unstyled">
              <li v-for="(c, i) in project.credits" :key="i" class="mb-1">
                <strong class="me-1">{{ c.role }}:</strong> {{ c.name }}
              </li>
            </ul>
          </div>
          <div class="col-12 col-md-4">
            <div class="p-3 border rounded">
              <h3 class="h6">喜歡這個作品嗎？</h3>
              <p class="small text-muted">歡迎與我聯絡，一起討論你的想法！</p>
              <router-link class="btn btn-dark btn-sm" to="/#section_contact"
                >Contact Me</router-link
              >
            </div>
          </div>
        </div>
        <div class="mt-4">
          <router-link class="btn btn-outline-secondary btn-sm" to="/"
            >← Back to Works</router-link
          >
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { findProjectBySlug } from "../../data/project";

export default {
  name: "ProjectDetail",
  props: { slug: { type: String, required: false } },
  data() {
    return { project: null };
  },
  created() {
    const slug = this.$route.params.slug;
    const p = findProjectBySlug(slug);
    if (!p) {
      // 沒找到就回首頁
      this.$router.replace("/");
      return;
    }
    this.project = p;
  },
};
</script>

<style scoped>
.hero {
  min-height: 42vh;
  display: grid;
  align-items: end;
}
.hero__bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  opacity: 0.45;
}
.object-fit-cover {
  object-fit: cover;
}
</style>
