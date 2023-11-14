export type UserType = {
    email: string;
    password: string;
    name?: string;
    desc?: string;
}

export type TemporaryNumberCheckType = {
    email: string;
    temporaryNumber: string;
}

export type CategoryType = {
    title: string;
    id: number;
    works: WorkType[];
}

export type WorkType = {
    id: number;
    text: string;
}


