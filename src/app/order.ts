

export class Order {
    "id" : number;
    "Suser"  : string;
    "Semail" : string;
    "Smobile": number;
     "Ruser"  : string;
    "Remail" : string;
    "Rmobile": number;
    "shipment":{
        "equipment" : string;
        "size": string;
        "commodity": string;
        "wgh": number;
        "unit" : string;
        "decvalue": number;
        "currency":string;
        "hazmat":  string;
        "temp": string;
    }
    "lane":{
        "Oaddress": string;
        "Ozip" : string;
        "pickup" : Date;
        "window" : boolean;
        "daddress" : string; 
        "stop" : [ ''] ;
    }
}
