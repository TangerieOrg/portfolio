export interface TrackingInstance {
    id : string;
    visits : TrackingVisit[];
}

export interface TrackingVisit {
    ts : number;    
    route : string;
    data : any;
    origin : string;
    tags: string[];
    ip : string;
    userAgent : string;
}