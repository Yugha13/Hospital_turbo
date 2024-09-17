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
  name        : z.string(),
  // dob         : z.string().refine((val:any) => !isNaN(Date.parse(val)), {
  //                 message: "Invalid date format",
  //               }), 
  // gender      : z.enum(["male", "female", "other"]),
  // phone       : z.string().min(10).max(15),
  specialist  : z.string().optional(),
  experience  : z.string().optional()
})


const userAppointment = z.object({
  name            : z.string(), 
  phone           : z.string().min(10).max(15),
  date            : z.string(),
  time            : z.string(),
  reason          : z.string(),
  doctorEmail     : z.string().email(),
  userId          : z.number().int().optional(), 
  user            : z.object({ 
                      email: z.string().email()
                    }).optional()
});


const docPrescrip = z.object({
  patientEmail        : z.string().email(),
  medication          : z.string(),
  dosage              : z.string(),
  quantity            : z.string(),
  takein              : z.string(),
  name                : z.string()
})



const pillsReq = z.object({
  PatientName: z.string(),
  contactNumber: z.string(),
  prescriptionNumber: z.string(),
  medicationName: z.string(),
  prescribingDoctor: z.string(),
  additionalNotes: z.string().optional(),
})


export { userInfoSchema, docInfoSchema, userAppointment, docPrescrip, pillsReq };