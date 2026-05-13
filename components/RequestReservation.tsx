"use client";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Clock } from "lucide-react";
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
import { toast } from "sonner";

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
  date: z.date({
    message: "Please select a date.",
  }),
  time: z.string().min(1, { message: "Please select a time preference." }),
  timeSlot: z.string().min(1, { message: "Please select an exact time slot." }),
});

const RequestReservation = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      partySize: "",
      time: "",
      timeSlot: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitted(true);
    toast.success("Reservation request sent successfully" + JSON.stringify(values));

    setTimeout(() => {
      setIsSubmitted(false);
      form.reset();
    }, 3000);
  }

  return (
    <div id="reservation" className="w-full max-w-4xl mx-auto py-16 px-4 md:px-8 flex flex-col items-center">
      <div className="text-center mb-12 space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold text-[#ffac12] tracking-tight">
          Request a reservation
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Select your details and we&apos;ll try to get the best seats for you.
        </p>
      </div>

      <div className="w-full bg-card rounded-2xl shadow-xl border border-border/50 p-6 md:p-10">
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FieldGroup className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
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
    </div>
  );
};

export default RequestReservation;