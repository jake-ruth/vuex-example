<template>
  <div class="add-item-form">
    <!-- <label>Item Title</label> -->
    <!-- <input class="add-item-input" v-model="newPracticeItem.title" /> -->
    <button @click="showModal = true" class="add-item-btn">Add Practice Item</button>
    <AddPracticeItemModal v-if="showModal" :visible="showModal" :setVisible="setShowModal" />
  </div>
</template>

<script>
import AddPracticeItemModal from './AddPracticeItemModal';

export default {
  name: 'AddPracticeItem',
  components: { AddPracticeItemModal },
  data() {
    return {
      showModal: false
    };
  },
  methods: {
    setShowModal() {
      this.showModal = !this.showModal;
    }
  }
};
</script>

<style scoped>
.add-item-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.add-item-input {
  border-radius: 0px;
  border: none;
  height: 30px;
  width: 300px;
}

.add-item-btn:hover {
  background: lightgray;
}

.add-item-btn {
  border: none;
  height: 40px;
  width: 200px;
  cursor: pointer;
  background: lightseagreen;
  color: white;
}
</style>
