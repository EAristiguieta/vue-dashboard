<template>
  <div class="signin">
    <el-card class="signing__card" style="max-width: 480px">
      <template class="signing__title" #header>Ingresa el codigo</template>
      <el-input class="signing__input" v-model="input" style="width: 40px" />
      <el-input class="signing__input" v-model="input" style="width: 40px" />
      <el-input class="signing__input" v-model="input" style="width: 40px" />
      <el-input class="signing__input" v-model="input" style="width: 40px" />
      <div>
        <el-button class="login__button" @click="logeado"
          >Iniciar sesion</el-button
        >
      </div>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";

const router = useRouter();
const logeado = () => {
  router.push("/home");
};

import { ref } from "vue";
const input = ref("");
</script>

<style lang="scss" scoped>
.signin {
  display: flex;
  text-align: center;
  justify-content: center;
}

.signing__input {
  padding: 0.2rem;
}
</style>
