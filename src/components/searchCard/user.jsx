import React from 'react';
import {
    Card,
    CardBody,
    Typography,
} from "@material-tailwind/react";

const UserCard = ({ name, email }) => {
    return (
        <div>
            <Card className="mt-6 w-80 mb-10 bg-gray-50">
                <CardBody className='flex flex-column justify-between'>
                    <div >
                        <img
                            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                            alt=""
                        />
                    </div>

                    <div>
                        <Typography variant="h5" color="blue-gray" className="mb-2 text-center">
                            {name}
                        </Typography>
                        <Typography className="text-center">
                            {email}
                        </Typography>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

export default UserCard;
