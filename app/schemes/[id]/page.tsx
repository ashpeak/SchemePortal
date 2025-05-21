"use client"

import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Download, Calendar, MapPin, Users, Landmark, FileText, AlertCircle, Share2 } from "lucide-react"
import Link from "next/link"
import { schemes } from "@/data/schemes"

export default function SchemeDetailPage() {
  const { id } = useParams()
  const scheme = schemes.find((s) => s.id === id)

  if (!scheme) {
    return (
      <div className="container mx-auto flex min-h-[50vh] items-center justify-center px-4 py-8">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Scheme Not Found</CardTitle>
            <CardDescription>The scheme you're looking for doesn't exist or has been removed.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/schemes">Browse All Schemes</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Link href="/schemes" className="text-sm text-gray-500 hover:underline">
              All Schemes
            </Link>
            <span className="text-sm text-gray-500">/</span>
            <span className="text-sm text-gray-500">{scheme.title}</span>
          </div>
          <h1 className="mt-2 text-3xl font-bold">{scheme.title}</h1>
          <p className="mt-1 text-gray-500">{scheme.ministry}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" className="gap-1">
            <Share2 className="h-4 w-4" /> Share
          </Button>
          <Button size="sm" className="gap-1 bg-[#156b36] hover:bg-[#156b36]/90">
            <Download className="h-4 w-4" /> Download Guidelines
          </Button>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
        <div>
          {/* Main Content */}
          <Tabs defaultValue="overview">
            <TabsList className="mb-4 w-full justify-start">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="eligibility">Eligibility</TabsTrigger>
              <TabsTrigger value="benefits">Benefits</TabsTrigger>
              <TabsTrigger value="application">How to Apply</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-0">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <p>{scheme.description}</p>
                    <p>{scheme.longDescription}</p>

                    <div className="flex flex-wrap gap-2">
                      {scheme.categories.map((category) => (
                        <Badge key={category} variant="outline" className="bg-[#156b36]/10">
                          {category}
                        </Badge>
                      ))}
                    </div>

                    <Alert>
                      <AlertCircle className="h-4 w-4" />
                      <AlertTitle>Important Notice</AlertTitle>
                      <AlertDescription>
                        {scheme.importantNotice ||
                          "Please check the official website for the most up-to-date information."}
                      </AlertDescription>
                    </Alert>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="eligibility" className="mt-0">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="mb-2 text-lg font-semibold">Who Can Apply</h3>
                      <ul className="ml-6 list-disc space-y-2">
                        {scheme.eligibility.criteria.map((criterion, index) => (
                          <li key={index}>{criterion}</li>
                        ))}
                      </ul>
                    </div>

                    {scheme.eligibility.gender && (
                      <div>
                        <h3 className="mb-2 text-lg font-semibold">Gender</h3>
                        <p>{scheme.eligibility.gender}</p>
                      </div>
                    )}

                    {(scheme.eligibility.minAge || scheme.eligibility.maxAge) && (
                      <div>
                        <h3 className="mb-2 text-lg font-semibold">Age Criteria</h3>
                        <p>
                          {scheme.eligibility.minAge && `Minimum: ${scheme.eligibility.minAge} years`}
                          {scheme.eligibility.minAge && scheme.eligibility.maxAge && " | "}
                          {scheme.eligibility.maxAge && `Maximum: ${scheme.eligibility.maxAge} years`}
                        </p>
                      </div>
                    )}

                    {scheme.eligibility.economicStatus && (
                      <div>
                        <h3 className="mb-2 text-lg font-semibold">Economic Status</h3>
                        <p>{scheme.eligibility.economicStatus}</p>
                      </div>
                    )}

                    {scheme.eligibility.states && scheme.eligibility.states.length > 0 && (
                      <div>
                        <h3 className="mb-2 text-lg font-semibold">Available In</h3>
                        <div className="flex flex-wrap gap-2">
                          {scheme.eligibility.states.map((state) => (
                            <Badge key={state} variant="secondary">
                              {state}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="benefits" className="mt-0">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Key Benefits</h3>
                    <ul className="ml-6 list-disc space-y-2">
                      {scheme.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>

                    {scheme.financialAssistance && (
                      <div className="mt-6">
                        <h3 className="mb-2 text-lg font-semibold">Financial Assistance</h3>
                        <p>{scheme.financialAssistance}</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="application" className="mt-0">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="mb-2 text-lg font-semibold">Application Process</h3>
                      <ol className="ml-6 list-decimal space-y-2">
                        {scheme.applicationProcess.map((step, index) => (
                          <li key={index}>{step}</li>
                        ))}
                      </ol>
                    </div>

                    {scheme.applicationDeadline && (
                      <div>
                        <h3 className="mb-2 text-lg font-semibold">Application Deadline</h3>
                        <p className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" /> {scheme.applicationDeadline}
                        </p>
                      </div>
                    )}

                    <div className="rounded-lg bg-[#156b36]/10 p-4">
                      <h3 className="mb-2 text-lg font-semibold">Apply Online</h3>
                      <p className="mb-4">Visit the official portal to apply for this scheme</p>
                      <Button className="bg-[#156b36] hover:bg-[#156b36]/90">Go to Application Portal</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="documents" className="mt-0">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="mb-2 text-lg font-semibold">Required Documents</h3>
                      <ul className="ml-6 list-disc space-y-2">
                        {scheme.requiredDocuments.map((doc, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <FileText className="mt-0.5 h-4 w-4 shrink-0" />
                            <span>{doc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Alert>
                      <AlertCircle className="h-4 w-4" />
                      <AlertTitle>Document Verification</AlertTitle>
                      <AlertDescription>
                        All documents must be self-attested. Original documents may be required for verification at
                        later stages.
                      </AlertDescription>
                    </Alert>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* FAQ Section */}
          <div className="mt-8">
            <h2 className="mb-4 text-2xl font-bold">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {scheme.faqs.map((faq, index) => (
                <Card key={index}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Scheme Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Ministry/Department</h3>
                  <p>{scheme.ministry}</p>
                </div>

                <Separator />

                <div>
                  <h3 className="text-sm font-medium text-gray-500">Launched On</h3>
                  <p className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" /> {scheme.launchDate}
                  </p>
                </div>

                <Separator />

                <div>
                  <h3 className="text-sm font-medium text-gray-500">Available In</h3>
                  <p className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {scheme.eligibility.states && scheme.eligibility.states.length > 0
                      ? scheme.eligibility.states.join(", ")
                      : "All India"}
                  </p>
                </div>

                <Separator />

                <div>
                  <h3 className="text-sm font-medium text-gray-500">Target Beneficiaries</h3>
                  <p className="flex items-center gap-2">
                    <Users className="h-4 w-4" /> {scheme.targetBeneficiaries}
                  </p>
                </div>

                <Separator />

                <div>
                  <h3 className="text-sm font-medium text-gray-500">Scheme Type</h3>
                  <p className="flex items-center gap-2">
                    <Landmark className="h-4 w-4" /> {scheme.schemeType}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Need Help?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Have questions about this scheme or need assistance with your application?</p>
              <div className="space-y-2">
                <Button className="w-full bg-[#156b36] hover:bg-[#156b36]/90">Chat with Assistant</Button>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/contact">Contact Support</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Related Schemes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {schemes
                  .filter((s) => s.id !== scheme.id && s.categories.some((c) => scheme.categories.includes(c)))
                  .slice(0, 3)
                  .map((relatedScheme) => (
                    <div key={relatedScheme.id} className="flex flex-col">
                      <Link
                        href={`/schemes/${relatedScheme.id}`}
                        className="font-medium hover:text-[#156b36] hover:underline"
                      >
                        {relatedScheme.title}
                      </Link>
                      <span className="text-sm text-gray-500">{relatedScheme.ministry}</span>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
