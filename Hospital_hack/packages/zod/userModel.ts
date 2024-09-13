import { z } from 'zod';

const userInfoSchema = z.object({
  name: z.string(),
  dob: z.string().refine((val:any) => !isNaN(Date.parse(val)), {
    message: "Invalid date format",
  }), 
  gender          : z.enum(["male", "female", "other"]),
  phone           : z.string().min(10).max(15),
  healthIssues    : z.string().optional(),
  medicalHistory  : z.string().optional(),
  emergencyNumber : z.string().optional(), 
  userId          : z.number().int().optional(), 
  user            : z.object({ 
                      email: z.string().email()
                    }).optional()
});

const docInfoSchema = z.object({
  name    : z.string(),
  dob     : z.string().refine((val:any) => !isNaN(Date.parse(val)), {
              message: "Invalid date format",
            }), 
  gender  : z.enum(["male", "female", "other"]),
  phone   : z.string().min(10).max(15),
})


const userAppointment = z.object({
  name: z.string(), 
  phone           : z.string().min(10).max(15),
  email           : z.string(),
  date            : z.string(),
  time            : z.string(),
  reason          : z.string(),
  doctorEmail     : z.string().email(),
  userId          : z.number().int().optional(), 
  user            : z.object({ 
                      email: z.string().email()
                    }).optional()
});




export { userInfoSchema, docInfoSchema, userAppointment };