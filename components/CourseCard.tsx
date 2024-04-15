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
import { Eye } from "lucide-react"


export function CourseCard(data:any) {

  const course = data.data

  return (
    <Card className="w-[350px] hover:border-slate-500 animte-in transition-all">
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
        <Progress className="mt-20 h-3 bg-slate-700" value={course.id * 10} />
      </CardHeader>
      <CardContent>
        
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button className="flex gap-1 text-xs">
            <Eye></Eye>
            View course
        </Button>
      </CardFooter>
    </Card>
  )
}
