<template>
	<section id="section_works">
		<div class="container">
			<div class="row">
				<div><h1>Works</h1></div>
				<div class="row">
					<div class="col-sm-12 d-flex flex-wrap justify-content-center">
						<div
							v-for="project in projects"
							:key="project.slug"
							class="work-card mx-2 my-3"
							@click="goToProject(project)"
							tabindex="0"
						>
							<div class="work-card-img-wrap">
								<img
									:src="project.cover"
									:alt="project.title"
									class="work-card-img"
								/>
							</div>
							<div class="work-card-title mt-2">{{ project.title }}</div>
							<div class="work-card-role">{{ project.role.join(", ") }}</div>
							<div class="work-card-year">{{ project.year }}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import { projects } from "../data/project";
	export default {
		name: "SectionWorks",
		data() {
			return { projects };
		},
		methods: {
			goToProject(project) {
				if (project.slug) {
					this.$router.push({
						name: "project",
						params: { slug: project.slug },
					});
				} else if (project.links && project.links.length > 0) {
					window.open(project.links[0].url, "_blank");
				}
			},
		},
	};
</script>

<style scoped>
	.work-card {
		width: 220px;
		background: #fff;
		border-radius: 16px;
		box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
		cursor: pointer;
		transition:
			transform 0.2s,
			box-shadow 0.2s;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 18px 10px 14px 10px;
		position: relative;
		margin-left: 0;
		margin-right: 0;
	}
	.work-card:hover,
	.work-card:focus {
		transform: scale(1.05);
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);
		z-index: 2;
	}
	.work-card-img-wrap {
		width: 100%;
		height: 140px;
		overflow: hidden;
		border-radius: 12px;
		background: #f6f6f6;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.work-card-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.2s;
	}
	.work-card-title {
		font-size: 1.2rem;
		font-weight: bold;
		color: #282f44;
		margin-top: 12px;
		text-align: center;
	}
	.work-card-role {
		font-size: 0.95rem;
		color: #888;
		margin-top: 4px;
		text-align: center;
	}
	.work-card-year {
		font-size: 0.9rem;
		color: #e6af2e;
		margin-top: 2px;
		text-align: center;
	}
</style>
