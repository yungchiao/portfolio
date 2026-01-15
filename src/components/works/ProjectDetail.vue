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
						<ul class="nav nav-tabs cafe-ui-tabs" role="tablist">
							<li
								v-for="item in cafeUiItems"
								:key="item.key"
								class="nav-item"
								role="presentation"
							>
								<button
									type="button"
									class="nav-link"
									:class="{ active: selectedCafeUiKey === item.key }"
									role="tab"
									:aria-selected="selectedCafeUiKey === item.key"
									@click="selectedCafeUiKey = item.key"
								>
									{{ item.key.toUpperCase() }}
								</button>
							</li>
						</ul>

						<div class="cafe-ui-panel" role="tabpanel">
							<div class="row g-4 align-items-start">
								<div class="col-12 col-lg-7">
									<div class="gif-img">
										<img
											:src="currentCafeUiItem.img"
											:alt="currentCafeUiItem.alt"
											class="cafe-ui__img"
										/>
									</div>
								</div>
								<div class="col-12 col-lg-5">
									<h3 class="h6 mb-2">{{ currentCafeUiItem.title }}</h3>
									<p class="mb-2">{{ currentCafeUiItem.description }}</p>
									<ul class="mb-0">
										<li
											v-for="(b, idx) in currentCafeUiItem.bullets"
											:key="idx"
										>
											{{ b }}
										</li>
									</ul>
								</div>
							</div>
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
				selectedCafeUiKey: "job",
				cafeUiItems: [
					{
						key: "job",
						title: "JOBS — Task History",
						description:
							"Shows the full history of training and prediction tasks, with status, logs, and results.",
						bullets: [
							"Review all executed tasks and their current status.",
							"Click a task ID to view the full federated training workflow, component parameters, and outputs.",
							"Clicking a component (e.g., homo_secureboost_0) opens the output analysis page for that component.",
						],
						img: cafeJobImg,
						alt: "CaFe UI jobs page",
					},
					{
						key: "model",
						title: "MODELS — Model Overview",
						description:
							"Browse and manage model versions, including deployment and prediction.",
						bullets: [
							"Standard users can open Detail to view the full component breakdown.",
							"Deploy deploys the parent model to produce a child model for prediction tasks.",
							"Predict submits a prediction job using the child model against a selected source table.",
						],
						img: cafeModelGif,
						alt: "CaFe UI models page",
					},
					{
						key: "table",
						title: "TABLES — Dataset & Table Overview",
						description:
							"Manage tables and uploaded datasets. Browse table information and schema details.",
						bullets: [
							"Selecting a Namespace on the left lists all source tables under that Table Namespace on the right.",
							"Click Detail on a table to view the schema and basic attributes.",
						],
						img: cafeTableGif,
						alt: "CaFe UI tables page",
					},
					{
						key: "running",
						title: "RUNNING — Active Tasks",
						description:
							"Shows tasks currently running, including training and prediction jobs.",
						bullets: [
							"Task statuses include: running, success, failed, canceled, and ready.",
							"You can cancel a task or open task details from this page.",
						],
						img: cafeRunningGif,
						alt: "CaFe UI running page",
					},
					{
						key: "jupyter",
						title: "JUPYTER — Notebook Environment",
						description:
							"Create and manage your personal Jupyter Notebook environment within CaFe.",
						bullets: [
							"Start a personal notebook environment for data analysis and model training.",
							"If an environment exists, you can Delete or Connect; otherwise, you will see Create Jupyter Notebook.",
							"Each user can have only one environment; delete and recreate to change resources.",
						],
						img: cafeJupyterGif,
						alt: "CaFe UI jupyter page",
					},
					{
						key: "user",
						title: "USER — User Management",
						description: "Admin-only module for managing user accounts.",
						bullets: [
							"The USERS module is for CaFe administrators; standard users cannot access it.",
							"Admins can toggle the Status switch to enable/disable accounts; this action cannot be undone for that account.",
						],
						img: cafeUserGif,
						alt: "CaFe UI user page",
					},
				],
			};
		},
		computed: {
			isCafeProject() {
				return this.project && this.project.title === "CaFe";
			},
			currentCafeUiItem() {
				return (
					this.cafeUiItems.find(
						(item) => item.key === this.selectedCafeUiKey
					) || this.cafeUiItems[0]
				);
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

	.cafe-ui-tabs {
		flex-wrap: nowrap;
		overflow-x: auto;
		overflow-y: hidden;
		-webkit-overflow-scrolling: touch;
	}

	.cafe-ui-tabs .nav-link {
		white-space: nowrap;
	}

	.cafe-ui-tabs .nav-link:not(.active) {
		color: #9b684c !important;
	}

	.cafe-ui-panel {
		padding-top: 16px;
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
