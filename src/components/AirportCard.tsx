import { IAirport } from "../models/models"

interface AirportCardProps {
    airport: IAirport
}

//ayu dark
export function AirportCard({airport} : AirportCardProps) {
    return(
        <div className="border rounded-md py-4 px-6 mb-2 hover:shadow-md hover:transition-all cursor-pointer">
            <p className="text-lg font-extrabold">{airport.name}</p>
        </div>
    )
}