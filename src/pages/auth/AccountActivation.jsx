import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../../axiosConfig";

const AccountActivation = () => {
    const { activation_token } = useParams();

    const [error, setError] = useState(false);

    const activationMail = async () => {
        try {
            const response = await axiosInstance("/auth/activation", {
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
        <section className="w-full h-full flex items-center justify-center">
            {error ? (
                <p>
                    Account activation failed, <br /> Your token is expired.{" "}
                </p>
            ) : (
                <p>
                    Verification successfull! <br />
                    Your account has been created successfully
                </p>
            )}
        </section>
    );
};

export default AccountActivation;
