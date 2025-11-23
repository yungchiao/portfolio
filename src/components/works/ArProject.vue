<template>
	<main class="project-page">
		<!-- Hero -->
		<section class="hero">
			<div class="hero-text">
				<h1 style="color: #e6af2e">ARfolio</h1>
				<p class="hero-tagline">
					An augmented reality tool that helps designers visualise products in
					true scale and real environments during remote collaboration.
				</p>
				<ul class="hero-meta">
					<li><strong>Type</strong> AR Course Project · Individual</li>
					<li><strong>Role</strong> UX Engineer / Application Developer</li>
					<li><strong>Tools</strong> Unity (C#), Figma, Photoshop</li>
				</ul>
			</div>
			<div class="hero-image">
				<!-- 放 AR 介面截圖 -->
				<img
					src="../../assets/vr/vr.png"
					alt="ARfolio AR prototype screenshot"
				/>
			</div>
		</section>

		<!-- Introduction (全寬底色) -->
		<div class="intro-bg-full">
			<section class="section-hero">
				<div class="section-header">
					<h2>Introduction</h2>
				</div>
				<div class="section-body two-column">
					<div>
						<p>
							ReveAR is an augmented reality application that enables designers
							to preview products in true scale, switch colours and materials in
							real time, and simulate different environments during meetings and
							presentations.
						</p>
						<p>
							The project was developed in an undergraduate Augmented Reality
							course to explore how AR can bridge the gap between digital
							renderings and real-world spatial evaluation.
						</p>
					</div>
					<div>
						<h3>Design Context</h3>
						<p>
							During remote or hybrid collaboration, design teams often rely on
							2D renderings, which makes it hard to understand actual size,
							proportion, and spatial fit. This project investigates how AR can
							support more efficient design discussions and decision-making.
						</p>
					</div>
				</div>
			</section>
		</div>

		<!-- Research – Problem Context -->
		<section class="section">
			<div class="section-header">
				<h2>Research · Problem Context</h2>
			</div>
			<div class="section-body two-column">
				<div>
					<h3>Pain Points</h3>
					<ul class="bullet-list">
						<li>
							Designers cannot evaluate <strong>true scale</strong> and
							proportions through static 2D images.
						</li>
						<li>
							Colour and material changes are
							<strong>slow and inflexible</strong> during discussions.
						</li>
						<li>
							There is <strong>no environmental simulation</strong> such as
							lighting or surrounding furniture.
						</li>
						<li>
							Early-stage concepts cannot be previewed in realistic contexts
							before prototypes are built.
						</li>
					</ul>
				</div>
				<div>
					<h3>Insights</h3>
					<ul class="bullet-list">
						<li>
							Real-time visual feedback can reduce miscommunication in design
							meetings.
						</li>
						<li>
							AR is suitable for combining digital models with
							<strong>real-world environments</strong>.
						</li>
						<li>
							Spatial understanding is critical for product scale, placement,
							and style matching.
						</li>
						<li>
							A tool that supports
							<strong>iteration, collaboration, and spatial preview</strong> can
							improve decision quality.
						</li>
					</ul>
				</div>
			</div>
		</section>

		<!-- Research – User Scenarios -->
		<section class="section">
			<div class="section-header">
				<h2>Research · User Scenarios</h2>
			</div>
			<div class="section-body scenario-grid">
				<article class="scenario-card">
					<h3>Conference Mode</h3>
					<p class="scenario-tag">Internal design discussion</p>
					<ul class="bullet-list">
						<li>View size and proportion changes on a tabletop.</li>
						<li>Quickly switch colours and materials.</li>
						<li>Rotate, zoom, and move the model to inspect details.</li>
					</ul>
					<p class="scenario-note">
						AR acts like a flexible mockup, supporting fast iteration during
						meetings.
					</p>
				</article>

				<article class="scenario-card">
					<h3>Presentation Mode</h3>
					<p class="scenario-tag">Client review & storytelling</p>
					<ul class="bullet-list">
						<li>Show the product in different environments and scenes.</li>
						<li>
							Demonstrate multiple design variations without re-rendering.
						</li>
						<li>Support narrative presentations with clear visuals.</li>
					</ul>
					<p class="scenario-note">
						AR enhances persuasion by placing products into contextual scenes.
					</p>
				</article>

				<article class="scenario-card">
					<h3>Real-World Display</h3>
					<p class="scenario-tag">Pre-installation evaluation</p>
					<ul class="bullet-list">
						<li>Preview the product in true scale in homes or offices.</li>
						<li>Check style and spatial fit with existing furniture.</li>
						<li>Simulate lighting and shadows in real environments.</li>
					</ul>
					<p class="scenario-note">
						Users can “preview before build”, reducing physical prototyping
						costs.
					</p>
				</article>
			</div>
		</section>

		<!-- Research – Feature Mapping -->
		<section class="section">
			<div class="section-header">
				<h2>Research · Feature Mapping</h2>
			</div>
			<div class="section-body">
				<div class="table-wrapper">
					<table class="feature-table">
						<thead>
							<tr>
								<th>Scenario</th>
								<th>User Needs</th>
								<th>Key AR Features</th>
								<th>Opportunities</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Conference Mode</td>
								<td>Quick iteration, discuss size/colour changes</td>
								<td>Real-time parameter adjustment (scale, colour, pose)</td>
								<td>Faster alignment and clearer communication</td>
							</tr>
							<tr>
								<td>Presentation Mode</td>
								<td>Show variations and design intent to clients</td>
								<td>Scene switching, lighting simulation, presets</td>
								<td>Stronger storytelling and engagement</td>
							</tr>
							<tr>
								<td>Real-World Display</td>
								<td>Evaluate fit in real environments</td>
								<td>True-scale spatial placement, environmental response</td>
								<td>Reduce prototyping cost and decision risk</td>
							</tr>
						</tbody>
					</table>
				</div>

				<div class="feature-tags">
					<div class="feature-tag">
						<h3>Real-time Adjustment</h3>
						<p>Scale, rotation, and colour can be modified instantly.</p>
					</div>
					<div class="feature-tag">
						<h3>Spatial Placement</h3>
						<p>
							Anchor products in real space using AR markers or plane detection.
						</p>
					</div>
					<div class="feature-tag">
						<h3>Environment Simulation</h3>
						<p>Preview lighting and context to support realistic evaluation.</p>
					</div>
					<div class="feature-tag">
						<h3>Information Overlay</h3>
						<p>Display dimensions, materials, and configuration details.</p>
					</div>
				</div>
			</div>
		</section>

		<!-- Wireframe · Feature Mapping (gallery + lightbox) -->
		<section class="section py-5">
			<div class="container">
				<h2 class="h4 mb-4" style="margin-bottom: 30px">
					Wireframe · Feature Mapping
				</h2>
				<div class="row g-3">
					<div
						v-for="(item, idx) in wireframeGallery"
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

		<!-- Video Section -->
		<section class="py-5">
			<div class="container">
				<h2 class="h4 mb-4">ARfolio Demo</h2>
				<div class="ratio ratio-16x9 rounded overflow-hidden shadow-sm">
					<!-- YouTube -->
					<iframe
						src="https://www.youtube.com/embed/sF-Ndaw-8yc"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					></iframe>
				</div>
			</div>
		</section>
	</main>
</template>

<script>
	import arFlow from "../../assets/vr/ar_flow.jpg";
	import vrWireframe from "../../assets/vr/vr_wireframe.jpg";
	import vrMockup from "../../assets/vr/vr_mockup.jpg";
	export default {
		name: "ArProject",
		data() {
			return {
				showModal: false,
				modalImg: null,
				wireframeGallery: [
					{ title: "Work Flow", img: arFlow },
					{ title: "Wireframe", img: vrWireframe },
					{ title: "Mockup", img: vrMockup },
				],
				lightboxImage: null,
			};
		},
		methods: {
			openImg(type) {
				this.modalImg = type;
				this.showModal = true;
			},
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
		font-family:
			system-ui,
			-apple-system,
			BlinkMacSystemFont,
			"Segoe UI",
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
	.img-section {
		display: flex;
		gap: 0;
	}
	.img-wireframe,
	.ar-flow {
		width: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.img-wireframe img,
	.ar-flow img {
		width: 100%;
		height: auto;
		display: block;
		object-fit: contain;
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

	/* Scenario cards */
	.scenario-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 1rem;
	}

	.scenario-card {
		padding: 1.2rem 1.3rem;
		border-radius: 12px;
		background: #f8fafc;
		border: 1px solid #e2e8f0;
	}

	.scenario-card h3 {
		font-size: 1rem;
		margin-bottom: 0.25rem;
	}

	.scenario-tag {
		font-size: 0.85rem;
		color: #6b7280;
		margin-bottom: 0.5rem;
	}

	.scenario-note {
		font-size: 0.85rem;
		color: #4b5563;
		margin-top: 0.4rem;
	}

	@media (max-width: 900px) {
		.scenario-grid {
			grid-template-columns: 1fr;
		}
	}

	/* Feature table */
	.table-wrapper {
		overflow-x: auto;
		margin-bottom: 1.5rem;
	}

	.feature-table {
		width: 100%;
		border-collapse: collapse;
		font-size: 0.9rem;
	}

	.feature-table th,
	.feature-table td {
		border: 1px solid #e5e7eb;
		padding: 0.6rem 0.7rem;
		vertical-align: top;
	}

	.feature-table th {
		background: #f3f4f6;
		font-weight: 600;
	}

	/* Feature tags */
	.feature-tags {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: 1rem;
	}

	.feature-tag {
		padding: 0.9rem 1rem;
		border-radius: 10px;
		background: #f9fafb;
		border: 1px dashed #d1d5db;
	}

	.feature-tag h3 {
		font-size: 0.9rem;
		margin-bottom: 0.3rem;
	}

	.feature-tag p {
		font-size: 0.85rem;
		margin: 0;
	}

	@media (max-width: 900px) {
		.feature-tags {
			grid-template-columns: 1fr 1fr;
		}
	}

	@media (max-width: 640px) {
		.feature-tags {
			grid-template-columns: 1fr;
		}
	}

	/* Introduction section (全寬底色) */
	.intro-bg-full {
		width: 100vw;
		position: relative;
		left: 50%;
		right: 50%;
		margin-left: -50vw;
		margin-right: -50vw;
		background: #f8f9fa;
		padding: 0;
	}

	.section-hero {
		max-width: 960px;
		margin: 0 auto;
		padding: 3rem 1.5rem 3rem 1.5rem;
	}

	.align-center {
		align-items: center;
	}

	.video-embed-wrap {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.video-embed {
		width: 100%;
		max-width: 480px;
		aspect-ratio: 16/9;
		background: #000;
		border-radius: 12px;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.img-mockup.zoomable {
		cursor: zoom-in;
		transition: transform 0.2s cubic-bezier(0.4, 1.5, 0.5, 1);
		z-index: 1;
	}
	.img-mockup.zoomable:hover {
		transform: scale(1.07);
		box-shadow: 0 4px 24px 0 rgba(0, 0, 0, 0.1);
	}
	.modal-overlay {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.55);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1000;
	}
	.modal-img {
		background: #fff;
		padding: 1.5rem;
		border-radius: 16px;
		max-width: 90vw;
		max-height: 90vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.modal-img img {
		max-width: 80vw;
		max-height: 80vh;
		border-radius: 12px;
		box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.18);
	}

	/* Wireframe gallery styles */
	.gallery-thumb {
		cursor: pointer;
		transition:
			transform 0.2s,
			box-shadow 0.2s;
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

	@media (max-width: 900px) {
		.two-column {
			grid-template-columns: 1fr;
		}
		.img-mockup,
		.video-embed-wrap {
			width: 100%;
			margin-bottom: 1.5rem;
		}
		.img-section {
			flex-direction: column;
		}
		.ar-flow,
		.img-wireframe,
		.img-mockup {
			width: 100%;
		}
	}
</style>
