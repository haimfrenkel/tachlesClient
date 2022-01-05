import * as internal from 'stream';
import { LANGUAGES } from '../general/Languages'


export class User {
    userName: string;
    men: PersonalInformation;
    women: PersonalInformation;
    address: Address;
    bankAccount: BankAccount;
    childern: Child[]
    shtibel: string;
}

export interface PersonalInformation {
    name: Name;
    fatherName: string;
    grandfatherName: string;
    greatGrandfatherName: string;
    DOB: Date;
    email: string;
    maritalStatus: MaritalStatus;
    phones: Phone[];
    jobs: Job[];
}

export interface Name {
    startName: string;
    firstName: string;
    lastName: string;
    endName: string
}

export interface Child {
    name: Name;
    DOB: Date;
    sex: Sex;
    maritalStatus: MaritalStatus;
    placeOfStudy: string;
}

export interface BankAccount {
    bankNo: number;
    bankName: string;
    branchNo: number;
    accountNo: number;
}

export interface Address {
    state: string;
    city: string;
    street: string;
    buildingNumber: number;
    apartment: number;
    zipCode: number;
}

export interface Phone {
    number: number;
    whatsapp: boolean;
}

export interface Job {
    address: Address;
    companyName: string;
    job: string
}

export interface MaritalStatus {

}

export interface Sex {

}