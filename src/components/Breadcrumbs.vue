<template>
  <nav aria-label="breadcrumb">
    <ol
      :class="`px-0 pt-1 pb-0 mb-0 bg-transparent breadcrumb ${
        !isRTL ? 'me-sm-6' : ' '
      }`"
    >
      <li
        :class="`text-sm breadcrumb-item  ${
          isNavFixed ? 'text-dark' : 'text-white'
        }`"
      >
    <h6
      :class="`mb-0 font-weight-bolder ${
      isNavFixed ? 'text-dark' : 'text-white '
      }`"
    >
      {{ currentPage }}
    </h6>
        
      </li>

    </ol>

  </nav>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Breadcrumbs",
  props: {
    currentPage: {
      type: String,
      default: ""
    },
    currentDirectory: {
      type: String,
      default: ""
    }
  },
  computed: {
    ...mapState(["isRTL", "isNavFixed"])
  }
};
</script>
