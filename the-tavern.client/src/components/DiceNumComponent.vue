<template>
  <div class="col-2 text-center">
    <div class="bg-light diceRoll" draggable="true" @dragstart="moveNum(diceProps, indexProp)">
      <h3 v-if="diceProps > 0">
        {{ diceProps }}
      </h3>
    </div>
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { computed, reactive, onMounted } from 'vue'

export default {
  name: 'DiceNum',
  props: {
    diceProps: {
      type: Number,
      required: true
    },
    indexProp: {
      type: String,
      required: true
    }
  },
  setup() {
    const state = reactive({
      abilityScore: computed(() => AppState.abilityScore)
    })
    onMounted(async() => {

    })
    return {
      state,

      async moveNum(num, index) {
        AppState.activeNum = num
        AppState.activeScore = index
      }

    }
  }
}

</script>

<style scoped>
.diceRoll{
 border: 1px solid black;
 height: 5rem;
}

h3 {
  font-size: 4rem
}

</style>
