import {IPayloads} from "./payloads.interface";

export interface IRocket {
    rocket_name: string
    first_stage: {
        "cores": [
            {
                flight: number
                core: {
                    reuse_count: number
                    status: string | boolean
                }
            }
        ]
    }
    second_stage: {
        payloads: IPayloads[]
    }
}