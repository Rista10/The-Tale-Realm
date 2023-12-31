import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

const SearchCard = ({ title, description }) => {

    return (
        <Card className="mt-6 w-96 mb-10 bg-gray-50">
            <CardHeader color="blue-gray" className="relative h-auto mt-4">
                <img
                    src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                    alt="card-image"
                />
            </CardHeader>
            <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                    {title}
                </Typography>
                <Typography className="italic text-sm pb-2" >
                    Rista Shrestha
                </Typography>
                <Typography>
                    {description}
                </Typography>
            </CardBody>
            <CardFooter className="pt-0 flex justify-between">
                <Button className="text-grey border-1 border-black py-2 px-3">Read More</Button>

                <p className="text-black py-2 px-3 font-medium text-sm">10 Likes</p>
                <p className="text-black py-2 px-3 font-medium text-sm">5 Comments</p>

            </CardFooter>
        </Card>
    );
}


export default SearchCard;