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
import { useQuery } from '@apollo/client';
import { computed } from 'vue';

const {data} = useQuery(graphql(/* GraphQL */ `
query getAccessUser {
  accessUser {
    traPId
  }
}
`),{})
const traPId = computed(() => data?.accessUser.traPId)
</script>
