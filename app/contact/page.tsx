"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle the form submission here
    setSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">Contact Us</h1>

      <div className="grid gap-8 lg:grid-cols-[1fr_400px]">
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
              <CardDescription>
                Fill out the form below and our team will get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <CheckCircle className="mb-4 h-16 w-16 text-[#156b36]" />
                  <h3 className="text-xl font-semibold">Thank You!</h3>
                  <p className="mt-2">Your message has been submitted successfully. We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter your first name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="Enter your phone number" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Select>
                      <SelectTrigger id="subject">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="scheme">Scheme Information</SelectItem>
                        <SelectItem value="application">Application Assistance</SelectItem>
                        <SelectItem value="technical">Technical Support</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Please describe your query in detail" rows={5} required />
                  </div>

                  <Button type="submit" className="w-full bg-[#156b36] hover:bg-[#156b36]/90">
                    <Send className="mr-2 h-4 w-4" /> Submit Message
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 text-[#156b36]" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-500">support@govschemes.gov.in</p>
                    <p className="text-gray-500">info@govschemes.gov.in</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 text-[#156b36]" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-gray-500">Toll-Free: 1800-XXX-XXXX</p>
                    <p className="text-gray-500">Helpline: +91-XX-XXXXXXXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 text-[#156b36]" />
                  <div>
                    <h3 className="font-medium">Address</h3>
                    <p className="text-gray-500">
                      Government of India
                      <br />
                      Department of Scheme Implementation
                      <br />
                      New Delhi - 110001
                      <br />
                      India
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Office Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 5:30 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 AM - 1:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday & Holidays</span>
                  <span>Closed</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Support Options</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="chat">
                <TabsList className="w-full">
                  <TabsTrigger value="chat">Chat</TabsTrigger>
                  <TabsTrigger value="call">Call</TabsTrigger>
                  <TabsTrigger value="email">Email</TabsTrigger>
                </TabsList>
                <TabsContent value="chat" className="pt-4">
                  <p className="mb-4">Chat with our virtual assistant for immediate help with your queries.</p>
                  <Button className="w-full bg-[#156b36] hover:bg-[#156b36]/90">Start Chat</Button>
                </TabsContent>
                <TabsContent value="call" className="pt-4">
                  <p className="mb-4">Call our toll-free number for direct assistance from our support team.</p>
                  <Button className="w-full bg-[#156b36] hover:bg-[#156b36]/90">1800-XXX-XXXX</Button>
                </TabsContent>
                <TabsContent value="email" className="pt-4">
                  <p className="mb-4">Send us an email and we'll respond within 24-48 hours.</p>
                  <Button className="w-full bg-[#156b36] hover:bg-[#156b36]/90">support@govschemes.gov.in</Button>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="mb-6 text-2xl font-bold">Frequently Asked Questions</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">How can I check the status of my application?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                You can check your application status by logging into the respective scheme portal using your
                application ID and date of birth/mobile number.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">
                What documents are generally required for scheme applications?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Common documents include Aadhaar Card, Income Certificate, Caste Certificate, Residence Proof, and Bank
                Account details. Specific requirements vary by scheme.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">How long does it take to process an application?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Processing times vary by scheme, typically ranging from 15 to 45 days. Some schemes may take longer
                depending on verification processes.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Can I apply for multiple schemes simultaneously?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Yes, you can apply for multiple schemes if you meet the eligibility criteria for each. There are no
                restrictions on the number of schemes you can apply for.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
