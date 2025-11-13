import axios from "axios";
import { useState } from "react";

const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [responseMessage, setResponseMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const newPost = {
            title,
            body,
        };

        // Make POST request to send data
        axios
            .post("https://jsonplaceholder.typicode.com//posts", newPost)
            .then((response) => {
                setResponseMessage("Post created successfully!");
            })
            .catch((err) => {
                setResponseMessage("Error creating post");
            });
    }
}