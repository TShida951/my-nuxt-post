<template>
  <div>
    <!-- Navbar -->
    <Navbar></Navbar>
    <div class="blogs-page">
      <div class="main-content">
        <div class="container">
          <div class="columns is-mobile">
            <div class="column is-8 is-offset-2">
              <div class="section">
                <div class="title">
                  <h1>Newest Posts</h1>
                  <hr />
                </div>
                <!-- Post Items -->
                <div v-if="posts && posts.length">
                  <PostItem
                    v-for="post in posts"
                    :key="post._id"
                    :title="post.title"
                    :subtitle="post.subtitle"
                    :date="post.createdAt"
                    :author="post.author"
                    :isRead="post.isRead"
                  ></PostItem>
                </div>
                <div v-else>No Posts :(</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import PostItem from "@/components/PostItem";
import { fetchPostsAPI } from "@/store/post";

export default {
  // layout: 'dark-theme',
  data() {
    return {
      form: {
        title: "Some title",
        subtitle: "some subtitle"
      }
    };
  },
  methods: {},
  components: {
    Navbar,
    PostItem
  },
  // async asyncData() {
  //   const posts = await fetchPostsAPI();
  //   return { posts };
  // },
  fetch({ store }) {
    if (store.getters["post/hasEmptyItems"]) {
      return store.dispatch("post/fetchPosts");
    }
  },
  computed: {
    posts() {
      return this.$store.state.post.items;
    }
  }
};
</script>

<style scoped></style>
