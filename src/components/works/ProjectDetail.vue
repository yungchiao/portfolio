<template>
	<main>
		<component
			v-if="project && project.customComponent"
			:is="project.customComponent"
		/>
		<div v-else>
			<!-- Hero -->
			<section
				class="hero position-relative text-white section-top"
				:class="
					project.cover === cafe
						? 'text-white'
						: project.slug === 'gravity'
							? 'text-grey'
							: ''
				"
			>
				<div
					:class="
						project.cover === cafe
							? 'hero__bg_cafe'
							: project.slug === 'gravity'
								? 'hero__bg_gravity'
								: 'hero__bg'
					"
					:style="{ backgroundImage: 'url(' + project.cover + ')' }"
				></div>
				<div class="container py-5 position-relative">
					<h1 class="display-5 fw-bold">{{ project.title }}</h1>
					<div style="margin-bottom: 20px">
						<li
							class="list-inline-item"
							v-for="(item, i) in project.headline"
							:key="i"
						>
							<strong>{{ item }}</strong>
						</li>
					</div>
					<ul class="hero-meta">
						<li v-if="project.client && project.client.length > 0">
							<strong>Client:</strong> {{ project.client }}
						</li>
						<li><strong>Role:</strong> {{ project.role.join(", ") }}</li>
						<li><strong>Tools:</strong> {{ project.tools.join(", ") }}</li>
						<li v-if="isCafeProject"><strong>(Patent granted)</strong></li>
					</ul>

					<ul
						class="list-inline mt-3 small opacity-75"
						style="margin-top: 40px"
					></ul>
					<div class="mt-3">
						<template v-for="(l, i) in project.links">
							<button
								v-if="l.img && !l.url"
								:key="`btn-${i}`"
								type="button"
								class="btn btn-outline-light btn-sm me-2"
								@click="openImageInNewTab(l.img)"
							>
								{{ l.label }}
							</button>
							<a
								v-else
								:key="`a-${i}`"
								class="btn btn-outline-light btn-sm me-2"
								:href="l.url"
								target="_blank"
								rel="noopener"
							>
								{{ l.label }}
							</a>
						</template>
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
						Introduction
					</h2>
					<p class="mb-0" style="white-space: pre-line">
						{{ project.overview }}
					</p>
				</div>
			</section>

			<!-- Gallery -->
			<section v-if="project.gallery && project.gallery.length" class="py-5">
				<div class="container">
					<h2 class="h4 mb-4" style="margin-bottom: 30px">
						Wireframe · Feature Mapping
					</h2>
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
			</section>

			<!-- CaFe UI 輪播（RWD） -->
			<section v-if="isCafeProject" class="py-5 bg-light">
				<div class="container">
					<h2 class="h4 mb-4">UI Showcase</h2>
					<div class="cafe-ui">
						<div class="gif-img">
							<img
								:src="currentCafeUiItem.img"
								:alt="currentCafeUiItem.alt"
								class="cafe-ui__img"
							/>
						</div>

						<!-- 寬螢幕：輪播控制（上一張/下一張 + 指示點） -->
						<div class="cafe-carousel-controls" aria-label="CaFe UI carousel">
							<div class="cafe-carousel-controls__nav">
								<button
									type="button"
									class="btn btn-outline-secondary btn-sm"
									@click="prevCafeUi"
									aria-label="Previous"
								>
									←
								</button>
								<button
									type="button"
									class="btn btn-outline-secondary btn-sm"
									@click="nextCafeUi"
									aria-label="Next"
								>
									→
								</button>
							</div>
							<div class="cafe-carousel-controls__dots" role="tablist">
								<button
									v-for="item in cafeUiItems"
									:key="item.key"
									type="button"
									class="cafe-dot"
									:class="{
										'cafe-dot--active': selectedCafeUiKey === item.key,
									}"
									@click="selectedCafeUiKey = item.key"
									:aria-label="item.label"
								></button>
							</div>
							<div class="cafe-carousel-controls__label">
								{{ currentCafeUiItem.label }}
							</div>
						</div>

						<!-- 平板/手機：下拉選單 -->
						<div class="ui-dropdown-container">
							<label class="visually-hidden" for="uiDropdownSelect"
								>選擇UI功能</label
							>
							<select
								id="uiDropdownSelect"
								class="form-select ui-dropdown-select"
								v-model="selectedCafeUiKey"
							>
								<option
									v-for="item in cafeUiItems"
									:key="item.key"
									:value="item.key"
								>
									{{ item.label }}
								</option>
							</select>
						</div>
					</div>
				</div>
			</section>

			<!-- Lightbox 放大檢視（Gallery 使用） -->
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
								<div v-if="step.img">
									<img :src="step.img" class="step-img" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<!-- reflection / CTA -->
			<section class="py-5">
				<div class="container">
					<h2 class="h4 mb-4">Reflection</h2>
					<div class="row g-3">
						<p>{{ project.reflection }}</p>
						<li v-for="(f, i) in project.learning" :key="i">
							<span v-html="f"></span>
						</li>
						<p>{{ project.conclusive }}</p>
					</div>
				</div>
			</section>
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
		</div>
	</main>
</template>

<script>
	import cafe from "../../assets/cafe/cafe_header.jpg";
	import cafeRunningGif from "../../assets/cafe/running.gif";
	import cafeTableGif from "../../assets/cafe/table.gif";
	import cafeModelGif from "../../assets/cafe/model.gif";
	import cafeJobImg from "../../assets/cafe/job_list.png";
	import cafeJupyterGif from "../../assets/cafe/jupyter.gif";
	import cafeUserGif from "../../assets/cafe/user.gif";
	import { findProjectBySlug } from "../../data/project";
	import ArProject from "./ArProject.vue";
	import TrainProject from "./TrainProject.vue";
	export default {
		name: "ProjectDetail",
		components: { ArProject, TrainProject },
		props: { slug: { type: String, required: false } },
		data() {
			return {
				project: null,
				lightboxImage: null,
				cafe,
				selectedCafeUiKey: "running",
				cafeUiItems: [
					{
						key: "running",
						label: "RUNNING",
						img: cafeRunningGif,
						alt: "RUNNING",
					},
					{ key: "table", label: "TABLES", img: cafeTableGif, alt: "TABLES" },
					{ key: "model", label: "MODELS", img: cafeModelGif, alt: "MODELS" },
					{ key: "job", label: "JOBS", img: cafeJobImg, alt: "JOBS" },
					{
						key: "jupyter",
						label: "JUPYTER",
						img: cafeJupyterGif,
						alt: "JUPYTER",
					},
					{ key: "user", label: "USER", img: cafeUserGif, alt: "USER" },
				],
			};
		},
		computed: {
			isCafeProject() {
				return this.project && this.project.title === "CaFe";
			},
			currentCafeUiIndex() {
				const idx = this.cafeUiItems.findIndex(
					(item) => item.key === this.selectedCafeUiKey
				);
				return idx >= 0 ? idx : 0;
			},
			currentCafeUiItem() {
				return this.cafeUiItems[this.currentCafeUiIndex];
			},
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
			openImageInNewTab(img) {
				const newTab = window.open(img, "_blank", "noopener,noreferrer");
				if (newTab) newTab.opener = null;
			},
			nextCafeUi() {
				const nextIndex =
					(this.currentCafeUiIndex + 1) % this.cafeUiItems.length;
				this.selectedCafeUiKey = this.cafeUiItems[nextIndex].key;
			},
			prevCafeUi() {
				const prevIndex =
					(this.currentCafeUiIndex - 1 + this.cafeUiItems.length) %
					this.cafeUiItems.length;
				this.selectedCafeUiKey = this.cafeUiItems[prevIndex].key;
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
	.hero__bg_gravity {
		position: absolute;
		inset: 0;
		background-size: 40% !important;
		background-position: 80% 60% !important; /* 偏右 */
		background-repeat: no-repeat;
	}

	/* 桌機時讓 gravity hero 圖片偏右，並確保只在 gravity 專案時生效 */
	@media (min-width: 901px) {
		.hero.text-grey .hero__bg_gravity {
			background-position: 80% 20% !important;
			background-size: 50% !important;
		}
	}

	@media (max-width: 900px) {
		.hero__bg_gravity {
			background-position: center !important;
			background-size: cover !important;
		}
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
	@media (max-width: 768px) {
		.step-img {
			width: 7%;
			bottom: 5px;
		}
	}
	.hero-meta {
		list-style: none;
		padding: 0;
		margin-bottom: 20px;
		font-size: 0.95rem;
	}
	.object-fit-cover {
		object-fit: cover;
	}
	.section-top {
		margin-top: 55px;
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

	.cafe-ui {
		display: grid;
		gap: 24px;
	}

	.gif-img {
		width: 100%;
		border-radius: 12px;
		overflow: hidden;
		background: #fff;
		border: 1px solid rgba(0, 0, 0, 0.08);
	}

	.cafe-ui__img {
		display: block;
		width: 100%;
		height: auto;
		object-fit: contain;
	}

	.cafe-carousel-controls {
		display: grid;
		gap: 12px;
	}

	.cafe-carousel-controls__nav {
		display: flex;
		gap: 10px;
	}

	.cafe-carousel-controls__dots {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		align-items: center;
	}

	.cafe-dot {
		width: 10px;
		height: 10px;
		border-radius: 999px;
		border: 1px solid #666;
		background: transparent;
		padding: 0;
		cursor: pointer;
	}

	.cafe-dot--active {
		background: #666;
	}

	.cafe-carousel-controls__label {
		color: #666;
		font-size: 0.95rem;
	}

	.ui-dropdown-container {
		display: none;
	}

	.ui-dropdown-select {
		max-width: 260px;
	}

	@media (max-width: 1024px) {
		.cafe-carousel-controls {
			display: none;
		}
		.ui-dropdown-container {
			display: block;
		}
		.ui-dropdown-select {
			max-width: 100%;
		}
	}

	@media (min-width: 1025px) {
		.ui-dropdown-container {
			display: none !important;
		}
		.cafe-carousel-controls {
			display: grid;
		}
	}

	/* 小圖 hover 效果 */
	.gallery-thumb {
		cursor: pointer;
		transition:
			transform 0.2s,
			box-shadow 0.2s;
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

	@media (max-width: 900px) {
		.hero {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			min-height: unset;
			position: relative;
		}
		.hero__bg,
		.hero__bg_cafe,
		.hero__bg_gravity {
			position: absolute;
			inset: 0;
			z-index: 0;
			width: 100%;
			height: 260px;
			min-height: 180px;
			background-size: cover !important;
			background-position: center !important;
			border-radius: 0 0 24px 24px;
		}
		.hero .container {
			position: relative;
			z-index: 1;
			padding-top: 32vw;
			padding-bottom: 2rem;
			background: none;
			width: 100%;
		}
		/* cafe 專案時 hero 文字加底色 */
		.hero.text-white .container {
			background: rgba(156, 99, 34, 0.82);
			border-radius: 24px 24px 24px 24px;
			color: #fff;
			box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1);
		}
		/* gravity 專案時 hero 文字加底色 */
		.hero.text-grey .container {
			background: rgba(134, 188, 135, 0.82);
			border-radius: 24px 24px 24px 24px;
			color: #fff;
			box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1);
		}
		.hero.text-white .container h1,
		.hero.text-grey .container h1 {
			color: #fff !important;
		}
	}
</style>
