import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

const FollowedUserStoryCard = ({ title, description }) => {

    const slicedDescription = description.slice(0, 200);

    return (
        <Card className="mt-6 w-3/4 mb-10 bg-gray-50 rounded-none">
            <CardHeader color="blue-gray" className="relative h-auto mt-4 rounded-none">
                <img
                    src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                    alt="card-image"
                    className="rounded-none"
                />
            </CardHeader>
            <CardBody className="rounded-none">
                <Typography variant="h5" color="blue-gray" className="mb-2 rounded-none">
                    {title}
                </Typography>
                <Typography className="italic text-sm pb-2 rounded-none">
                    Rista Shrestha
                </Typography>
                <Typography className="rounded-none  text-justify">
                    {slicedDescription}
                </Typography>
            </CardBody>
            <CardFooter className="pt-0 flex justify-between rounded-none">
                <Button className="text-grey border-1 border-black py-2 px-3 rounded-none">Read More</Button>

                <p className="text-black py-2 px-3 font-medium text-sm rounded-none">10 Likes</p>
                <p className="text-black py-2 px-3 font-medium text-sm rounded-none">5 Comments</p>
            </CardFooter>
        </Card>
    );
}

export default FollowedUserStoryCard;
