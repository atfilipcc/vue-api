export enum Components {
    CAMPAIGN = "CAMPAIGN",
    CLIENT = "CLIENT",
    USER = "USER",
  }

  export enum CampaignType {
    SOCIAL_MEDIA,
    SEARCH_ENGINE,
  }
  
 export  interface Client {
    id: number;
    name: string;
  }
  
  export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    image: string;
  }
  
 export interface Campaign {
    id: number | null;
    name: string;
    type: CampaignType;
    client: Client;
    campaignManager: User;
    startDate: string;
    endDate: string;
    budget: number;
  }