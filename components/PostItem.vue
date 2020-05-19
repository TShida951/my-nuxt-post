<template>
  <div class="post">
    <div class="post__content">
      <a class="post__header post__header-link clickable">
        <h4 class="title is-4">{{ title }}</h4>
        <h5 class="subtitle is-5">{{ subtitle }}</h5>
      </a>
      <div class="post__footer">by {{ author }}, {{ date | formatDate }}</div>
    </div>
    <div class="post__right">
      <label class="checkbox">
        <input type="checkbox" :checked="isRead" />
        Read
      </label>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: false,
    },
    date: {
      type: Date,
      required: false,
      default: () => new Date(),
    },
    author: {
      type: String,
      required: false,
    },
    isRead: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.post {
  margin-bottom: 20px;
  padding: 5px;
  border-bottom: 2px solid transparent;
  display: flex;
  flex-direction: row;

  &:hover {
    border-bottom: 2px solid #e8e8e8;
  }

  &__content {
    flex: 1;
  }

  &__right {
    float: right;
    justify-content: flex-end;
    align-self: center;
  }

  &__footer {
    font-style: italic;
  }
}
</style>
