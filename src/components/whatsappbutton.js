import React from "react"
import whatsappLogo from "../images/whatsapp.png"

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/6281234567890"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 9999,
        backgroundColor: "#25D366",
        borderRadius: "50%",
        padding: "10px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
        transition: "transform 0.3s ease",
      }}
      onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.1)")}
      onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
    >
      <img
        src={whatsappLogo}
        alt="WhatsApp"
        style={{ width: "50px", height: "50px" }}
      />
    </a>
  )
}

export default WhatsAppButton
