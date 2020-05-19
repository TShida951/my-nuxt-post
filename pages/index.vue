<template>
  <div>
    <!-- Navbar -->
    <Navbar></Navbar>
    {{ testData }}
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
              <!-- end of post -->
            </div>
            <!-- end of side bar -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import { mapState } from 'vuex';
import { fetchPostsAPI } from '@/store/post';
import PostItem from '@/components/PostItem';

export default {
  // layout: 'dark-theme',
  data() {
    return {
      form: {
        title: 'Some title',
        subtitle: 'some subtitle',
      },
    };
  },
  async asyncData() {
    const posts = await fetchPostsAPI();
    return { posts };
  },
  methods: {},
  components: {
    Navbar,
    PostItem,
  },
  // computed: {
  // ...mapState('post', ['items']),

  // ...mapState({
  //   posts: (state) => state.post.items,
  // }),
  // },
  // mounted() {
  //   this.$store.dispatch('post/fetchPosts');
  // },
};
</script>

<style scoped></style>
