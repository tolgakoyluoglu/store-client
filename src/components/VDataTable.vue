<template>
  <div class="data-table">
    <table v-if="tableData.length">
      <thead>
        <th v-for="(header, index) in Object.keys(tableData[0])" :key="index">
          <div>{{ header }}</div>
        </th>
      </thead>
      <tbody>
        <tr v-for="(data, index) in tableData" :key="index">
          <td v-for="(value, key) in data" :key="key">
            <div>
              {{ value }}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue'

defineProps({
  tableData: {
    type: Object,
    default: () => {
      return {}
    }
  }
})
</script>
<style lang="postcss" scoped>
.data-table {
  overflow-x: auto;

  table {
    min-width: 100%;
    text-align: left;
    border-collapse: collapse;
    border: 1px solid #ddd;
    font-size: 14px;

    thead {
      th {
        padding: 8px;
        background-color: #7f56d9;
        color: #fff;
      }
    }
    td {
      div {
        padding: 8px;
        max-width: 150px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    tr:nth-child(even) {
      background-color: #f2f2f2;
    }
    tr:hover {
      background-color: #ddd;
      cursor: pointer;
    }
  }
}
</style>
