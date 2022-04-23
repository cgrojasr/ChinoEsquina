import { sort } from "./sort";

export interface pageable {
    sort: sort,
    offset: number,
    pageSize: number,
    pageNumber: number,
    paged: boolean,
    unpaged: boolean,
}