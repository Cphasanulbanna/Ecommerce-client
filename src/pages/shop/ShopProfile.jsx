import React from "react";

import { Link } from "react-router-dom";

const ShopProfile = () => {
    return (
        <div className="sticky top-0 z-20 w-1/5 h-screen p-6 bg-white shadow-lg">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                    <div className="sm:w-[120px] sm:h-[120px] h-[80px] w-[80px] rounded-full overflow-hidden cursor-pointer shadow-lg p-2">
                        <img
                            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c0840e59-db43-4681-ae7b-31a04dc4bc55/d7eqdvw-4e97ac92-e4b9-4498-9655-e4d612eb478b.png/v1/fill/w_1192,h_670/random_logo_by_criticl_d7eqdvw-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvYzA4NDBlNTktZGI0My00NjgxLWFlN2ItMzFhMDRkYzRiYzU1XC9kN2VxZHZ3LTRlOTdhYzkyLWU0YjktNDQ5OC05NjU1LWU0ZDYxMmViNDc4Yi5wbmciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.X991O1jF5lTNZbbEoHEfoo6nlHEihBMHMIm5-uBCXcU"
                            alt="logo"
                        />
                    </div>
                    <h3>My Shop</h3>
                </div>

                <div className="flex flex-col gap-6">
                    <div>
                        <h3 className="font-bold">Address</h3>
                        <p>201, cherukode, india</p>
                    </div>
                    <div>
                        <h3 className="font-bold">Phone Number</h3>
                        <p>9535478124</p>
                    </div>
                    <div>
                        <h3 className="font-bold">Total Products</h3>
                        <p>20</p>
                    </div>
                    <div>
                        <h3 className="font-bold">Shop Ratings</h3>
                        <p>3/5</p>
                    </div>
                    <div>
                        <h3 className="font-bold">Joined on</h3>
                        <p>2022-01-10</p>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <Link
                        to="/"
                        className="w-full text-white rounded-none btn bg-deep-blue"
                    >
                        Edit Shop
                    </Link>
                    <Link
                        to="/"
                        className="w-full text-white rounded-none btn bg-deep-blue"
                    >
                        Edit Shop
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ShopProfile;
