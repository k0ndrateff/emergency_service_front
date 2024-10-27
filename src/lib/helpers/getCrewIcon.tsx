import {AmbulanceIcon} from "@/assets";

export const getCrewIcon = (crewType: number) => {
  switch (crewType) {
    case 1:
      return <AmbulanceIcon />;

    case 2:
      return <span>Иконка полиции</span>;

    default:
      return <span>Неподдерживаемая иконка</span>;
  }
};
