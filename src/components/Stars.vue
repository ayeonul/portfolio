<template>
  <div class="star-ratings">
    <StarRating
      :rating="rating"
      :read-only="true"
      :show-rating="false"
      :star-size="20"
      :increment="0.5"
      active-color="var(--main-pink)"
    />
  </div>
</template>

<script>
import StarRating from "vue-star-rating";

export default {
  components: {
    StarRating,
  },
  props: {
    rating: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.star-ratings {
  display: inline-block;
}
</style>