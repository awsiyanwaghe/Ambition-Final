// pages/Contact.jsx
import React, { useState, useEffect } from 'react'
import {
  FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt,
  FaClock, FaCopy, FaCheck, FaInstagram, FaFacebook, FaYoutube
} from 'react-icons/fa'

const Contact = () => {
  const [copied, setCopied] = useState(false)
  const [activeTab, setActiveTab] = useState('contact')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  // ✅ FIX: page open hone pe thoda niche scroll
  useEffect(() => {
    window.scrollTo({ top: 120, behavior: 'smooth' })
  }, [])

  const contactInfo = {
    address: "Group No. 1, Ambition Tutorial, Group Modi Chawl, Opposite to Siddhivinayak Mandir, Group 2, Sona Intp Colony, Tagore Nagar, Vikhroli East, Mumbai, Maharashtra",
    phone: "+91 91679 65239",
    phoneAlt: "+91 98765 43210",
    email: "info@sanskrithub.com",
    emailAlt: "support@sanskrithub.com",
    whatsapp: "+91 91679 65239",
    instagram: "@sanskrithub",
    facebook: "SanskritHub",
    youtube: "@SanskritHub"
  }

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in your courses.")
    window.open(`https://wa.me/${contactInfo.whatsapp.replace('+', '')}?text=${message}`, '_blank')
  }

  const handleCall = (phone) => {
    window.location.href = `tel:${phone}`
  }

  const handleEmail = (email) => {
    window.location.href = `mailto:${email}`
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(formData.subject || "New Inquiry")
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}
    `)

    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div>
      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white pt-28 pb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
        <p className="text-xl">We’d love to hear from you!</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div onClick={handleWhatsApp}
            className="bg-green-500 text-white p-6 rounded-xl hover:scale-105 transition cursor-pointer">
            <FaWhatsapp className="text-3xl mb-2" />
            <h3 className="font-bold">WhatsApp</h3>
            <p>{contactInfo.whatsapp}</p>
          </div>

          <div onClick={() => handleCall(contactInfo.phone)}
            className="bg-blue-500 text-white p-6 rounded-xl hover:scale-105 transition cursor-pointer">
            <FaPhone className="text-3xl mb-2" />
            <h3 className="font-bold">Call</h3>
            <p>{contactInfo.phone}</p>
          </div>

          <div onClick={() => handleEmail(contactInfo.email)}
            className="bg-purple-500 text-white p-6 rounded-xl hover:scale-105 transition cursor-pointer">
            <FaEnvelope className="text-3xl mb-2" />
            <h3 className="font-bold">Email</h3>
            <p>{contactInfo.email}</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT */}
          <div className="space-y-6">

        {/* Address + Working Hours */}
<div className="bg-white shadow p-6 rounded-xl space-y-6">

  {/* Address */}
  <div className="flex gap-4">
    <FaMapMarkerAlt className="text-blue-600 text-2xl" />
    <div>
      <h3 className="font-bold">Address</h3>
      <p className="text-gray-600">{contactInfo.address}</p>

      <button
        onClick={() =>
          window.open(
            "https://maps.google.com/?q=" +
            encodeURIComponent("Ambition Tutorial Vikhroli East Mumbai"),
            "_blank"
          )
        }
        className="text-blue-600 mt-2 hover:underline"
      >
        Open in Maps →
      </button>
    </div>
  </div>

  {/* Divider */}
  <div className="border-t pt-4"></div>

  {/* Working Hours */}
  <div className="flex gap-4">
    <FaClock className="text-blue-600 text-2xl" />
    <div>
      <h3 className="font-bold">Working Hours</h3>
      <div className="text-gray-600 text-sm mt-1 space-y-1">
        <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
        <p>Saturday: 9:00 AM - 5:00 PM</p>
        <p className="text-red-500 font-medium">Sunday: Closed</p>
      </div>
    </div>
  </div>

</div>

            {/* Phone */}
            <div className="bg-white shadow p-6 rounded-xl">
              <h3 className="font-bold mb-2">Phone</h3>

              {[contactInfo.phone, contactInfo.phoneAlt].map((num, i) => (
                <div key={i} className="flex justify-between mb-2">
                  <span>{num}</span>
                  <div className="space-x-2">
                    <button onClick={() => handleCall(num)} className="text-green-600">Call</button>
                    <button onClick={() => handleCopy(num, num)} className="text-blue-600">
                      {copied === num ? <FaCheck /> : <FaCopy />}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="bg-white shadow p-6 rounded-xl">
              <h3 className="font-bold mb-3">Follow</h3>
              <div className="flex gap-4">
                <FaInstagram className="text-2xl text-pink-500 cursor-pointer" />
                <FaFacebook className="text-2xl text-blue-600 cursor-pointer" />
                <FaYoutube className="text-2xl text-red-500 cursor-pointer" />
              </div>
            </div>

          </div>

          {/* RIGHT FORM */}
          <div className="bg-white shadow p-6 rounded-xl">
            <h3 className="font-bold text-xl mb-4">Send Message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input name="name" value={formData.name} onChange={handleChange}
                placeholder="Name" required className="w-full border p-3 rounded" />

              <input name="email" value={formData.email} onChange={handleChange}
                placeholder="Email" required className="w-full border p-3 rounded" />

              <input name="phone" value={formData.phone} onChange={handleChange}
                placeholder="Phone" required className="w-full border p-3 rounded" />

              <textarea name="message" value={formData.message} onChange={handleChange}
                placeholder="Message" required className="w-full border p-3 rounded" />

              <button className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700">
                Send
              </button>

              {submitted && (
                <p className="text-green-600 text-center">Message opened in email ✅</p>
              )}
            </form>
          </div>
        </div>

       
      </div>
    </div>
  )
}

export default Contact