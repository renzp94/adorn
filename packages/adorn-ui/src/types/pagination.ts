import type { ComponentBaseProps } from ".";

export interface PaginationProps extends ComponentBaseProps{
  current?: number;
  disabled?:boolean;
  hideOnSinglePage?: boolean;
  pageSize?: number;
  pageSizeOptions?: number[];
  showQuickJumper?: boolean;
  showSizeChanger?: boolean;
  showTitle?: boolean;
  total?: number;
  showTotal?: (total: number,current?: number) => string;
  onChange?: ((v:{ page:number, pageSize: number }) => void);
  onShowSizeChange?: ((v:{ current:number, size: number }) => void);
}