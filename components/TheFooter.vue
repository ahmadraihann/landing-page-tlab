<template>
  <div class="footer">
    <div class="footer__container">
      <div class="footer__container__head">
        <div class="footer__container__head__title">
          <span>TLab Amazing</span>
          <span>Delivering Innovation</span>
        </div>
        <div class="footer__container__head__icon">
          <img src="/images/icons/icon-facebook.svg" />
          <img src="/images/icons/icon-instagram.svg" />
          <img src="/images/icons/icon-youtube.svg" />
        </div>
        <div class="footer__container__head__copyright">
          2010 - 2021 &copy; TLab. All rights reserved.
        </div>
      </div>

      <div class="footer__container__menu">
        <div class="footer__container__menu__title">Company</div>
        <ul>
          <li>About</li>
          <li>Career</li>
          <li>Clients</li>
          <li>Logo</li>
          <li>Brand Identity</li>
          <li>Article</li>
          <li>Studi Kasus</li>
          <li>Kontak</li>
        </ul>
      </div>

      <div class="footer__container__menu">
        <div class="footer__container__menu__title">Layanan</div>
        <ul>
          <li>IT Managed Services</li>
          <li>IT Consultant</li>
          <li>IT Training</li>
          <li>Big Data</li>
          <li>Artificial Intelligent</li>
          <li>Cloud Computing</li>
          <li>Internet Of Things</li>
          <li>Web Development</li>
          <li>Mobile App Development</li>
          <li>System Integration</li>
          <li>System Information</li>
        </ul>
      </div>

      <div class="footer__container__kontak">
        <div class="footer__container__kontak__touch">
          <div>Kontak</div>
          <div>
            <span>PT. Teknologi Kode Indonesia</span>
            <span>contact@tlab.co.id</span>
          </div>
        </div>
        <div class="footer__container__kontak__office">
          <div>
            <span> Head Office </span>
            <span> Jl Tanjung No.126, Sorosutan, Umbulharjo, </span>
            <span> Yogyakarta - 55162 </span>
          </div>
          <div>
            <img src="/images/icons/icon-phone.svg" />
            <span>(0274) - 2870394</span>
          </div>
        </div>
        <div class="footer__container__kontak__office">
          <div>
            <span> Jakarta Office </span>
            <span>
              SOHO Pancoran Unit S-1210 Jl. Let. Jend. MT. Haryono Kav 2-3
              Pancoran,
            </span>
            <span> Jakarta Selatan 12810 </span>
          </div>
          <div>
            <img src="/images/icons/icon-phone.svg" />
            <span>(0274) - 2870394</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
});
</script>

<style lang="scss" scoped>
@use "@/public/scss/abstracts/global" as *;
.footer {
  background-image: url("/images/background/bg-footer.svg");
  background-position: bottom left;
  background-repeat: no-repeat;
  background-color: #f7fcff;
  font-family: "Quicksand";
  color: #5a5a5a;
  margin: 0 -8px -8px -8px;
  &__container {
    max-width: $max-width;
    margin: 0 auto;
    padding: 84px 10px 100px 10px;
    display: grid;
    grid-template-areas: "head company layanan kontak";
    column-gap: 82px;
    &__head {
      grid-area: head;
      max-width: 330px;
      width: 100%;
      &__title {
        font-weight: 700;
        font-size: 32px;
        margin-bottom: 24px;
        display: flex;
        flex-direction: column;
        span {
          &:nth-child(2) {
            font-size: 25px;
          }
        }
      }
      &__icon {
        display: flex;
        gap: 20px;
        align-items: center;
        margin-bottom: 40px;
      }
      &__copyright {
        font-family: "Nunito Sans";
        font-weight: 400;
        font-size: 11px;
      }
    }
    &__menu {
      line-height: 180.5%;
      letter-spacing: 0.005em;
      &:nth-child(2) {
        grid-area: company;
      }
      &:nth-child(3) {
        grid-area: layanan;
        margin-left: 30px;
      }
      &__title {
        font-weight: 700;
        font-size: 14px;
        margin-bottom: 20px;
        color: #a9abad;
      }
      ul {
        list-style: none;
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 15px;
        font-family: "Nunito Sans";
        font-weight: 400;
        font-size: 16px;
        margin: 0;
        padding: 0;
        li {
          cursor: pointer;
          &:hover {
            color: #222020;
          }
        }
      }
    }
    &__kontak {
      grid-area: kontak;
      display: flex;
      flex-direction: column;
      gap: 48px;
      line-height: 180.5%;
      letter-spacing: 0.005em;
      margin-left: 30px;
      &__touch {
        display: flex;
        flex-direction: column;
        gap: 20px;
        div {
          &:nth-child(1) {
            font-weight: 700;
            font-size: 14px;
            color: #a9abad;
          }
          &:nth-child(2) {
            display: flex;
            flex-direction: column;
            gap: 8px;
            font-weight: 700;
            font-size: 16px;
          }
        }
      }
      &__office {
        font-family: "Nunito Sans";
        font-weight: 400;
        font-size: 16px;
        line-height: 180.5%;
        letter-spacing: 0.005em;
        div {
          &:nth-child(1) {
            margin-bottom: 16px;
          }
          &:nth-child(2) {
            display: flex;
            gap: 8px;
            align-items: center;
          }
        }
      }
    }
  }
}

@media (max-width: $width-tablet) {
  .footer {
    &__container {
      grid-template-areas:
        "head head"
        "kontak kontak"
        "company layanan";
      column-gap: 0;
      padding: 84px 20px 100px 20px;
      &__head {
        margin-bottom: 50px;
      }
      &__menu {
        &:nth-child(3) {
          margin-left: 0;
        }
      }
      &__kontak {
        margin-left: 0;
        margin-bottom: 50px;
      }
    }
  }
}
</style>
