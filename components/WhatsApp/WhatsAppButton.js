import React from "react";
import FloatingWhatsApp from "react-floating-whatsapp"; // Correct import

const WhatsAppButton = () => {
    return (
        <FloatingWhatsApp
            phoneNumber="+918657655887" // Your WhatsApp number
            accountName="Zome Tech Agency" // Your business name
            statusMessage="Typically replies within an hour" // Custom status
            chatMessage="Hello! How can we assist you?" // Predefined message
            avatar="/logo.png" // Path to your avatar/logo
            allowEsc // Allows closing with ESC key
            allowClickAway // Allows closing by clicking outside
        />
    );
};

export default WhatsAppButton;
