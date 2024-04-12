"use client"

import { Slider } from "./ui/slider"
import { useState } from "react"

export default function RevenueSimulator() {

    const[followers,setFollowers] = useState<number>(0)
    const[revenue, setRevenue] = useState<number>(0)

    const updateRevenue = (value:number) => {
        setFollowers(value)
        let computedValue = (subCost * followers) / 100
        setRevenue(computedValue)
    }

    const returnOnFollowers = 1/100;
    const subCost = 20;

    return(
        <div>
            <h2 className="text-md md:text-xl mt-4">Simulate your revenue</h2>
            <p className="text-sm text-muted-foreground">Conversion rate: ~1%</p>
            <h3 className="text-5xl mt-2">{revenue}$</h3>
            <h4 className="text-md mt-2 text-muted-foreground">{followers} followers</h4>
            <Slider className="mt-4" defaultValue={[followers]}  onValueChange={(e)  =>  updateRevenue(e[0])} max={100000} step={10} />
        </div>
    )
}