import Image from "next/image"
const menuItems = [
  {
    name: "Truffle Scrambled Eggs",
    description: "Organic eggs, black truffle oil, chives, cream.",
    price: "$18.00",
    type:"Breakfast"
  },
  {
    name: "Smoked Salmon Bagel",
    description: "Artisan bagel, cream cheese, smoked salmon.",
    price: "$22.00",
    type:"Breakfast"
  },
  {
    name: "French Toast Brûlée",
    description: "Brioche bread, vanilla custard, maple syrup.",
    price: "$16.00",
    type:"Breakfast"
  },
  {
    name: "Avocado Garden Tartine",
    description: "Sourdough, avocado mash, tomato, radish.",
    price: "$17.00",
    type:"Breakfast"
  },
  {
    name: "Quinoa Bowl",
    description: "Red quinoa, egg, spinach, tomato, feta",
    price: "$22.00",
    type:"Breakfast"
  },
  {
    name: "Grilled Chicken Panzanella",
    description: "Grilled chicken breast, ciabatta, cherry tomatoes.",
    price: "$24.00",
    type:"Lunch"
  },
  {
    name: "Seared Tuna Nicoise",
    description: "Ahi tuna, soft egg, olives, fingerling potatoes.",
    price: "$28.00",
    type:"Lunch"
  },
  {
    name: "Lobster Roll Deluxe",
    description: "Buttered brioche, lobster meat, aioli, celery.",
    price: "$32.00",
    type:"Lunch"
  },
  {
    name: "Porcini Mushroom Risotto",
    description: "Arborio rice, porcini mushrooms, truffle essence.",
    price: "$26.00",
    type:"Lunch"
  },
  {
    name: "Wagyu Burger",
    description: "Wagyu beef, aged cheddar, arugula, brioche bun.",
    price: "$29.00",
    type:"Lunch"
  },
  {
    name: "Pan-Seared Duck Breast",
    description: "Duck breast, orange glaze, rosemary, asparagus",
    price: "$42.00",
    type:"Dinner"
  },
  {
    name: "Lamb Rack Provencal",
    description: "Lamb rack, herb crust, ratatouille, demi-glace.",
    price: "$47.00",
    type:"Dinner"
  },
  {
    name: "Wild Mushroom Tagliatelle",
    description: "Housemade pasta, wild mushrooms,parmesan.",
    price: "$36.00",
    type:"Dinner"
  },
  {
    name: "Filet Mignon Au Poivre",
    description: "Prime filet, garlic mash, green beans, butter.",
    price: "$55.00",
    type:"Dinner"
  },
  {
    name: "Chilean Sea Bass",
    description: "Sea bass, miso glaze, bok choy, jasmine rice.",
    price: "$49.00",
    type:"Dinner"
  },
  {
    name: "Chocolate Lava Cake",
    description: "Dark chocolate, molten center, raspberry coulis.",
    price: "$14.00",
    type:"Dessert"
  },
  {
    name: "Crème Brûlée Trio",
    description: "Vanilla, pistachio, custards, caramelized sugar.",
    price: "$13.00",
    type:"Dessert"
  },
  {
    name: "Lemon Basil Cheesecake",
    description: "Cream cheese, lemon zest, whipped cream.",
    price: "$15.00",
    type:"Dessert"
  },
  {
    name: "Tiramisu Classico",
    description: "Mascarpone, cocoa powder, coffee liqueur.",
    price: "$14.00",
    type:"Dessert"
  },
  {
    name: "Seasonal Fruit Pavlova",
    description: "Meringue, whipped cream, berries, passionfruit.",
    price: "$12.00",
    type:"Dessert"
  },
];
const OurMenu = () => {
  return (
    <section className='w-full flex flex-col items-center justify-center gap-8'>
      <div className=' flex flex-col items-center justify-center gap-2'>
        <h2 className='text-5xl font-playfair font-bold text-primary'>
          Our Menu
        </h2>
        <p className='text-lg md:text-xl  text-text/80'>
          A Symphony of Flavors
        </p>
      </div>
      <div className='w-full  grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center'>
        <div className='relative w-[500px] h-[550px] border-6 border-foreground rounded-bl-none rounded-tr-none rounded-br-[100px] rounded-tl-[100px] overflow-hidden'>
          <Image src='/images-home/dining-options-1.avif' alt='menu' fill />
        </div>

        <div className='flex flex-col justify-center items-start gap-6 w-full'>
         {menuItems
         .filter((menuItem) => menuItem.type === "Breakfast")
         .map((menuItem, index) => (
            <div key={index} className='w-full flex flex-col gap-4'>
            <div className='flex items-center justify-between w-full ' >
              <div>
                <h2 className='text-xl font-semibold text-primary'>
                  {menuItem.name}
                </h2>
                <p className='text-md text-text/80'>
                  {menuItem.description}
                </p>
              </div>
              <p className='text-2xl font-semibold'>{menuItem.price}</p>
            </div>
            <div className='border-2 w-full h-px bg-primary border-dashed'></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurMenu
