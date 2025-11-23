<template>
  <main class="project-page">
    <!-- Hero -->
    <section class="hero">
      <div class="hero-text">
        <h1>Taiwan Railway Group Ticketing App</h1>
        <p class="hero-tagline">
          Redesigning the group booking experience for travelers who need clear
          coordination, transparent seat availability, and stress-free
          decision-making.
        </p>
        <ul class="hero-meta">
          <li><strong>Type</strong> University design project</li>
          <li><strong>Role</strong> UX Researcher & Interaction Designer</li>
          <li>
            <strong>Focus</strong> Information architecture, ticketing workflow,
            mobile UI
          </li>
        </ul>
      </div>
      <div class="hero-image">
        <!-- 放 app 介面 mockup -->
        <img
          src="../../assets/train/train_header.jpg"
          alt="Taiwan Railway group ticketing app mockup"
        />
      </div>
    </section>

    <!-- Introduction -->
    <section class="section">
      <div class="section-header">
        <h2>Introduction</h2>
      </div>
      <div class="section-body two-column">
        <div>
          <p>
            Although Taiwan Railways has improved its ticketing interface, many
            travelers—especially those travelling in groups—still struggle to
            coordinate seats and complete bookings efficiently.
          </p>
          <p>
            This project explores how clear information design, collaborative
            booking workflows, and user-centered feedback can reduce confusion
            and improve travel efficiency for group trips.
          </p>
        </div>
        <div>
          <h3>Design Context</h3>
          <p>
            The focus of this project is the mobile booking experience: how
            travelers search for trains, select seats with friends, and confirm
            group tickets under time pressure.
          </p>
        </div>
      </div>
    </section>

    <!-- Research – Problem Context -->
    <section class="section">
      <div class="section-header">
        <h2>Research · Problem Context</h2>
      </div>
      <div class="section-body two-column">
        <div>
          <h3>Problem Context</h3>
          <p>
            Taiwan Railways’ booking system has been updated over the years, yet
            travelers still experience difficulty coordinating group tickets.
            Users frequently fail to book seats together, have to re-enter
            booking information multiple times, and feel uncertain during the
            process.
          </p>
        </div>
        <div>
          <h3>Key Pain Points</h3>
          <ul class="bullet-list">
            <li>
              <strong>Difficult group coordination:</strong> friends often end
              up in different cars or scattered seats.
            </li>
            <li>
              <strong>Low visibility:</strong> users cannot easily compare seat
              availability across routes or transfer options.
            </li>
            <li>
              <strong>High cognitive load:</strong> unclear steps and limited
              feedback create stress and repeated attempts.
            </li>
            <li>
              <strong>Unfamiliar schedules:</strong> transfer timing and train
              types add to the complexity of booking.
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Research – Persona -->
    <section class="section">
      <div class="section-header">
        <h2>Research · Persona</h2>
      </div>
      <div class="section-body two-column">
        <div>
          <h3>Emma · University Student</h3>
          <p>
            Emma is a university student who loves travelling with friends but
            is unfamiliar with train schedules and ticketing rules. She often
            feels anxious when booking tickets under time pressure.
          </p>
          <h4>Profile</h4>
          <ul class="bullet-list">
            <li>Lives in a city, usually travels with friends.</li>
            <li>Unfamiliar with railway routes and transfer planning.</li>
            <li>Easily stressed by complex or unfamiliar interfaces.</li>
          </ul>
        </div>
        <div>
          <h4>User Goals & Behaviours</h4>
          <ul class="bullet-list">
            <li>Book tickets for herself and friends in a single flow.</li>
            <li>Choose seats close to each other without trial and error.</li>
            <li>Clearly see availability before confirming payment.</li>
            <li>Rely on simple, guided steps instead of memorising rules.</li>
          </ul>
          <h4>Technology & Devices</h4>
          <ul class="bullet-list">
            <li>Uses iOS and macOS devices.</li>
            <li>Comfortable with clean, guided interfaces.</li>
            <li>Smartphone is the primary device for ticket booking.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Research – Color Plan -->
    <section class="section">
      <div class="section-header">
        <h2>Research · Color Plan</h2>
      </div>
      <div class="section-body">
        <div class="colorplan-layout">
          <div class="colorplan-images">
            <!-- 這裡放你那張 Color Plan 圖 -->
            <img
              src="../../assets/train/color_plan.jpg"
              alt="Color plan inspiration for Taiwan Railway ticketing app"
            />
            <h3 style="margin-top: 40px">Color Strategy</h3>
            <p>
              The palette is inspired by transportation cues, combining
              convenience, speed, and safety for a booking interface that feels
              both friendly and reliable.
            </p>
          </div>
          <div class="colorplan-text">
            <ul class="bullet-list">
              <li>
                <strong>Yellow:</strong> Inspired by taxis and everyday transit
                vehicles, representing accessibility and immediacy.
              </li>
              <li>
                <strong>Blue:</strong> Reflects the motion and speed of trains
                travelling through tunnels.
              </li>
              <li>
                <strong>Red:</strong> Drawn from traffic signage, used to
                highlight critical states and guide user attention.
              </li>
            </ul>
            <p>
              Together, these colours balance warmth, clarity, and caution—
              supporting key decision points in the ticketing flow.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Mockup Section with Lightbox -->
    <section class="section py-5">
      <div class="container">
        <h2 class="h4 mb-4">Protoype</h2>
        <div class="row g-3">
          <div v-for="(item, idx) in mockupGallery" :key="idx" class="col-12">
            <div
              class="ratio ratio-4x3 rounded shadow-sm gallery-thumb"
              @click="openLightbox(item.img)"
            >
              <img
                :src="item.img"
                :alt="item.title || 'Mockup'"
                class="w-100 h-100 object-fit-cover"
              />
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

    <section class="py-5">
      <div class="container">
        <h2 class="h4 mb-4">Reflection</h2>
        <div>
          <p>
            This project helped me see how much information structure and
            feedback design affect decision-making in time-sensitive tasks like
            ticket booking. Through user interviews, I learned that confusion
            often comes from repeated steps, unclear options, and inconsistent
            visibility of seat availability. Designing a clearer workflow made
            me more aware of how small UI details—such as colours, layout, and
            status indicators—can reduce stress and help users feel more
            confident when coordinating group travel. If I were to extend this
            work, I would explore:
          </p>
          <ul>
            <li>real-time coordination tools for multi-person booking</li>
            <li>predictive suggestions that reduce trial-and-error</li>
            <li>usability tests to measure reductions in cognitive load</li>
          </ul>
          <P
            >This project increased my interest in designing systems that
            support clearer choices and reduce mental effort during complex
            tasks.</P
          >
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import train from "../../assets/train/train_mockup.jpg";
export default {
  name: "TrainProject",
  data() {
    return {
      mockupGallery: [
        {
          img: train,
          title: "Prototype",
        },
      ],
      lightboxImage: null,
    };
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
.project-page {
  max-width: 960px;
  margin: 0 auto;
  padding: 3rem 1.5rem 4rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    sans-serif;
  color: #222;
}

/* Hero */
.hero {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;
  margin-bottom: 3rem;
}

.hero-text {
  flex: 1 1 280px;
}

.hero-text h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.hero-tagline {
  font-size: 1.05rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.hero-meta {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 0.95rem;
}

.hero-meta li + li {
  margin-top: 0.25rem;
}

.hero-image {
  flex: 1 1 260px;
  text-align: right;
}

.hero-image img {
  max-width: 100%;
  border-radius: 12px;
}

/* Generic sections */
.section {
  margin-bottom: 3rem;
}

.section-header h2 {
  font-size: 1.6rem;
  margin-bottom: 1rem;
}

.section-body {
  font-size: 0.98rem;
  line-height: 1.7;
}

/* Layout helpers */
.two-column {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;
}

@media (max-width: 768px) {
  .hero {
    flex-direction: column;
    align-items: flex-start;
  }
  .hero-image {
    text-align: left;
  }
  .two-column {
    grid-template-columns: 1fr;
  }
}

/* Meta cards */
.section-meta {
  margin-top: -0.5rem;
}

.meta-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.meta-card {
  padding: 1.1rem 1.2rem;
  border-radius: 10px;
  background: #f7f7fb;
}

.meta-card h3 {
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 0.3rem;
}

.meta-card p {
  font-size: 0.9rem;
  margin: 0;
}

@media (max-width: 768px) {
  .meta-grid {
    grid-template-columns: 1fr;
  }
}

/* Lists */
.bullet-list {
  padding-left: 1.1rem;
}

.bullet-list li {
  margin-bottom: 0.4rem;
}

/* Color plan */
.colorplan-layout {
  display: grid;
  grid-template-columns: 3fr 4fr;
  gap: 1.5rem;
  align-items: flex-start;
}

.colorplan-images img {
  max-width: 100%;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.colorplan-text h3 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

@media (max-width: 900px) {
  .colorplan-layout {
    grid-template-columns: 1fr;
  }
}

/* Mockup section */
.ratio {
  position: relative;
  width: 100%;
}

.object-fit-cover {
  object-fit: cover;
  object-position: center;
}

/* Gallery and Lightbox */
.gallery-thumb {
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}
.gallery-thumb:hover {
  transform: scale(1.02);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);
}
.lightbox-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}
.lightbox-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
}
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
.lightbox-img {
  max-width: 90vw;
  max-height: 90vh;
  border-radius: 8px;
  object-fit: contain;
}

.gallery-thumb img,
.mockup-img-preview {
  object-fit: contain !important;
  object-position: center;
  width: 100%;
  height: 100%;
  background: #f8f9fa;
}
</style>
