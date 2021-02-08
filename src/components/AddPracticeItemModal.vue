<template>
  <div class="text-center">
    <v-dialog v-model="dialog" activator="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
          Add Item
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2">
          Add Practice Item
        </v-card-title>

        <slot name="body">
          <v-text-field v-model="newPracticeItem.title" label="Title" style="margin: 10px;"></v-text-field>

          <v-textarea solo v-model="newPracticeItem.details" name="input-7-4" label="Details" style="margin: 10px;"></v-textarea>

          <v-text-field type="number" v-model="newPracticeItem.minutes" label="Minutes" style="margin: 10px;"></v-text-field>
        </slot>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="addPracticeItem">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'AddPracticeItemModal',
  data() {
    return {
      dialog: false,
      newPracticeItem: { title: '', details: '', minutes: 0 }
    };
  },
  methods: {
    addPracticeItem() {
      this.dialog = false;
      this.$store.commit('addPracticeItem', this.newPracticeItem);
      this.newPracticeItem = {};
    }
  }
};
</script>
