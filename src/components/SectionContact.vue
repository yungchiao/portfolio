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
					class="col-sm-6 d-flex flex-column align-items-center justify-content-center"
					style="min-height: 320px"
				>
					<h2>CONTACT</h2>
					<p class="mt-3 mb-3" style="text-align: center">
						If you have any question about me,<br />Don`t hestitate to contact
						me !
					</p>
					<p style="text-align: center">
						jolina4526@gmail.com<br />ADDRESS: TAIWAN, TAIPEI<br />Phone:
						0988-530-754
					</p>
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
</style>
