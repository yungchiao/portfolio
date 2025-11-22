<template>
  <main class="project-detail">
    <!-- Hero -->
    <section
      class="hero position-relative text-white section-top"
      :class="project.cover === cafe ? 'text-white' : 'text-grey'"
    >
      <div
        :class="project.cover === cafe ? 'hero__bg_cafe' : 'hero__bg'"
        :style="{ backgroundImage: 'url(' + project.cover + ')' }"
      ></div>
      <div class="container py-5 position-relative">
        <h1 class="display-5 fw-bold">{{ project.title }}</h1>
        <ul class="list-inline mt-3 small opacity-75" style="margin-top: 40px">
          <li class="list-inline-item me-3" v-if="project.client.length > 0">
            <strong>Client:</strong> {{ project.client }}
          </li>
          <li class="list-inline-item me-3">
            <strong>Role:</strong> {{ project.role.join(", ") }}
          </li>
          <li class="list-inline-item">
            <strong>Year:</strong> {{ project.year }}
          </li>
          <div style="margin-top: 20px">
            <li class="list-inline-item" v-for="(item, i) in project.headline">
              <strong>{{ item }}</strong>
            </li>
          </div>
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
        <h2
          class="h4 mb-3"
          style="border-bottom: 1px solid #ccc; padding-bottom: 20px"
        >
          Overview
        </h2>
        <p class="mb-0" style="white-space: pre-line">{{ project.overview }}</p>
      </div>
    </section>

    <!-- Gallery -->
    <section v-if="project.gallery && project.gallery.length" class="py-5">
      <div class="container">
        <h2 class="h4 mb-4" style="margin-bottom: 30px">Gallery</h2>
        <div class="row g-3">
          <div
            v-for="(item, idx) in project.gallery"
            :key="idx"
            class="col-12 col-md-6 col-lg-4"
          >
            <div class="mb-2 fw-semibold">{{ item.title }}</div>
            <div
              class="ratio ratio-4x3 rounded overflow-hidden shadow-sm gallery-thumb"
              @click="openLightbox(item.img)"
            >
              <img :src="item.img" class="w-100 h-100 object-fit-cover" />
            </div>
          </div>
        </div>
      </div>

      <!-- Lightbox 放大檢視 -->
      <div
        v-if="lightboxImage"
        class="lightbox-backdrop"
        @click="closeLightbox"
      >
        <div class="lightbox-content" @click.stop>
          <button class="lightbox-close" @click="closeLightbox">×</button>
          <img :src="lightboxImage" class="lightbox-img" />
        </div>
      </div>
    </section>

    <!-- Video -->
    <section v-if="project.video" class="py-5 bg-light">
      <div class="container">
        <h2 class="h4 mb-4">{{ project.video.title }}</h2>
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
            <span v-html="f"></span>
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
              <div v-if="Array.isArray(step.text)">
                <ul>
                  <li v-for="item in step.text" :key="item">{{ item }}</li>
                </ul>
              </div>
              <div v-else>
                <p class="mb-0">{{ step.text }}</p>
              </div>
              <div v-if="step.bullets">
                <ul>
                  <li v-for="item in step.bullets" :key="item">{{ item }}</li>
                </ul>
              </div>
              <div v-if="step.footer">
                <p>{{ step.footer }}</p>
              </div>
              <div v-if="step.img" :style="{ width: '20%' }">
                <img :src="step.img" class="step-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Credits / CTA -->
    <!-- <section class="py-5">
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
    </section> -->
  </main>
</template>

<script>
import cafe from "../../assets/cafe/cafe_header.jpg";
import { findProjectBySlug } from "../../data/project";
export default {
  name: "ProjectDetail",
  props: { slug: { type: String, required: false } },
  data() {
    return { project: null, lightboxImage: null, cafe };
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
  methods: {
    openLightbox(img) {
      this.lightboxImage = img;
    },
    closeLightbox() {
      this.lightboxImage = null;
    },
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
  background-size: 50%;
  background-position: 60% 20%;
  background-repeat: no-repeat;
}
.hero__bg_cafe {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.rounded {
  position: relative;
}
.step-img {
  position: absolute;
  width: 30%;
  height: auto;
  bottom: 10px;
  right: 10px;
}
.object-fit-cover {
  object-fit: cover;
}
.section-top {
  margin-top: 60px;
}
.display-5 {
  color: #e6af2e;
}
.list-inline-item {
  display: block;
}
.btn-sm {
  color: #666;
  border: 1px solid #666;
}
.btn:hover {
  transform: scale(1.5);
}
/* 小圖 hover 效果 */
.gallery-thumb {
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}
.text-white {
  color: #fff;
}
.text-grey {
  color: #666 !important;
}
.gallery-thumb:hover {
  transform: scale(1.02);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);
}

/* Lightbox 背景遮罩 */
.lightbox-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

/* Lightbox 顯示內容 */
.lightbox-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
}

/* 關閉按鈕 */
.lightbox-close {
  position: absolute;
  top: -40px;
  right: 0;
  color: #fff;
  background: none;
  border: none;
  font-size: 32px;
  cursor: pointer;
}

/* 放大後圖片 */
.lightbox-img {
  max-width: 90vw;
  max-height: 90vh;
  border-radius: 8px;
  object-fit: contain;
}
</style>
