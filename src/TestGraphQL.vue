<template>
    <!-- <button @click="executeApolloClient">実行</button> -->
    <div v-if="result">

        {{ result }}
    </div>
</template>
  
<script setup lang="ts">
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { useApolloClient } from '@vue/apollo-composable';

const { result } = useQuery(gql`
    query {
              country(code: "BR") {
                    name
                    native
                    capital
                    emoji
                    currency
                    languages {
                    code
                    name
                    }
  }
}
  `);

// const setup = () => {
//     const { client } = useApolloClient();
//     const executeApolloClient = async () => {
//         const result = await client.query({
//             query: gql`
//                 query {
//                     country(code: "BR") {
//                             name
//                             native
//                             capital
//                             emoji
//                             currency
//                                 languages {
//                                 code
//                                 name
//                                 }
//                         }
//                 }
//                 `
//         });

//         console.log(result);
//     };
//     return { executeApolloClient };
// };
</script>
  