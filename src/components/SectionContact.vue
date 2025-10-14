<template>
    <section id="section_contact">
      <img class="cat" id="cat_blue" src="https://i.imgur.com/mYP9XEv.png" alt="cat" />
      <img class="paper" src="https://awiclass.monoame.com/img/margin/m_works.svg" alt="paper" />
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <div class="mails">
              <div class="mailcover"><img src="http://awiclass.monoame.com/img/webpic/w_mail_cover.svg" alt="cover" /></div>
              <div class="mailbody">
                <h5>Hi! Jolina</h5>
                <label for="name">Name</label>
                <input id="name" v-model="form.name" />
                <label for="email">Email</label>
                <input id="email" v-model="form.email" />
                <label for="content">Content</label>
                <textarea id="content" v-model="form.content"></textarea>
                <button class="btn btn-dark mt-3" @click="submitForm">Send</button>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <h2>CONTACT</h2><br />
            <p>If you have any question about me,<br>Don`t hestitate to contact me !</p><br /><br />
            <p>jolina4526@gmail.com<br>ADDRESS: TAIWAN, TAIPEI<br>Phone: 0988-530-754</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'SectionContact',
    data() {
      return { form: { name: '', email: '', content: '' } }
    },
    methods: {
      submitForm() {
        alert(`Thanks, ${this.form.name}! We'll get back to you soon.`)
      }
    }
  }
  </script>
  