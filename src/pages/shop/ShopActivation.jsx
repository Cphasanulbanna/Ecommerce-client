import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../../axiosConfig";

const ShopActivation = () => {
    const { activation_token } = useParams();

    const [error, setError] = useState(false);

    const activationMail = async () => {
        try {
            const response = await axiosInstance("/shop/activation", {
                method: "POST",
                data: {
                    activation_token: activation_token,
                },
            });

            console.log(response.data, "response");
        } catch (error) {
            setError(true);
            console.log(error.message);
        }
    };

    useEffect(() => {
        activationMail();
    }, []);
    return (
        <section className="flex items-center justify-center w-full h-full">
            {error ? (
                <p>
                    Account activation failed, <br /> Your token is expired.{" "}
                </p>
            ) : (
                <p>
                    Verification successfull! <br />
                    Your seller account has been created successfully
                </p>
            )}
        </section>
    );
};

export default ShopActivation;
