import axios, {AxiosResponse} from "axios";
import { Platform } from "react-native";

const HOST = Platform.OS === "ios" ? "localhost" : "10.0.2.2";
const API = axios.create({ baseURL: `http://${HOST}:3000`}); //http://${HOST}:3000/api/spells? 

export interface Spell {
    slug: string,
    name: string,
    desc: string,
    higher_level: string,
    page: string,
    range: string,
    components: string,
    material: string,
    ritual: string,
    duration: string,
    concentration: string,
    casting_time: string,
    level: string,
    level_int: number,
    school: string,
    dnd_class: string,
    archetype: string,
    circles: string,
    document__slug: string,
    document__title: string,
    document__license_url: URL //string or URL type?
}

export const getSpellsByClassAndLevel = async (dnd_class: string, level:number, token: string) => { //skicka ned class, level och token från userContext. 
    const response = await API.get(`/spells/${dnd_class}/${level}`, {headers: {authorization: `Bearer ${token}`} })
    console.log(response.data);
}

export const getAllSpells = async () => {
    const response = await API.get("/spells")
    console.log(response);
    if(response.data){
        return response.data as Spell[];
    }
}

//Testing fetch from frontend
export const getAllSpells2 = async () => {
    let result: AxiosResponse = await axios.get(`https://api.open5e.com/spells/`)
    // console.log("HÄR KOMMER SPELLS");
    let spells: Spell[] = result.data;    
    console.log(spells);
    return spells
}

export const getBardSpells = async () => {
    let result: AxiosResponse = await axios.get(`https://api.open5e.com//spells/?slug__in=&slug__iexact=&slug=&name__iexact=&name=&level__iexact=&level=&level__in=&level_int__iexact=&level_int=&level_int__range=&school__iexact=&school=&school__in=&duration__iexact=&duration=&duration__in=&components__iexact=&components=&components__in=&concentration__iexact=&concentration=&concentration__in=&casting_time__iexact=&casting_time=&casting_time__in=&dnd_class__iexact=&dnd_class=&dnd_class__in=&dnd_class__icontains=bard&document__slug__iexact=&document__slug=&document__slug__in=`)
    // let result: AxiosResponse = await axios.get(`https://api.open5e.com/spells/?dnd_class__contains=warlock`)
    let spells: Spell[] = result.data
    console.log(spells);
    return spells
}

export const getSpellByClass = async () => {

}