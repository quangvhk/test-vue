<template>
  <div class="add-form">
    <div>Skill: </div>
    <el-input placeholder="Type skill" v-model="skillName"></el-input>
    <el-select v-model="skillLevel" placeholder="Select">
      <el-option
          v-for="item in skillLevelList"
          :key="item"
          :label="item"
          :value="item">
      </el-option>
    </el-select>
    <div class="btn green" @click="onAddSkill">Add</div>
  </div>
</template>
<script>
import {mapActions} from 'vuex';

export default {
  props: ['user'],
  data() {
    return {
      skillName: '',
      skillLevel: 0,
      skillLevelList: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
    }
  },
  methods: {
    ...mapActions('user', ['addSkill']),
    onAddSkill() {
      this.addSkill(
          {
            userId: this.user.id,
            title: this.skillName,
            level: this.skillLevel
          }
      )
    }
  }
}
</script>
<style lang="scss">
.add-form {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  div {
    margin-right: 20px;
  }
}
.btn {
  width: 30px;
  height: 30px;
  cursor: pointer;
  padding: 5px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  &.green {
    background-color: greenyellow !important;
    color: black;
  }
}
</style>
