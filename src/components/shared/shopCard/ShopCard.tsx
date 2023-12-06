type Props = {
    name: string;
    description: string;
    price: number;
    image: string;
    quantity: number;
};

const ShopCard = ({ name, description, price, image, quantity }: Props) => {
    return (
        <div className=' rounded  shadow-lg  m-2  flex-col  items-center w-[180px] flex p-4'>
            <img src={image} alt='' className='w-full' />
            <p className='font-bold text-sm'>{name}</p>
            <p className='text-gray-700 text-sm'>{description}</p>
            <div className='flex flex-row justify-between items-start gap-12'>
                <span className='text-sm text-gray-600'>${price}</span>
                <span className='text-sm text-gray-600'>{quantity}</span>
            </div>
        </div>
    );
};

export default ShopCard;
