<template>
  <header :class="{ scroll: isScroll }">
    <TheDrawer
      id="drawer"
      :show="showDrawer"
      @onClose="showDrawer = false"
      @drawerClose="showDrawer = false"
    />
    <div class="header">
      <div class="header__mobile">
        <div class="header__mobile__logo">
          <img
            id="icon-menu"
            src="/images/icons/icon-menu.svg"
            alt="icon-menu"
            @click="showDrawer = true"
          />
          <img
            src="/images/abstracts/brand-logo.svg"
            alt="brand-logo"
            @click="handleClickLogo"
          />
        </div>
        <div class="header__mobile__action">
          <TheButton label="Hubungi Kami"></TheButton>
        </div>
      </div>
      <div class="header__container">
        <div class="header__container__content">
          <div class="header__container__content__logo">
            <img
              src="/images/abstracts/brand-logo.svg"
              alt="brand-logo"
              @click="handleClickLogo"
            />
          </div>
          <div class="header__container__content__menu">
            <ul class="header__container__content__menu__items">
              <li>Company</li>
              <li>Layanan</li>
              <li>Studi Kasus</li>
              <li>Data Center</li>
              <li><NuxtLink to="/playlist">Playlist</NuxtLink></li>
            </ul>
          </div>
        </div>
        <div class="header__container__action">
          <TheButton label="Hubungi Kami"></TheButton>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
export default {
  name: "TheHeader",
  data() {
    return {
      isScroll: false,
      showMobileMenu: false,
      showDrawer: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.doScroll);
    window.addEventListener("click", () => {
      const theDrawer = document.getElementById("drawer");
      const theMenu = document.getElementById("icon-menu");
      window.addEventListener("click", (e) => {
        const isContainsMenu = theMenu?.contains(e.target as Node);
        const isContainsDrawer = theDrawer?.contains(e.target as Node);
        if (!isContainsMenu && !isContainsDrawer) {
          this.showDrawer = false;
        }
      });
    });
  },
  unmounted() {
    window.removeEventListener("scroll", this.doScroll);
  },
  methods: {
    doScroll() {
      if (window.scrollY > 50) {
        this.isScroll = true;
      } else {
        this.isScroll = false;
      }
    },
    handleClickLogo() {
      const router = useRouter();
      router.push({ path: "/" });
    },
  },
};
</script>

<style lang="scss" scoped>
@use "@/public/scss/abstracts/global" as *;

header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background: #ffffff;
  .header {
    max-width: $max-width;
    margin: 0 auto;
    padding: 0 10px;

    &__mobile {
      display: none;
    }

    &__container {
      display: flex;
      justify-content: space-between;
      padding: 23px 10px;
      align-items: center;

      &__content {
        display: flex;
        gap: 30px;
        align-items: center;

        &__logo {
          img {
            cursor: pointer;
          }
        }

        &__menu {
          &__items {
            display: flex;
            justify-content: center;
            align-items: center;
            list-style: none;
            gap: 20px;
            font-family: "Nunito Sans";
            font-style: normal;
            font-size: 16px;
            font-weight: 400;
            letter-spacing: 0.5%;
            color: #5a5a5a;

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
    }
  }
}

.scroll {
  box-shadow: 0 4px 2px -2px rgba(14, 31, 53, 0.08);
}

@media (max-width: $width-tablet) {
  header {
    .header {
      &__container {
        display: none;
      }

      &__mobile {
        display: flex;
        justify-content: space-between;
        padding: 10px;
        align-items: center;

        &__logo {
          display: flex;
          gap: 15px;
          align-items: center;

          img {
            &:nth-child(1) {
              width: 15px;
            }
            &:nth-child(2) {
              height: 30px;
            }
          }
        }
      }
    }
  }
}
</style>
