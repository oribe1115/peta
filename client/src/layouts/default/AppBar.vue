<template>
  <v-app-bar flat color="primary">
    <v-app-bar-title>
      Peta
    </v-app-bar-title>
    {{ traPId }}
  </v-app-bar>
</template>

<script lang="ts" setup>
import { graphql } from '@/gql';
import { useQuery } from '@vue/apollo-composable';
import { computed } from 'vue';

const {result} = useQuery(graphql(/* GraphQL */ `
query getAccessUser {
  accessUser {
    traPId
  }
}
`),{})
const traPId = computed(() => result?.value?.accessUser.traPId)
</script>
