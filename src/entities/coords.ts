export default class Coords {
    lat: number;
    lng: number;
    
    /**
     * @param lat The latitude coordinate
     * @param lng The longitude coordinate
     */
    constructor(lat: number, lng: number) {
        this.lat = lat;
        this.lng = lng;
    }
}