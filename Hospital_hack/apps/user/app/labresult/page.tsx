"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@repo/ui/components/ui/card"
import { Label } from "@repo/ui/components/ui/label"
import { Input } from "@repo/ui/components/ui/input"
import { Textarea } from "@repo/ui/components/ui/textarea"
import { useEffect, useState } from "react"
import axios from "axios"


const LabResult = ({info}:any) => {
  return (
    <Card className="w-full max-w-xl">
      <CardHeader>
       Result Details:
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="test">Test</Label>
            <Input id="test" value={info.test} readOnly />
          </div>
          <div>
            <Label htmlFor="result">Result</Label>
            <Input id="result" value={info.result }readOnly />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="date">Date</Label>
            <Input id="date" value={info.date} readOnly />
          </div>
          
        </div>
      </CardContent>
    </Card>
  )
}


export default function Component() {
  const [info, setInfo] = useState([] as any);
  console.log(info);
  
  useEffect(() => {
    (async() => {
        const result = await axios.get("/api/labresult");
        // console.log(result);
        // console.log(datas.data.info);
        setInfo(result.data.info);
    })()
  },[])

  return (
    <div>
      <CardHeader className="font-bold text-center text-2xl">Lab Results</CardHeader>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-9 m-5 mt-8">
        {info?.map((i:any) => <LabResult info = {i} />)}
      </div>
    </div>
  )
}