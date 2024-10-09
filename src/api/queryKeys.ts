const keys = {
  operators: ['operators'],
  operatorsAll() {
    return [...this.operators, 'all'];
  },
  operatorsOne(id: number) {
    return [...this.operators, 'one', id];
  },
  incidents: ['incidents'],
  incidentsActive() {
    return [...this.incidents, 'active'];
  }
} as const;

export const queryKeys = Object.freeze(keys);
