<template>
    <header id="header_index">
      <div class="container text-center">
        <img class="icon" src="https://i.imgur.com/nBUSKXr.png" alt="logo" />
        <img class="marginbottom mountain" src="https://awiclass.monoame.com/img/margin/m_index.svg" alt="mount" />
        <div class="explore" :class="{ 'at_top': atTop }">EXPLORE</div>
      </div>
    </header>
  </template>
  
  <script>
  export default { name: 'HeaderHero', props: { atTop: Boolean } }
  </script>
  