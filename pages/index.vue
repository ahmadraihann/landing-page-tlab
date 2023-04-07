<template>
  <div class="container">
    <div class="section-one">
      <div class="section-one__title">
        Dapatkan solusi digital terbaik untuk mengembangkan bisnis Anda
      </div>
      <div class="section-one__description">
        Jadikan bisnis semakin berkembang dengan pemilihan teknologi yang tepat
        dan andal
      </div>
      <div class="section-one__image">
        <img src="/images/abstracts/openess.svg" alt="openess" />
      </div>
    </div>

    <div class="section-two">
      <div class="section-two__left">
        <div class="section-two__left__title">
          <div class="section-two__left__title__head">
            Rangkaian Proyek Menarik TLab
          </div>
          <div class="section-two__left__title__body">
            Integritas dan kreativitas menjadi kunci dalam membangun produk
            digital terbaik untuk bisnis Anda
          </div>
          <div class="section-two__left__title__action">
            <div>Lihat Semua Layanan TLab</div>
            <img src="/images/icons/arrow-up.svg" alt="arrow" />
          </div>
        </div>
        <div class="section-two-content">
          <img src="/images/services/santri-cover.svg" />
          <div class="project">
            <div>IT Managed Services</div>
            <div>kesan.id - Kedaulatan Santri dan Kepribadian Muslim</div>
          </div>
        </div>
      </div>
      <div class="section-two__right">
        <div class="section-two__right__wrapper">
          <div class="section-two-content">
            <img src="/images/services/ride-cover.svg" />
            <div class="project">
              <div>Appliaction Development</div>
              <div>Anterin.id Ridesharing company</div>
            </div>
          </div>
          <div class="section-two-content">
            <img src="/images/services/parking-cover.svg" />
            <div class="project">
              <div>Artificial intelligence</div>
              <div>Juru.id Smart Parking</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section-three">
      <div class="section-three__background">
        <img src="/images/background/bg-section-connect.svg" />
      </div>
      <div class="section-three__container">
        <div class="section-three__container__head">
          <div class="section-three__container__head__title">
            <span>Connect</span>
            <span>& Collaborate</span>
          </div>
          <div class="section-three__container__head__description">
            <div>
              Pengalaman partner TLab ketika berkolaborasi untuk menghasilkan
              produk terbaik
            </div>
            <div>
              <div>Lihat Semua partner TLab</div>
              <img src="/images/icons/arrow-up.svg" alt="arrow" />
            </div>
          </div>
        </div>

        <div class="section-three__container__content">
          <div
            v-for="(item, key) in newData"
            :key="key"
            class="card"
            :style="{ backgroundColor: item.backgroundColor }"
          >
            <div class="card__description">{{ item.description }}</div>
            <div class="card__background">
              <img :src="`/images/clients/${item.backgroundImage}`" />
            </div>
            <div class="card__people">
              <div class="card__people__profile">
                <img :src="`/images/clients/${item.userImage}`" />
              </div>
              <div class="card__people__user">
                <div>{{ item.name }}</div>
                <div>{{ item.position }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="section-three__container__slider">
          <div class="section-three__container__slider__v1">
            <swiper
              :modules="modules"
              :slides-per-view="6"
              :space-between="100"
              :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
              }"
              :loop="true"
              class="slider-swiper"
            >
              <swiper-slide>
                <img src="/images/logo/google.svg" height="50"
              /></swiper-slide>
              <swiper-slide
                ><img src="/images/logo/jaya-motor.svg" height="50"
              /></swiper-slide>
              <swiper-slide
                ><img src="/images/logo/suhu.svg" height="50"
              /></swiper-slide>
              <swiper-slide
                ><img src="/images/logo/anterin.svg" height="50"
              /></swiper-slide>
              <swiper-slide
                ><img src="/images/logo/kesan.svg" height="50"
              /></swiper-slide>
              <swiper-slide
                ><img src="/images/logo/ipb.svg" height="50"
              /></swiper-slide>
              <swiper-slide>
                <img src="/images/logo/google.svg" height="50"
              /></swiper-slide>
              <swiper-slide
                ><img src="/images/logo/jaya-motor.svg" height="50"
              /></swiper-slide>
              <swiper-slide
                ><img src="/images/logo/suhu.svg" height="50"
              /></swiper-slide>
              <swiper-slide
                ><img src="/images/logo/anterin.svg" height="50"
              /></swiper-slide>
              <swiper-slide
                ><img src="/images/logo/kesan.svg" height="50"
              /></swiper-slide>
              <swiper-slide
                ><img src="/images/logo/ipb.svg" height="50"
              /></swiper-slide>
            </swiper>
          </div>
          <div class="section-three__container__slider__v2">
            <swiper
              dir="rtl"
              :modules="modules"
              :slides-per-view="6"
              :space-between="100"
              :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
              }"
              :loop="true"
              class="slider-swiper"
            >
              <swiper-slide>
                <img src="/images/logo/tree.svg" height="50"
              /></swiper-slide>
              <swiper-slide
                ><img src="/images/logo/univ-xxx.svg" height="50"
              /></swiper-slide>
              <swiper-slide
                ><img src="/images/logo/ugm.svg" height="50"
              /></swiper-slide>
              <swiper-slide
                ><img src="/images/logo/gojek.svg" height="50"
              /></swiper-slide>
              <swiper-slide
                ><img src="/images/logo/grab.svg" height="50"
              /></swiper-slide>
              <swiper-slide
                ><img src="/images/logo/uber.svg" height="50"
              /></swiper-slide>
              <swiper-slide>
                <img src="/images/logo/tree.svg" height="50"
              /></swiper-slide>
              <swiper-slide
                ><img src="/images/logo/univ-xxx.svg" height="50"
              /></swiper-slide>
              <swiper-slide
                ><img src="/images/logo/ugm.svg" height="50"
              /></swiper-slide>
              <swiper-slide
                ><img src="/images/logo/gojek.svg" height="50"
              /></swiper-slide>
              <swiper-slide
                ><img src="/images/logo/grab.svg" height="50"
              /></swiper-slide>
              <swiper-slide
                ><img src="/images/logo/uber.svg" height="50"
              /></swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";
import { DocumentsActionTypes } from "@/store/modules/main/action-types";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface response {
  description: string;
  name: string;
  position: string;
  backgroundColor: string;
  backgroundImage: string;
  userImage: string;
}

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const store = useStore();
    const newData = reactive<response[]>([
      {
        description: "",
        name: "",
        position: "",
        backgroundColor: "",
        backgroundImage: "",
        userImage: "",
      },
    ]);

    store.dispatch(DocumentsActionTypes.FETCH_CLIENTS, undefined);

    const getData = computed(() => store.getters.GET_CLIENTS.dataClients);

    watch(getData, (value) => {
      newData.splice(0, 1);
      value.forEach((item: response) => {
        newData.push(item);
      });
    });

    return {
      newData,
      modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
    };
  },
});
</script>

<style lang="scss" scoped>
@use "@/public/scss/abstracts/global" as *;

.container {
  .section-one {
    max-width: $max-width;
    margin: 0 auto 100px auto;
    padding: 0 10px;
    &__title {
      text-align: center;
      max-width: 841px;
      width: 100%;
      font-family: "Quicksand";
      font-size: 48px;
      font-weight: 700;
      color: #5a5a5a;
      margin: 0 auto 32px auto;
    }
    &__description {
      text-align: center;
      max-width: 780px;
      width: 100%;
      font-family: "Nunito Sans";
      font-size: 24px;
      font-weight: 400;
      color: #5a5a5a;
      margin: 0 auto 30px auto;
    }
    &__image {
      margin: auto;
      max-width: 907px;
      img {
        width: 100%;
      }
    }
  }

  .section-two {
    max-width: $max-width;
    margin: 0 auto 100px auto;
    font-family: "Quicksand";
    display: flex;
    gap: 35px;
    padding: 0 10px;
    &__left {
      display: flex;
      flex-direction: column;
      gap: 65px;
      &__title {
        &__head {
          font-size: 32px;
          font-weight: 700;
          color: #5a5a5a;
          max-width: 480px;
          margin-bottom: 16px;
        }
        &__body {
          font-family: "Nunito Sans";
          font-size: 18px;
          font-weight: 400;
          color: #5a5a5a;
          max-width: 607px;
          margin-bottom: 16px;
        }
        &__action {
          display: flex;
          gap: 16px;
          align-items: center;
          color: #5449d6;
          cursor: pointer;
          div {
            font-size: 16px;
            font-weight: 700;
            letter-spacing: 0.5%;
          }
          &:hover {
            color: #2e1fd2;
          }
        }
      }
    }
    &__right {
      height: inherit;
      display: flex;
      align-items: flex-end;
      &__wrapper {
        display: flex;
        flex-direction: column;
        gap: 32px;
      }
    }
    .section-two-content {
      position: relative;
      height: fit-content;
      img {
        object-fit: cover;
        width: 100%;
      }
      .project {
        position: absolute;
        bottom: 0;
        left: 0;
        background: #ffffff;
        border-top-right-radius: 8px;
        border-bottom-left-radius: 8px;
        padding: 38px 24px;
        color: #5a5a5a;
        div {
          &:nth-child(1) {
            font-size: 14px;
            font-weight: 700;
            letter-spacing: 0.5%;
            margin-bottom: 8px;
          }
          &:nth-child(2) {
            font-size: 24px;
            font-weight: 700;
            max-width: 322px;
          }
        }
      }
      &:nth-child(2) {
        grid-area: contentv1;
      }
      &:nth-child(3) {
        grid-area: contentv2;
      }
      &:nth-child(4) {
        grid-area: contentv3;
      }
    }
  }

  .section-three {
    font-family: "Quicksand";
    position: relative;
    height: 1220px;
    &__background {
      width: 100%;
      img {
        width: 100%;
        height: 700px;
        object-fit: cover;
        object-position: top;
      }
    }
    &__container {
      max-width: $max-width;
      margin: 0 auto;
      padding: 107px 10px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      &__head {
        display: flex;
        justify-content: space-between;
        margin-bottom: 100px;
        &__title {
          font-size: 32px;
          font-weight: 700;
          color: #5a5a5a;
          display: flex;
          flex-direction: column;
        }
        &__description {
          display: flex;
          flex-direction: column;
          gap: 16px;
          div {
            &:nth-child(1) {
              font-family: "Nunito Sans";
              font-size: 18px;
              font-weight: 400;
              color: #5a5a5a;
              max-width: 580px;
              width: 100%;
              line-height: 178%;
            }
            &:nth-child(2) {
              display: flex;
              gap: 16px;
              align-items: center;
              cursor: pointer;
              > div {
                font-size: 16px;
                font-weight: 700;
                letter-spacing: 0.5%;
                color: #5449d6;
                width: fit-content;
              }
              &:hover {
                color: #2e1fd2;
              }
            }
          }
        }
      }
      &__content {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 32px;
        margin-bottom: 80px;
        .card {
          border: none;
          border-radius: 7px;
          position: relative;
          height: 568px;
          &__description {
            padding: 31px 23px;
            font-weight: 700;
            font-size: 24px;
            color: #ffffff;
          }
          &__background {
            position: absolute;
            bottom: 0;
            img {
              width: 100%;
              display: block;
            }
          }
          &__people {
            position: absolute;
            bottom: 0;
            background: #ffffff;
            padding: 24px;
            display: flex;
            align-items: center;
            gap: 24px;
            border-top-right-radius: 7px;
            &__profile {
              margin: auto;
            }
            &__user {
              display: flex;
              flex-direction: column;
              gap: 4px;
              div {
                font-family: "Nunito Sans";
                color: #5a5a5a;
                &:nth-child(1) {
                  font-weight: 400;
                  font-size: 16px;
                }
                &:nth-child(2) {
                  font-weight: 400;
                  font-size: 14px;
                }
              }
            }
          }
        }
      }
      &__slider {
        display: flex;
        flex-direction: column;
        gap: 35px;
      }
    }
  }
}

@media (max-width: $width-tablet) {
  .container {
    .section-one {
      padding: 0 20px;
      &__title {
        font-size: 33px;
        font-weight: 600;
        margin: 0 auto 10px auto;
      }
      &__description {
        font-size: 18px;
        font-weight: 400;
      }
    }

    .section-two {
      flex-direction: column;
      padding: 0 20px;
      &__right {
        &__wrapper {
          width: 100%;
        }
      }
      .section-two-content {
        .project {
          padding: 20px 6px;
          max-width: 250px;
          width: 100%;
          div {
            &:nth-child(1) {
              font-size: 10px;
              font-weight: 600;
              letter-spacing: 0.5%;
              margin-bottom: 8px;
            }
            &:nth-child(2) {
              font-size: 16px;
              font-weight: 600;
              max-width: 322px;
            }
          }
        }
      }
    }

    .section-three {
      height: 2180px;
      &__container {
        padding: 107px 20px;
        &__head {
          flex-direction: column;
          gap: 15px;
          margin-bottom: 50px;
        }
        &__content {
          grid-template-columns: repeat(1, 1fr);
          row-gap: 20px;
          .card {
            height: 480px;
            &__description {
              font-weight: 600;
              font-size: 18px;
            }
            &__background {
              right: 0;
              left: 0;
            }
            &__people {
              padding: 15px 10px;
              gap: 15px;
              &__user {
                div {
                  &:nth-child(2) {
                    font-size: 12px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
