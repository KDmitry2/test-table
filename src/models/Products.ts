export interface IOptionsProduct {
    size: string,
    amount: number
}

export interface IProduct {
    id: number,
    name: string,
    options: IOptionsProduct,
    active: boolean,
    createdAt:string

}