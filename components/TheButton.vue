<template>
  <button :class="classes" type="button" :disabled="disabled" @click="btnClick">
    <slot>
      {{ label }}
    </slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TheButton",
  props: {
    label: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      default: "md",
      validator: function (value: string) {
        return ["sm", "md", "lg"].indexOf(value) !== -1;
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["btnClick"],
  computed: {
    classes() {
      return ["the-btn", `the-btn-${this.size}`];
    },
  },
  methods: {
    btnClick() {
      this.$emit("btnClick");
    },
  },
});
</script>

<style lang="scss" scoped>
@use "@/public/scss/abstracts/global" as *;
.the-btn-md {
  display: flex;
  display: -webkit-flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;
  padding: 9.5px 24px;
  color: #ffffff;
  background-color: #00de9c;
  border-radius: 50px;
  outline: none;
  border: 1px solid #00de9c;
  font-family: "Quicksand";
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.5%;
}

.the-btn-sm {
  display: flex;
  display: -webkit-flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;
  padding: 9.5px 24px;
  color: #ffffff;
  background-color: #00de9c;
  border-radius: 50px;
  outline: none;
  border: 1px solid #00de9c;
  font-family: "Quicksand";
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.3%;
}

.the-btn:hover {
  background-color: #24b07f;
}

.the-btn:disabled {
  background-color: #b0d4d4;
}

.the-btn:active {
  background-color: #24b07f;
  border: 1px solid #50a187;
}

@media (max-width: $width-tablet) {
  .the-btn-md {
    font-size: 12px;
    font-weight: 600;
    padding: 5.5px 18px;
  }

  .the-btn-sm {
    font-size: 10px;
    font-weight: 500;
    padding: 3.5px 15px;
  }
}
</style>
