const keys = {
  operators: ['operators'],
  operatorsAll() {
    return [...this.operators, 'all'];
  }
} as const;

export const queryKeys = Object.freeze(keys);
