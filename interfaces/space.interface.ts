import {ILinks} from "./links.interface";
import {IRocket} from "./rocket.interface";



export interface ISpaceX {
    "mission_name": string
    "launch_date_local": string

    "launch_site": {
        "site_name_long": string
    },
    "links": ILinks
    "rocket": IRocket
}