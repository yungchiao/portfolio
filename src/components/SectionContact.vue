<template>
	<section id="section_contact">
		<img
			class="cat"
			id="cat_blue"
			src="https://i.imgur.com/mYP9XEv.png"
			alt="cat"
		/>
		<div class="container">
			<div class="row">
				<div
					class="col-sm-6 d-flex flex-column align-items-center justify-content-center"
					style="min-height: 320px"
				>
					<div class="envelope-img-wrap mb-3">
						<img class="envelope-img" src="../img/contact.png" alt="envelope" />
					</div>
				</div>
				<div
					class="col-sm-6 d-flex flex-column justify-content-center"
					style="min-height: 320px"
				>
					<h2>CONTACT</h2>
					<hr />
					<div
						style="
							display: flex;
							flex-direction: column;
							gap: 10px;
							margin-bottom: 20px;
						"
					>
						<div>
							<a
								class="contact-link"
								href="https://www.linkedin.com/in/yung-chiao-liang"
								target="_blank"
								rel="noopener"
							>
								<img
									class="social-icon"
									src="../img/linkedIn.png"
									alt=""
								/>Yung-Chiao Liang
							</a>
						</div>
						<div>
							<a
								class="contact-link"
								href="https://github.com/yungchiao"
								target="_blank"
								rel="noopener"
							>
								<img
									class="social-icon"
									src="../img/github.png"
									alt=""
								/>yungchiao
							</a>
						</div>
					</div>
					<p>E-mail: liangyungchiao@gmail.com<br />Phone: 0988-530-754</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		name: "SectionContact",
	};
</script>

<style scoped>
	.envelope-img-wrap {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.envelope-img {
		width: 95%;
		max-width: 340px;
		min-width: 120px;
		height: auto;
		display: block;
	}
	.social-icon {
		width: 28px;
		height: 28px;
		vertical-align: middle;
		margin-right: 20px;
	}
	.contact-link {
		color: #fff !important;
		text-decoration: none !important;
	}
	.contact-link,
	.contact-link .social-icon {
		transition:
			color 0.32s cubic-bezier(0.22, 1, 0.36, 1),
			transform 0.32s cubic-bezier(0.22, 1, 0.36, 1);
	}
	.contact-link:hover,
	.contact-link:focus {
		color: #ffd600 !important;
		transform: scale(1.11);
	}
	.contact-link:hover .social-icon,
	.contact-link:focus .social-icon {
		transform: scale(1.11);
	}
</style>
