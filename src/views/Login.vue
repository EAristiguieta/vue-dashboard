<script lang="ts" setup>
import { useRouter } from "vue-router";

const router = useRouter();
const logeado = () => {
  router.push("/loginsignin");
};

import { ref } from "vue";
const input = ref("");
</script>

<template>
  <section class="login">
    <el-card class="login__card" style="max-width: 480px">
      <template class="login__template" #header>Login</template>
      <el-input
        class="login__input"
        v-model="input"
        style="width: 240px"
        placeholder="Nombre"
      />
      <el-input
        class="login__input"
        v-model="input"
        style="width: 240px"
        type="password"
        placeholder="Contraseña"
        show-password
      />
      <div>
        <el-button class="login__button" @click="logeado"
          >Iniciar sesion</el-button
        >
      </div>
    </el-card>
  </section>
</template>

<style lang="scss" scoped>
.login {
  display: flex;
  text-align: center;
  justify-content: center;
}

.login__input {
  padding: 0.5rem;
}
</style>
