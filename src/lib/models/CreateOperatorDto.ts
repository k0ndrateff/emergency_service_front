/**
 * DTO which is used to create operator.
 * @see Operator
 */
export class CreateOperatorDto {
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
}
