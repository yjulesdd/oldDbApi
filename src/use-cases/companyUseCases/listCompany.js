import makeListCompanies from "./listCompanies";
import { request } from "express";

export default function makeListCompany({findOne}){
    return async function listCompany({fields = {}, filters = {} }={}){
    
        
        const request = { fields, filters }
        const res = await findOne(request);
        
        return res;

    }
}