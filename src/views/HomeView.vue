<template>
  <div class="home">
    <div class="container">
      <h1 class="title my-3">CRUD</h1>
      <form
        class="form-control d-flex shadow my-3"
        @submit.prevent="submitForm"
      >
        <input
          type="text"
          class="input"
          v-model="form.name"
          placeholder="Enter your name..."
          required
        />
        <input
          type="text"
          class="input"
          v-model="form.label"
          placeholder="Enter your label..."
          required
        />
        <button class="btn btn-primary" v-if="submitButtons.isShown">
          Add
        </button>
        <button class="btn btn-info" v-if="!submitButtons.isShown">Send</button>
      </form>

      <ul class="list">
        <li
          class="item d-flex align-items-center justify-content-between shadow p-2 my-3"
          v-for="item in getRoles"
        >
          <div class="d-flex">
            Name: <strong>{{ item.name }}</strong
            >, Label: <strong>{{ item.label }}</strong>
          </div>
          <div class="btns d-flex">
            <button class="btn btn-success" @click="updateElement(item.id)">
              Update
            </button>
            <button class="btn btn-danger" @click="deleteElement(item.id)">
              Delete
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      form: {
        name: "",
        label: "",
      },
      submitButtons: {
        isShown: true,
      },
    };
  },
  computed: {
    ...mapGetters(["getRoles", "getMessage"]),
  },
  methods: {
    ...mapActions([
      "actionRoles",
      "actionForm",
      "actionUpdateElement",
      "actionRemoveElement",
    ]),
    async submitForm() {
      if (!this.submitButtons.isShown) {
        console.log("bu if yani isShown = false");
        await this.actionUpdateElement(this.form);
        console.log("Home view submit form => ", this.form);
        this.form.name = "";
        this.form.label = "";
        this.submitButtons.isShown = !this.submitButtons.isShown;
      } else {
        console.log("bu else yani isShwown = true");
        await this.actionForm(this.form);
        if (this.getMessage.success) {
          await this.actionRoles();
          alert(this.getMessage.message);
          this.form.name = "";
          this.form.label = "";
        } else {
          alert("Tizimda xatolik bor");
        }
      }
    },
    async updateElement(id) {
      console.log("update element id => ", id);
      let selectedItem;
      this.getRoles.find((element, index) => {
        if (element.id == id) {
          selectedItem = element;
        }
      });
      console.log("Index of Item => ", selectedItem);
      this.form.name = selectedItem.name;
      this.form.label = selectedItem.label;
      this.submitButtons.isShown = !this.submitButtons.isShown;
      // this.actionUpdateElement(id, this.form);
    },
    async deleteElement(id) {
      await this.actionRemoveElement(id);
      await this.getRoles.forEach((element, index) => {
        if (element.id == id) {
          this.getRoles.splice(index, 1);
        }
      });
    },
  },
  async mounted() {
    await this.actionRoles();
  },
};
</script>

<style lang="scss">
.container {
  max-width: 600px;
  .title {
    text-align: center;
  }
  form input {
    width: 100%;
  }
  .list {
    margin: 0;
    padding: 0;
    list-style: none;
  }
}
</style>
