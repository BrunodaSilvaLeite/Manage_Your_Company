export interface ICompany {
    _id: string;
    name: string;
    image: string;
    color: string;
}

export interface IUnit {
    _id: string;
    name: string;
    asset: [IAsset];
}

export interface IAsset {
    _id: string;
    name: string;
    description: string,
    model: string,
    owner: string,
    status: string,
    healthLevel: number,
}

export interface IUser {
    _id: string;
    name: string;
    email: string;
}