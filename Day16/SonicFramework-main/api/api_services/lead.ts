import url from "../../data/apiData/url.json";
import { createLeaddata, oauthData } from '../../data/apiData/rawData';
import { httpRequest } from "../../utils/requestUtils";

const baseURL = url.leadEndPoint;



export async function createLead(instanceUrl: string, accessToken: string) {

    const response = await httpRequest('post', `${instanceUrl}${baseURL}`, createLeaddata, {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
    });
    return response;

}
