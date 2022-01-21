import Button from './Button'

const PopularDish = (props) => {
    return (
        <div className="bg-white rounded-xl flex justfy-center flex-col p-8 w-72 items-center border border-orange-300 mt-4 m-auto">
            <img src={props.photo} />
            <h2 className="font-bold text-2xl my-2" >Pasta</h2>
            <div className="flex w-24 justify-between">
                <img className="w-4" src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" />
                <img className="w-4" src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" />
                <img className="w-4" src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" />
                <img className="w-4" src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" />
                <img className="w-4" src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" />
            </div>
            <p className="text-center my-4">Pasta is a type of food typically made from an unleavened dough.</p>
            <div className='flex items-center justify-between w-full'>
                <h3>$35.00</h3>
                <Button bg={true} text="Add To Cart" />
            </div>
        </div>
    )
}

export default PopularDish