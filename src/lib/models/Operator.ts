export class Operator {
  /**
   * ID of the operator. Positive integer.
   * @example 123
   */
  id: number;

  /**
   * First name of the operator.
   * @example "Egor"
   */
  first_name: string;

  /**
   * Last name of the operator.
   * @example "Kondratev"
   */
  last_name: string;

  /**
   * Middle name (actually patronymic) of the operator.
   * @example "Ivanovich"
   */
  middle_name: string;

  /**
   * Boolean indicating whether specific operator is currently free to answer calls.
   */
  is_free: boolean;
}
