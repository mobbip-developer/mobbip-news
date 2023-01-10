export type SubItem = {
  text: string;
  link?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  linkAs?: any;
};

export type SubMenu = {
  title: string;
  subItems: SubItem[];
};

export interface Menu extends SubItem {
  subMenu?: SubMenu[];
}
