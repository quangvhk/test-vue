<template>
  <div>
    <ul>
      <router-link :to="{name: 'User', params: {username: user.username}}" v-for="user in users" :key="user.id">
        <li class="user-item" :class="[currentUser && user.id === currentUser.id ? 'active' : '']">
          {{ user.name }}
        </li>
      </router-link>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters('user', ['users']),
    currentUser() {
      const username = this.$route.params.username;
      return this.users.find(u => u.username === username);
    }
  }
}
</script>
<style lang="scss">
a {
  text-decoration: none;
  color: black;
}
ul {
  padding-inline-start: 0;
  li {
    list-style-type: none;
  }
}
.user {
  &-item {
    padding: 10px;
    border-radius: 4px;
    cursor: pointer;
    &:hover,
    &.active {
      border-bottom: 2px solid #c4c4c4;
    }
  }
}
</style>
