"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import { cn } from "@/lib/utils"

const formSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters.")
    .max(32, "Name must be at most 32 characters."),
  email: z.string().email("Email must be valid"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters.")
    .max(500, "Message must be at most 500 characters."),
})

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    toast("You submitted the following values:", {
      description: (
        <pre className='mt-2 w-[320px] overflow-x-auto rounded-md bg-code p-4 text-code-foreground'>
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
      position: "bottom-right",
      classNames: {
        content: "flex flex-col gap-2",
      },
      style: {
        "--border-radius": "calc(var(--radius)  + 4px)",
      } as React.CSSProperties,
    })
  }

  return (
    <Card className='w-full h-full bg-primary border-none '>
      <CardHeader>
        <CardTitle>
          <h2 className='w-full text-2xl text-left md:text-4xl font-playfair font-bold text-background '>
            Contact Us
          </h2>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form id='form-rhf-demo' onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name='name'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel
                    htmlFor='form-rhf-demo-title'
                    className='text-background'
                  >
                   Full Name*
                  </FieldLabel>
                  <Input
                    {...field}
                    id='form-rhf-demo-title'
                    aria-invalid={fieldState.invalid}
                    placeholder='Login button not working on mobile'
                    autoComplete='off'
                  />
                  {fieldState.invalid && (
                    <FieldError
                      errors={[fieldState.error]}
                      className='text-red-800'
                    />
                  )}
                </Field>
              )}
            />
            <Controller
              name='email'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel
                    htmlFor='form-rhf-demo-email'
                    className='text-background'
                  >
                   Email*
                  </FieldLabel>
                  <Input
                    {...field}
                    id='form-rhf-demo-email'
                    aria-invalid={fieldState.invalid}
                    placeholder='example@gmail.com'
                    autoComplete='off'
                  />
                  {fieldState.invalid && (
                    <FieldError
                      errors={[fieldState.error]}
                      className='text-red-800'
                    />
                  )}
                </Field>
              )}
            />
            <Controller
              name='message'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel
                    htmlFor='form-rhf-demo-message'
                    className='text-background'
                  >
                    Message*
                  </FieldLabel>
                  <InputGroup>
                    <InputGroupTextarea
                      {...field}
                      id='form-rhf-demo-message'
                      placeholder="Write your message here..."
                      rows={6}
                      className='min-h-24 resize-none'
                      aria-invalid={fieldState.invalid}
                    />
                    <InputGroupAddon align='block-end'>
                      <InputGroupText className='tabular-nums'>
                        {field.value.length}/100 characters
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                  <FieldDescription>
                    Include steps to reproduce, expected behavior, and what
                    actually happened.
                  </FieldDescription>
                  {fieldState.invalid && (
                    <FieldError
                      errors={[fieldState.error]}
                      className='text-red-800'
                    />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter className='bg-transparent border-none'>
        <Field
          orientation='horizontal'
          className='flex flex-row items-center justify-start w-full px-4 '
        >
          <Button type='button'  onClick={() => form.reset()} className={cn("h-12 w-fit px-8 text-xl bg-background/60 text-background-foreground hover:bg-secondary transition-all duration-600 border-2 border-primary rounded-bl-none rounded-tr-none rounded-br-3xl rounded-tl-3xl focus:bg-primary cursor-pointer")}>
            Reset
          </Button>
          <Button type='submit' form='form-rhf-demo' className={cn("h-12 w-fit px-8 text-xl bg-background text-background-foreground hover:bg-secondary transition-all duration-600 border-2 border-primary rounded-bl-none rounded-tr-none rounded-br-3xl rounded-tl-3xl focus:bg-primary cursor-pointer")}>
            Submit
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
