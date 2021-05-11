import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  quiz: [],
  question: {},
  resultsArr: ['Tank', 'Damage', 'Support', 'Utility', 'Weapons', 'Spells', 'Balance'],
  results: {
    tank: 0,
    damage: 0,
    support: 0,
    utility: 0,
    weapons: 0,
    spells: 0,
    balance: 0
  },
  count: {
    role: 0,
    style: 0
  },
  job: {},
  character: {},
  rawData: []
})
