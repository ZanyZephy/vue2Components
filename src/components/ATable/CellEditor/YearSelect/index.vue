<template>
  <div id="tempElement">
    <div class="yearSelect">
      <div>Clicking here does not close the popup!</div>
      <button class="yearButton" @click="onClick(2006)">2006</button>
      <button class="yearButton" @click="onClick(2008)">2008</button>
      <button class="yearButton" @click="onClick(2010)">2010</button>
      <button class="yearButton" @click="onClick(2012)">2012</button>
      <div>
        <input
          type="text"
          style="width: 100%"
          placeholder="clicking on this text field does not close"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Year",
  data() {
    return {
      value: null,
      eGui: null,
    };
  },
  methods: {
    getValue() {
      return this.value;
    },
    isPopup() {
      return true;
    },
    onClick(value) {
      this.value = value;
      this.params.stopEditing();
    },
  },
  mounted() {
    this.value = this.params.value;
  },
};
</script>
