"use client";

import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Clock, LogIn, Mail, Lock, User, UserPlus } from "lucide-react";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Field,
  FieldLabel,
  FieldError,
  FieldGroup,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

// Import Auth Client
import { useSession, signIn, signUp, signOut } from "@/lib/auth-client";
// Import Server Action
import { createReservation } from "@/app/actions/reservation";

const timeSlots = [
  { time: "8:00 AM", available: true },
  { time: "8:15 AM", available: false },
  { time: "8:30 AM", available: false },
  { time: "8:45 AM", available: true },
  { time: "9:00 AM", available: true },
  { time: "9:15 AM", available: true },
  { time: "9:30 AM", available: true },
  { time: "9:45 AM", available: true },
];

const formSchema = z.object({
  partySize: z.string().min(1, { message: "Please select a party size." }),
  date: z.date({ message: "Please select a date." }),
  time: z.string().min(1, { message: "Please select a time preference." }),
  timeSlot: z.string().min(1, { message: "Please select an exact time slot." }),
  nameReservation: z.string().min(2, { message: "Name must be at least 2 characters." }),
});

const RequestReservation = () => {
  const { data: session, isPending: sessionLoading } = useSession();
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");
  const [authLoading, setAuthLoading] = useState(false);

  // Auth Forms States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      partySize: "",
      time: "",
      timeSlot: "",
      nameReservation: "",
    },
  });

  // Pre-fill nameReservation if session is available
  useEffect(() => {
    if (session?.user?.name) {
      form.setValue("nameReservation", session.user.name);
    }
  }, [session, form]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!session?.user?.id) {
      toast.error("You must be logged in to make a reservation");
      return;
    }
    
    setIsSubmitted(true);
    
    const res = await createReservation({
      partySize: parseInt(values.partySize),
      date: values.date,
      time: values.time,
      timeSlot: values.timeSlot,
      nameReservation: values.nameReservation,
      userId: session.user.id
    });

    if (res.success) {
      toast.success("Reservation request sent successfully!");
      form.reset();
      if (session?.user?.name) {
        form.setValue("nameReservation", session.user.name);
      }
    } else {
      toast.error(res.error || "Failed to make reservation.");
    }
    
    setIsSubmitted(false);
  }

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);
    
    if (authMode === "signup") {
      const { data, error } = await signUp.email({
        email,
        password,
        name,
      });
      if (error) {
        toast.error(error.message || "Failed to sign up");
      } else {
        toast.success("Account created! You are now logged in.");
      }
    } else {
      const { data, error } = await signIn.email({
        email,
        password,
      });
      if (error) {
        toast.error(error.message || "Failed to sign in");
      } else {
        toast.success("Welcome back!");
      }
    }
    setAuthLoading(false);
  };

  return (
    <div id="reservation" className="w-full max-w-4xl mx-auto py-16 px-4 md:px-8 flex flex-col items-center">
      <div className="text-center mb-12 space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold text-[#ffac12] tracking-tight">
          Request a reservation
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          {session ? "Fill in the details to book your perfect dining experience." : "Please log in to your account to book a table."}
        </p>
      </div>

      <div className="w-full bg-card rounded-2xl shadow-xl border border-border/50 p-6 md:p-10 relative overflow-hidden">
        {sessionLoading ? (
          <div className="flex flex-col items-center justify-center py-20 space-y-4">
             <div className="h-10 w-10 border-4 border-[#ffac12] border-t-transparent rounded-full animate-spin"></div>
             <p className="text-muted-foreground animate-pulse">Loading reservation system...</p>
          </div>
        ) : !session ? (
          <div className="max-w-md mx-auto w-full py-8">
            <div className="text-center mb-8">
              <div className="bg-[#ffac12]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                {authMode === "login" ? <LogIn className="w-8 h-8 text-[#ffac12]" /> : <UserPlus className="w-8 h-8 text-[#ffac12]" />}
              </div>
              <h3 className="text-2xl font-semibold text-foreground">
                {authMode === "login" ? "Welcome Back" : "Create an Account"}
              </h3>
            </div>
            
            <form onSubmit={handleAuth} className="space-y-4">
              {authMode === "signup" && (
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input 
                      required 
                      className="pl-9 h-10" 
                      placeholder="John Doe" 
                      value={name} 
                      onChange={e => setName(e.target.value)} 
                    />
                  </div>
                </div>
              )}
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input 
                    required 
                    type="email" 
                    className="pl-9 h-10" 
                    placeholder="hello@example.com" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input 
                    required 
                    type="password" 
                    className="pl-9 h-10" 
                    placeholder="••••••••" 
                    value={password} 
                    onChange={e => setPassword(e.target.value)} 
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full h-11 mt-6 bg-[#ffac12] text-black hover:bg-[#e0960d] font-semibold"
                disabled={authLoading}
              >
                {authLoading ? "Please wait..." : (authMode === "login" ? "Sign In" : "Sign Up")}
              </Button>
            </form>
            
            <div className="mt-6 text-center text-sm text-muted-foreground">
              {authMode === "login" ? "Don't have an account? " : "Already have an account? "}
              <button 
                type="button" 
                onClick={() => setAuthMode(authMode === "login" ? "signup" : "login")}
                className="text-[#ffac12] font-semibold hover:underline"
              >
                {authMode === "login" ? "Create one" : "Sign in here"}
              </button>
            </div>
          </div>
        ) : (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex justify-between items-center bg-muted/50 p-4 rounded-xl border border-border/50 mb-8">
               <div className="flex items-center gap-3">
                 <div className="bg-[#ffac12] text-black w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-sm text-lg">
                   {session.user.name?.charAt(0).toUpperCase() || 'U'}
                 </div>
                 <div>
                   <p className="text-sm font-semibold text-foreground">Logged in as {session.user.name}</p>
                   <p className="text-xs text-muted-foreground">{session.user.email}</p>
                 </div>
               </div>
               <Button variant="ghost" size="sm" onClick={() => signOut()} className="text-muted-foreground hover:text-destructive">
                 Log Out
               </Button>
            </div>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FieldGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Name Reservation */}
                <Field orientation="vertical">
                  <FieldLabel>Reservation Name</FieldLabel>
                  <Controller
                    name="nameReservation"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <div className="flex flex-col gap-2">
                        <Input 
                          placeholder="Name for the table" 
                          {...field} 
                          className={cn(
                            "w-full bg-background border-input",
                            fieldState.invalid && "border-destructive ring-1 ring-destructive"
                          )}
                        />
                        <FieldError errors={[{ message: fieldState.error?.message }]} />
                      </div>
                    )}
                  />
                </Field>

                {/* Party Size */}
                <Field orientation="vertical">
                  <FieldLabel>Party size</FieldLabel>
                  <Controller
                    name="partySize"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <div className="flex flex-col gap-2">
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <SelectTrigger
                            className={cn(
                              "w-full bg-background border-input",
                              fieldState.invalid && "border-destructive ring-1 ring-destructive"
                            )}
                          >
                            <SelectValue placeholder="Select guests" />
                          </SelectTrigger>
                          <SelectContent>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                              <SelectItem key={num} value={num.toString()}>
                                {num} {num === 1 ? "guest" : "guests"}
                              </SelectItem>
                            ))}
                            <SelectItem value="10+">10+ guests</SelectItem>
                          </SelectContent>
                        </Select>
                        <FieldError errors={[{ message: fieldState.error?.message }]} />
                      </div>
                    )}
                  />
                </Field>

                {/* Date */}
                <Field orientation="vertical">
                  <FieldLabel>Date</FieldLabel>
                  <Controller
                    name="date"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <div className="flex flex-col gap-2">
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full justify-start text-left font-normal bg-background border-input",
                                !field.value && "text-muted-foreground",
                                fieldState.invalid && "border-destructive ring-1 ring-destructive"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {field.value ? format(field.value, "MM/dd/yyyy") : <span>Pick a date</span>}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) =>
                                date < new Date(new Date().setHours(0, 0, 0, 0))
                              }
                            />
                          </PopoverContent>
                        </Popover>
                        <FieldError errors={[{ message: fieldState.error?.message }]} />
                      </div>
                    )}
                  />
                </Field>

                {/* Time */}
                <Field orientation="vertical">
                  <FieldLabel>Time</FieldLabel>
                  <Controller
                    name="time"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <div className="flex flex-col gap-2">
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <SelectTrigger
                            className={cn(
                              "w-full bg-background border-input",
                              fieldState.invalid && "border-destructive ring-1 ring-destructive"
                            )}
                          >
                            <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="morning">Morning (8AM - 11AM)</SelectItem>
                            <SelectItem value="afternoon">Afternoon (12PM - 4PM)</SelectItem>
                            <SelectItem value="evening">Evening (5PM - 10PM)</SelectItem>
                          </SelectContent>
                        </Select>
                        <FieldError errors={[{ message: fieldState.error?.message }]} />
                      </div>
                    )}
                  />
                </Field>
              </FieldGroup>

              <hr className="border-t border-border/60" />

              {/* Time Slots */}
              <div className="space-y-4">
                <h3 className="text-sm font-medium text-foreground">
                  Choose an available time slot:
                </h3>
                
                <Controller
                  name="timeSlot"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <div className="flex flex-col gap-2">
                      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-3">
                        {timeSlots.map((slot) => {
                          const isSelected = field.value === slot.time;
                          return (
                            <button
                              key={slot.time}
                              type="button"
                              disabled={!slot.available}
                              onClick={() => field.onChange(slot.time)}
                              className={cn(
                                "py-3 px-4 rounded-md text-sm font-medium transition-all duration-200 border",
                                !slot.available
                                  ? "bg-muted text-muted-foreground border-transparent opacity-50 cursor-not-allowed"
                                  : isSelected
                                  ? "bg-[#ffac12] text-black border-[#ffac12] shadow-md scale-[1.02]"
                                  : "bg-background text-foreground border-border hover:border-[#ffac12] hover:text-[#ffac12]"
                              )}
                            >
                              {slot.time}
                            </button>
                          );
                        })}
                      </div>
                      <FieldError errors={[{ message: fieldState.error?.message }]} />
                    </div>
                  )}
                />
              </div>

              <div className="pt-6 flex justify-center">
                <Button
                  type="submit"
                  className={cn(
                    "px-10 py-6 text-lg font-semibold bg-[#ffac12] text-black hover:bg-[#e0960d] transition-colors rounded-xl shadow-lg",
                    isSubmitted && "opacity-80 cursor-wait"
                  )}
                  disabled={isSubmitted}
                >
                  {isSubmitted ? "Processing..." : "Request Now"}
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default RequestReservation;