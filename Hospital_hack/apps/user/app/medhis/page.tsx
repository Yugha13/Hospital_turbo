"use client"
import axios from "axios";
import { useEffect, useState } from "react";


const LabResult = ({result}:any) => {
  return (
    <tr className="border-b">
      <td className="px-4 py-2">{result.test}</td>
      <td className="px-4 py-2">{result.date}</td>
      <td className="px-4 py-2">{result.result}</td>
    </tr>
  )
}

const Prescription = ({info}:any) => {
  return (
    <tr className="border-b">
      <td className="px-4 py-2">{info.prescriptionNumber}</td>
      <td className="px-4 py-2">{info.medication}</td>
      <td className="px-4 py-2">{info.dosage}</td>
    </tr>
  )
}

export default function Component() {
  const [info, setInfo] = useState([] as any);
  const [result, setresult] = useState([] as any);
  // console.log(info);
  
  useEffect(() => {
    (async() => {
      const datas = await axios.get("/api/viewprescrip");
      const result = await axios.get("/api/labresult");
      // console.log(result);
      // console.log(datas.data.info);
      setresult(result.data.info);
      setInfo(datas.data.info);
    })()
  },[])
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-6">Patient Health Record</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Lab Results</h2>
            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="overflow-x-auto">
                <table className="w-full table-auto">
                  <thead>
                    <tr className="bg-gray-200 text-gray-700">
                      <th className="px-4 py-2 text-left">Test</th>
                      <th className="px-4 py-2 text-left">Date</th>
                      <th className="px-4 py-2 text-left">Result</th>
                    </tr>
                  </thead>
                  <tbody>
                  {result?.map((i:any) => <LabResult result = {i} />)}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Prescriptions</h2>
            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="overflow-x-auto">
                <table className="w-full table-auto">
                  <thead>
                    <tr className="bg-gray-200 text-gray-700">
                      <th className="px-4 py-2 text-left">Prescription<br/> Number</th>
                      <th className="px-4 py-2 text-left">Medication</th>
                      <th className="px-4 py-2 text-left">Dosage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {info?.map((i:any) => <Prescription info = {i} />)}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Past Treatments</h2>
            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold">Physical Therapy</h3>
                  <p className="text-gray-600">2023-01-15 to 2023-03-15</p>
                  <p>Completed 12 sessions for lower back pain.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Flu Shot</h3>
                  <p className="text-gray-600">2022-10-20</p>
                  <p>Routine annual flu vaccination.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Colonoscopy</h3>
                  <p className="text-gray-600">2022-06-01</p>
                  <p>Routine screening, no abnormalities found.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }