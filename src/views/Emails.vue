<template>
  <el-table :data="emails" border="true" style="width: 100%">
    <el-table-column prop="identifier" label="Identificador" />
    <el-table-column prop="description" label="Descripcion" />
    <el-table-column prop="subject" label="Asunto" />

    <el-table-column label="Html">
      <template #default="{ row }">
        <el-button plain type="primary" size="small" @click="showHtml(row)">
          Ver HTML
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  <!-- Modal -->
  <el-dialog v-model="centerDialogVisible" title="Template" width="500" center>
    <span v-html="selectedEmailHtml"> </span>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="centerDialogVisible = false">Cancelar</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">
          Confirmar
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import { onMounted, ref } from "vue";

const emails = ref([]);
const emailTemplates = ref({});
const selectedEmailHtml = ref("");
const centerDialogVisible = ref(false);

onMounted(async () => {
  const res = await fetch("http://localhost:3000/email-management");
  const data = await res.json();
  emails.value = data;

  // Almacenar los templates de email en un objeto para acceder más rápidamente
  // mete los datos en el value pero justo en la propiedad identifier
  data.forEach((email) => {
    emailTemplates.value[email.identifier] = email.template;
  });
});

const showHtml = (email) => {
  // Obtener el template del correo electrónico correspondiente del objeto emailTemplates
  selectedEmailHtml.value = emailTemplates.value[email.identifier];
  centerDialogVisible.value = true;
};
</script>

<style lang="scss" scoped></style>
