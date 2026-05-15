"use client"
import { menuDinner } from "@/data/menu-dinner"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const DinnerMenu = () => {
  return (
    <div className=' w-full flex flex-col items-center justify-center gap-8 '>
      <h2 className='w-full uppercase text-2xl text-left md:text-4xl font-bold text-primary'>
        Dinner Menu
      </h2>
      <span className='block w-full h-0.25 bg-primary  '></span>
      <div className='w-full'>
        <h3 className='w-full  text-2xl text-left md:text-4xl '>Appetizers</h3>
        <p>These dishes are great for sharing.</p>
      </div>
      <span className='block w-full h-0.25 bg-primary  '></span>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 '>
        {menuDinner
          .filter((item) => item.category === "Appetizer")
          .map((item) => (
            <Card key={item.id} className='w-full'>
              <CardHeader>
                <Dialog>
                  <DialogTrigger asChild>
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={300}
                      height={300}
                      className='w-full cursor-pointer'
                      loading='lazy'
                    />
                  </DialogTrigger>
                  <DialogContent className='max-w-full md:max-w-lg'>
                    <DialogHeader>
                      <DialogTitle className='text-xl'>
                        {item.title}
                      </DialogTitle>
                      <DialogDescription className='text-foreground'>
                        {item.description}
                      </DialogDescription>
                      <p className='w-fit text-sm  p-2 border border-primary my-4 rounded-md'>
                        {item.info}
                      </p>
                      <p className='w-fit text-lg   my-4 rounded-md'>
                        Price: ${item.price.toFixed(2)}
                      </p>
                    </DialogHeader>
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={300}
                      height={300}
                      className='w-full'
                      loading='lazy'
                    />
                  </DialogContent>
                </Dialog>
              </CardHeader>
              <CardContent>
                <CardTitle className='text-xl'>{item.title}</CardTitle>
                <CardDescription className='text-foreground'>
                  {item.description}
                </CardDescription>
                <p className='w-fit text-sm  p-2 border border-primary my-4 rounded-md'>
                  {item.info}
                </p>
              </CardContent>
              <CardFooter>
                <CardAction className='w-full flex items-center justify-between text-primary '>
                  <p>Price</p>
                  <p className='text-lg'>${item.price.toFixed(2)}</p>
                </CardAction>
              </CardFooter>
            </Card>
          ))}
      </div>
      <div className='w-full'>
        <h3 className='w-full  text-2xl text-left md:text-4xl '>
          Main Courses
        </h3>
        <p>
          A diverse range of flavorful dishes which are all sourced daily and
          locally.
        </p>
      </div>
      <span className='block w-full h-0.25 bg-primary  '></span>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 '>
        {menuDinner
          .filter((item) => item.category === "Main Course")
          .map((item) => (
            <Card key={item.id} className='w-full'>
              <CardHeader>
                <Dialog>
                  <DialogTrigger asChild>
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={300}
                      height={300}
                      className='w-full cursor-pointer'
                      loading='lazy'
                    />
                  </DialogTrigger>
                  <DialogContent className='max-w-full md:max-w-lg'>
                    <DialogHeader>
                      <DialogTitle className='text-xl'>
                        {item.title}
                      </DialogTitle>
                      <DialogDescription className='text-foreground'>
                        {item.description}
                      </DialogDescription>
                      <p className='w-fit text-sm  p-2 border border-primary my-4 rounded-md'>
                        {item.info}
                      </p>
                      <p className='w-fit text-lg   my-4 rounded-md'>
                        Price: ${item.price.toFixed(2)}
                      </p>
                    </DialogHeader>
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={300}
                      height={300}
                      className='w-full'
                      loading='lazy'
                    />
                  </DialogContent>
                </Dialog>
              </CardHeader>
              <CardContent>
                <CardTitle className='text-xl'>{item.title}</CardTitle>
                <CardDescription className='text-foreground'>
                  {item.description}
                </CardDescription>
                <p className='w-fit text-sm  p-2 border border-primary my-4 rounded-md'>
                  {item.info}
                </p>
              </CardContent>
              <CardFooter>
                <CardAction className='w-full flex items-center justify-between text-primary '>
                  <p>Price</p>
                  <p className='text-lg'>${item.price.toFixed(2)}</p>
                </CardAction>
              </CardFooter>
            </Card>
          ))}
      </div>
      <div className='w-full'>
        <h3 className='w-full  text-2xl text-left md:text-4xl '>Desserts</h3>
        <p>Our desserts are made in house by our pastry chef.</p>
      </div>
      <span className='block w-full h-0.25 bg-primary  '></span>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 '>
        {menuDinner
          .filter((item) => item.category === "Dessert")
          .map((item) => (
            <Card key={item.id} className='w-full'>
              <CardHeader>
                <Dialog>
                  <DialogTrigger asChild>
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={300}
                      height={300}
                      className='w-full cursor-pointer'
                      loading='lazy'
                    />
                  </DialogTrigger>
                  <DialogContent className='max-w-full md:max-w-lg'>
                    <DialogHeader>
                      <DialogTitle className='text-xl'>
                        {item.title}
                      </DialogTitle>
                      <DialogDescription className='text-foreground'>
                        {item.description}
                      </DialogDescription>
                      <p className='w-fit text-sm  p-2 border border-primary my-4 rounded-md'>
                        {item.info}
                      </p>
                      <p className='w-fit text-lg   my-4 rounded-md'>
                        Price: ${item.price.toFixed(2)}
                      </p>
                    </DialogHeader>
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={300}
                      height={300}
                      className='w-full'
                      loading='lazy'
                    />
                  </DialogContent>
                </Dialog>
              </CardHeader>
              <CardContent>
                <CardTitle className='text-xl'>{item.title}</CardTitle>
                <CardDescription className='text-foreground'>
                  {item.description}
                </CardDescription>
                <p className='w-fit text-sm  p-2 border border-primary my-4 rounded-md'>
                  {item.info}
                </p>
              </CardContent>
              <CardFooter>
                <CardAction className='w-full flex items-center justify-between text-primary '>
                  <p>Price</p>
                  <p className='text-lg'>${item.price.toFixed(2)}</p>
                </CardAction>
              </CardFooter>
            </Card>
          ))}
      </div>
      <div className='w-full'>
        <h3 className='w-full  text-2xl text-left md:text-4xl '>Drinks</h3>
        <p>Thirst-quenching drinks to complement your meal.</p>
      </div>
      <span className='block w-full h-0.25 bg-primary  '></span>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 '>
        {menuDinner
          .filter((item) => item.category === "Drinks")
          .map((item) => (
            <Card key={item.id} className='w-full'>
              <CardHeader>
                <Dialog>
                  <DialogTrigger asChild>
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={300}
                      height={300}
                      className='w-full cursor-pointer'
                      loading='lazy'
                    />
                  </DialogTrigger>
                  <DialogContent className='max-w-full md:max-w-lg'>
                    <DialogHeader>
                      <DialogTitle className='text-xl'>
                        {item.title}
                      </DialogTitle>
                      <DialogDescription className='text-foreground'>
                        {item.description}
                      </DialogDescription>
                      <p className='w-fit text-sm  p-2 border border-primary my-4 rounded-md'>
                        {item.info}
                      </p>
                      <p className='w-fit text-lg   my-4 rounded-md'>
                        Price: ${item.price.toFixed(2)}
                      </p>
                    </DialogHeader>
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={300}
                      height={300}
                      className='w-full'
                      loading='lazy'
                    />
                  </DialogContent>
                </Dialog>
              </CardHeader>
              <CardContent>
                <CardTitle className='text-xl'>{item.title}</CardTitle>
                <CardDescription className='text-foreground'>
                  {item.description}
                </CardDescription>
                <p className='w-fit text-sm  p-2 border border-primary my-4 rounded-md'>
                  {item.info}
                </p>
              </CardContent>
              <CardFooter>
                <CardAction className='w-full flex items-center justify-between text-primary '>
                  <p>Price</p>
                  <p className='text-lg'>${item.price.toFixed(2)}</p>
                </CardAction>
              </CardFooter>
            </Card>
          ))}
      </div>
    </div>
  )
}

export default DinnerMenu
