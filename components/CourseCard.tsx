import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import { Progress } from "@/components/ui/progress"


export function CourseCard(data:any) {

  const course = data.data

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <Image 
            src={course.image_link} 
            width={500}
            height={500}
            alt="Picture of the author"
            className="rounded-md" 
        />
        <h2 className="text-xl text-white">{course.name}</h2>
        <CardDescription>{course.short}</CardDescription>
        <Progress className="mt-10 h-2" value={course.id * 10} />
      </CardHeader>
      <CardContent>
        
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button>View course</Button>
      </CardFooter>
    </Card>
  )
}
