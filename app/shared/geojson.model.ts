export interface IGeometry {
    type: string;
    lat: number;
    lng: number;
}

export interface IGeoJson {
    type: string;
    geometry: IGeometry;
    properties: any;
    id: string;
    title: string;
    subtitle: string;
}

export class GeoJson implements IGeoJson {
    type = "GeoJson";
    geometry: IGeometry;
    properties: any;
    id: string;
    title: string;
    subtitle: string;

    constructor(lat, lng, public ctitle?, public csubtitle?, public cproperties?, public cid?) {
        this.geometry = {
            type: "Coordinates",
            lat: lat,
            lng: lng
        };

        this.title = ctitle;
        this.properties = csubtitle;
        this.subtitle = cproperties;
        if (cid) {
            this.id = cid;
        }
        else {
            this.id = String(new Date().getTime());
        }
    }
}

export class GeoJsonCollection {
    type = "GeoJsonCollection";

    constructor(public features: Array<GeoJson>) {
    }
}