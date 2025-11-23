<template>
  <header id="header_index">
    <div class="container text-center">
      <img class="icon" src="https://i.imgur.com/nBUSKXr.png" alt="logo" />
      <img
        class="marginbottom mountain"
        src="../img/m_index_white.svg"
        alt="mount"
      />
      <div style="display: flex; justify-content: center">
        <p
          style="
            border-left: 1px solid white;
            color: white;
            padding-left: 20px;
            margin: 60px auto 200px auto;
            text-align: left;
            max-width: 650px;
            width: 80%;
            line-height: 30px;
            opacity: 0.75;
          "
        >
          <strong>Designer & Creative Technologist</strong><br />
          Exploring how technology, interaction, and human behaviour shape
          meaningful digital experiences.
        </p>
      </div>

      <div class="explore" :class="{ at_top: atTop }">EXPLORE</div>
    </div>
  </header>
</template>

<script>
export default { name: "HeaderHero", props: { atTop: Boolean } };
</script>
