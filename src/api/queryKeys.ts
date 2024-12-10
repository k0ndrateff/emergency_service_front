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
  },
  incidentsPrevious() {
    return [...this.incidents, 'previous'];
  },
  incidentsGeoCoded() {
    return [...this.incidents, 'active', 'geo'];
  },
  incidentsOne(id: number | undefined) {
    return [...this.incidents, 'one', id];
  },
  crews: ['crews'],
  crewsAll() {
    return [...this.crews, 'all'];
  },
  crewsAllGeoCoded() {
    return [...this.crews, 'all', 'geo'];
  }
} as const;

export const queryKeys = Object.freeze(keys);
