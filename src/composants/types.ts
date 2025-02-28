export type BuildingType = {
  floors: number;
  doors: { isOpen: boolean }[];
  windowsLeft: { isLit: boolean, isOpen: boolean }[];
  windowsRight: { isLit: boolean, isOpen: boolean }[];
}





export type WindowType = {
  isLit: boolean;
  isOpen: boolean;
}

export type WindowsType = WindowType[];

export type DoorType = {
  isOpen: boolean;
}

export type DoorsType = DoorType[] | undefined;


export type enumDirection = 'up' | 'down' | 'none';

export type enumDoorDirection = 'open' | 'close' | 'none';