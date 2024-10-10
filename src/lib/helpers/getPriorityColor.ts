export const getPriorityColor = (priority: number): string => {
  switch (priority) {
    case 1:
      return 'bg-red-700';

    case 2:
      return 'bg-orange-700';

    case 3:
      return 'bg-yellow-700';

    case 4:
      return 'bg-green-700';

    default:
      throw new Error(`Unknown priority: ${priority}`);
  }
};
