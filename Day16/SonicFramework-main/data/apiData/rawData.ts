import dotenv from 'dotenv';
import { FakerData } from '../../utils/fakerUtils';
dotenv.config({ path: '../../data/apiData/oauthData.env' });

export const oauthData = {
    grant_type: 'password',
    client_id: process.env.CLIENT_ID!,
    client_secret: process.env.CLIENT_SECRET!,
    username: process.env.SFUSERNAME!,
    password: process.env.SFPASSWORD!,
}
export const createLeaddata = {
    "FirstName": FakerData.getFirstName(),
    "LastName": FakerData.getLastName(),
    "Company": "Qeagle"
};