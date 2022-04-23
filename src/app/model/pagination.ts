import { pageable } from "./pageable";
import { sort } from "./sort";

export interface pagination {
    content: any[],
    pageable: pageable,
    last: boolean,
    totalPages: number,
    totalElements: number,
    size: number,
    number: number,
    sort: sort,
    first: boolean,
    numberOfElements: number,
    empty: boolean,
}