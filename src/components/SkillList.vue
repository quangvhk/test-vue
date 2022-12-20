<template>
  <div>
    <ul>
      <li v-for="skill in user.skills" :key="skill.id" class="skill-item">
        <el-input placeholder="Type username" v-model="currentEditSkill.title" style="width: 200px;" v-if="currentEditSkill.hasOwnProperty('id') && currentEditSkill.id === skill.id"></el-input>
        <div style="cursor: pointer" @click="onEditSkill(skill)" v-else>{{ skill.title }}</div>
        <el-select
            v-model="currentEditSkill.level" placeholder="Select" style="width: 700px;"
            v-if="currentEditSkill.hasOwnProperty('id') && currentEditSkill.id === skill.id"
        >
          <el-option
              v-for="item in skillLevelList"
              :key="item"
              :label="item"
              :value="item">
          </el-option>
        </el-select>
        <el-progress :text-inside="true" :stroke-width="26" :percentage="skill.level" style="width: 700px" v-else></el-progress>
        <div class="btn green" @click="onSaveSkill(skill)" v-if="currentEditSkill">Save</div>
        <div class="btn" @click="onRemoveSkill(skill.id)">X</div>
      </li>
    </ul>
  </div>
</template>
<script>
import {mapActions} from 'vuex';

export default {
  props: ['user'],
  data() {
    return {
      currentEditSkill: {},
      skillLevelList: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
    }
  },
  methods: {
    ...mapActions('user', ['removeSkill', 'saveSkill']),
    onRemoveSkill(id) {
      this.removeSkill({
          userId: this.user.id,
          skillId: id
      });
    },
    onEditSkill(skill) {
      this.currentEditSkill = skill;
    },
    onSaveSkill(skill) {
      this.saveSkill({
        userId: this.user.id,
        skill: {
          ...skill,
          title: this.currentEditSkill.title,
          level: this.currentEditSkill.level
        }
      });
      this.currentEditSkill = {};
    }
  }
}
</script>
<style lang="scss">
ul {
  padding-inline-start: 0;
  li {
    list-style-type: none;
  }
}
.skill {
  &-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    div {
      margin-right: 30px;
    }
  }
}
.btn {
  width: 30px;
  height: 30px;
  cursor: pointer;
  background-color: red;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
