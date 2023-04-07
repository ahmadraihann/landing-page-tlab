<template>
  <div class="the-drawer" :class="{ show: show }">
    <div class="the-drawer__container">
      <div class="the-drawer__container__head">
        <img
          src="/images/abstracts/brand-logo.svg"
          alt="brand-logo"
          @click="handleClickLogo"
        />
        <img
          src="/images/icons/icon-close.svg"
          alt="icon-close"
          @click="$emit('on-close')"
        />
      </div>
      <div class="the-drawer__container__menu">
        <ul>
          <li>Company</li>
          <li>Layanan</li>
          <li>Studi Kasus</li>
          <li>Data Center</li>
          <li @click="$emit('drawer-close')">
            <NuxtLink to="/playlist">Playlist</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "TheDrawer",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["on-close", "drawer-close"],
  methods: {
    handleClickLogo() {
      const router = useRouter();
      router.push({ path: "/" });
      $emit("drawer-close");
    },
  },
});
</script>

<style lang="scss" scoped>
.the-drawer {
  background: #fff;
  position: fixed;
  margin-left: -100vw;
  top: 0;
  bottom: 0;
  transition: 1s;
  z-index: 999;
  padding: 20px 20px 20px 20px;
  box-shadow: 4px 0px 30px 5px rgba(250, 171, 171, 0.25);
  &__container {
    height: inherit;
    display: flex;
    flex-direction: column;
    &__head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 40px;
      gap: 50px;
      img {
        &:nth-child(1) {
          height: 20px;
        }
        &:nth-child(2) {
          width: 10px;
        }
      }
    }
    &__menu {
      ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        list-style: none;
        gap: 20px;
        font-family: "Nunito Sans";
        font-style: normal;
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 0.5%;
        color: #5a5a5a;
        margin: 0;
        padding: 0;

        li {
          cursor: pointer;
          &:hover {
            color: #222020;
          }
          > a {
            text-decoration: none;
            color: #5a5a5a;
            &:hover {
              color: #222020;
            }
          }
        }
      }
    }
  }
  &.show {
    margin-left: 0;
  }
}
</style>
