<template>
  <section id="section_works">
    <div class="container">
      <div class="row">
        <div><h1>Works</h1></div>
        <div class="row">
          <div class="col-sm-12">
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="row">
                    <div class="col-sm-4">
                      <div class="work-item">
                        <img
                          class="icon"
                          src="https://awiclass.monoame.com/img/webpic/w_service_icon2.svg"
                          alt=""
                        />
                        <div class="btn-style">
                          <router-link
                            :to="{
                              name: 'project',
                              params: { slug: 'product-design' },
                            }"
                          >
                            Product Design
                          </router-link>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div class="work-item">
                        <img
                          class="icon"
                          src="https://awiclass.monoame.com/img/webpic/w_service_icon1.svg"
                          alt=""
                        />
                        <div class="btn-style">
                          <router-link
                            :to="{
                              name: 'project',
                              params: { slug: 'gravity' },
                            }"
                          >
                            Gravity
                          </router-link>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div class="work-item">
                        <img
                          class="icon"
                          src="https://awiclass.monoame.com/img/webpic/w_service_icon1.svg"
                          alt=""
                        />
                        <div class="btn-style">
                          <a
                            class="btn"
                            href="https://www.behance.net/gallery/143204189/portfolio_ui_design"
                            target="_blank"
                            >UI Design</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="row">
                    <div class="col-sm-4">
                      <div class="work-item">
                        <img
                          class="icon"
                          src="https://awiclass.monoame.com/img/webpic/w_service_icon3.svg"
                          alt=""
                        />
                        <div class="btn-style">
                          <a
                            class="btn"
                            href="https://www.behance.net/gallery/102553695/portfolio"
                            target="_blank"
                            >Autobiography</a
                          >
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div class="work-item">
                        <img
                          class="icon"
                          src="https://awiclass.monoame.com/img/webpic/w_service_icon3.svg"
                          alt=""
                        />
                        <div class="btn-style">
                          <a
                            class="btn"
                            href="https://www.behance.net/gallery/102553695/portfolio"
                            target="_blank"
                            >Autobiography</a
                          >
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div class="work-item">
                        <img
                          class="icon"
                          src="https://awiclass.monoame.com/img/webpic/w_service_icon3.svg"
                          alt=""
                        />
                        <div class="btn-style">
                          <a
                            class="btn"
                            href="https://www.behance.net/gallery/102553695/portfolio"
                            target="_blank"
                            >Autobiography</a
                          >
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-4"></div>
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default { name: "SectionWorks" };
</script>
