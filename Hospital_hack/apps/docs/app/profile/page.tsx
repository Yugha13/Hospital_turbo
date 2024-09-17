"use client"
import { Input } from "@repo/ui/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@repo/ui/components/ui/select";
import { Button } from "@repo/ui/components/ui/button";
import { Mail, Phone, User } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useToast } from "@repo/ui/hooks/use-toast"
import { ToastAction } from "@repo/ui/components/ui/toast"




export default function Component() {
  const { toast } = useToast();
    const [info, setInfo] = useState({} as any);
    const [formData, setFormData] = useState({});

    useEffect(() => {
        (async() => {
            const user = await axios.get("/api/profile");
            // console.log(user.data.info);
            setInfo(user.data.info)
        })()
    }, [])
    
    const handleSubmit = async(e : any) => {
      e.preventDefault();
      // console.log(formData);
      const err = await axios.put("/api/doccheck", {...formData});
      // console.log(err);
      toast({
        title: "Profile Updated:",
        description: "Your profile has been updated",
        action: (
          <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
        ),
      })

    }

    const handleChange = (e:any)  => {
      // console.log(e);
      const name = e?.target?.id;
      const value = e.target?.value;    
      setFormData(cur => ({...cur, [name]: value}));
      
    }

    const imgs = (info?.gender=="female" ? 
      ("https://wallpapers.com/images/hd/pink-angel-cool-profile-picture-wcjxfrrq0kjq98yb.jpg"
    ):(
      "https://i.pinimg.com/736x/d3/7e/84/d37e843d31252c02e0b6119d126d6014.jpg"
    ));

    return (
      <div className="bg-background text-[#333] font-['Cinzel', 'serif'] min-h-screen flex flex-col items-center justify-center">
        <div className="max-w-4xl w-full px-6 py-12 bg-background/40 rounded-lg shadow-lg">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h1 className="text-4xl font-bold mb-6">Profile</h1>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    defaultValue={info.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-[#ccc] rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="xl:flex md:flex gap-9 ">
                <div>
                  <label htmlFor="gender" className="block text-sm font-medium mb-1">
                    Gender
                  </label>
                  <Select value={info?.gender} disabled>
                    <SelectTrigger className="min-w-[150px]">
                        <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Gender</SelectLabel>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="dob" className="block text-sm font-medium mb-1">
                    Date Of Birth
                  </label>
                  <Input
                    type="date"
                    id="date"
                    value={info.dob?.substr(0, 10)}
                    className="w-full px-3 py-2 border border-[#ccc] rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                    min="1"
                    max="20"
                    disabled
                  />
                </div>
                </div>
                <div>
                  <label htmlFor="dexterity" className="block text-sm font-medium mb-1">
                    Specialist
                  </label>
                  <Input
                    defaultValue={info.specialist}
                    onChange={handleChange}
                    type="string"
                    id="specialist"
                    className="w-full px-3 py-2 border border-[#ccc] rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                  />
                </div>
                <div>
                  <label htmlFor="dexterity" className="block text-sm font-medium mb-1">
                    Experience
                  </label>
                  <Input
                    defaultValue={info.experience}
                    onChange={handleChange}
                    type="number"
                    id="experience"
                    className="w-full px-3 py-2 border border-[#ccc] rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                  />
                </div>
                
                
                
                <Button
                  type="submit"
                  className="w-full  text-white py-2 px-4 rounded-md transition-colors"
                >
                  Edit Changes
                </Button>
              </form>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className={` rounded-full w-48 h-48 flex items-center justify-center mb-6 ${info.gender=="male"?"bg-blue-100 ":"bg-pink-100"}`}>
                <img src={imgs}
                    className="w-36 h-36 object-cover rounded-full" 
                />
              </div>
              <h2 className="text-2xl font-bold mb-2">{info.name}</h2>
              
              <div className="flex flex-col md:flex-row items-center mb-4">
                <span className="mr-2">
                    <Mail  size={20} className="text-pink-300 "  />
                </span>
                <span>{info.email}</span>
              </div>
              <div className="flex items-center mb-4 flex-col md:flex-row ">
                <span className="mr-2">
                  <Phone  size={20} className="text-pink-300 "   />
                </span>
                <span>{info.phone}</span>
              </div>
              <div className="flex items-center mb-4">
                <span className="text-[#d4af37] mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }