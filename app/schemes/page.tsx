"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, ArrowRight } from "lucide-react"
import Link from "next/link"
import { schemes } from "@/data/schemes"

export default function SchemesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filters, setFilters] = useState({
    state: "",
    gender: "",
    ageRange: [0, 100],
    occupation: "",
    economicStatus: "",
    categories: [] as string[],
  })

  const filteredSchemes = schemes.filter((scheme) => {
    // Search filter
    if (
      searchQuery &&
      !scheme.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !scheme.description.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false
    }

    // State filter
    if (filters.state && scheme.eligibility.states && !scheme.eligibility.states.includes(filters.state)) {
      return false
    }

    // Gender filter
    if (
      filters.gender &&
      scheme.eligibility.gender &&
      scheme.eligibility.gender !== "All" &&
      scheme.eligibility.gender !== filters.gender
    ) {
      return false
    }

    // Age filter
    if (scheme.eligibility.minAge && scheme.eligibility.minAge > filters.ageRange[0]) {
      return false
    }
    if (scheme.eligibility.maxAge && scheme.eligibility.maxAge < filters.ageRange[1]) {
      return false
    }

    // Occupation filter
    if (
      filters.occupation &&
      scheme.eligibility.occupation &&
      !scheme.eligibility.occupation.includes(filters.occupation)
    ) {
      return false
    }

    // Economic status filter
    if (
      filters.economicStatus &&
      scheme.eligibility.economicStatus &&
      !scheme.eligibility.economicStatus.includes(filters.economicStatus)
    ) {
      return false
    }

    // Categories filter
    if (filters.categories.length > 0 && !filters.categories.some((cat) => scheme.categories.includes(cat))) {
      return false
    }

    return true
  })

  const handleCategoryToggle = (category: string) => {
    setFilters((prev) => {
      const categories = prev.categories.includes(category)
        ? prev.categories.filter((c) => c !== category)
        : [...prev.categories, category]

      return { ...prev, categories }
    })
  }

  const clearFilters = () => {
    setFilters({
      state: "",
      gender: "",
      ageRange: [0, 100],
      occupation: "",
      economicStatus: "",
      categories: [],
    })
    setSearchQuery("")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">Government Schemes</h1>

      <div className="mb-8 flex flex-col gap-4 md:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          <Input
            placeholder="Search schemes..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button variant="outline" className="flex items-center gap-2 md:w-auto" onClick={clearFilters}>
          <Filter className="h-4 w-4" /> Clear Filters
        </Button>
      </div>

      <div className="grid gap-8 md:grid-cols-[300px_1fr]">
        {/* Filters Sidebar */}
        <div className="rounded-lg border p-4">
          <h2 className="mb-4 text-xl font-semibold">Filters</h2>

          <div className="space-y-6">
            {/* State Filter */}
            <div>
              <Label htmlFor="state">State</Label>
              <Select value={filters.state} onValueChange={(value) => setFilters({ ...filters, state: value })}>
                <SelectTrigger id="state">
                  <SelectValue placeholder="Select state" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All States</SelectItem>
                  <SelectItem value="Andhra Pradesh">Andhra Pradesh</SelectItem>
                  <SelectItem value="Delhi">Delhi</SelectItem>
                  <SelectItem value="Gujarat">Gujarat</SelectItem>
                  <SelectItem value="Karnataka">Karnataka</SelectItem>
                  <SelectItem value="Maharashtra">Maharashtra</SelectItem>
                  <SelectItem value="Tamil Nadu">Tamil Nadu</SelectItem>
                  <SelectItem value="Uttar Pradesh">Uttar Pradesh</SelectItem>
                  <SelectItem value="West Bengal">West Bengal</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Gender Filter */}
            <div>
              <Label htmlFor="gender">Gender</Label>
              <Select value={filters.gender} onValueChange={(value) => setFilters({ ...filters, gender: value })}>
                <SelectTrigger id="gender">
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Female">Female</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Age Range Filter */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <Label>Age Range</Label>
                <span className="text-sm text-gray-500">
                  {filters.ageRange[0]} - {filters.ageRange[1]} years
                </span>
              </div>
              <Slider
                defaultValue={[0, 100]}
                max={100}
                step={1}
                value={filters.ageRange}
                onValueChange={(value) => setFilters({ ...filters, ageRange: value as [number, number] })}
                className="py-4"
              />
            </div>

            {/* Occupation Filter */}
            <div>
              <Label htmlFor="occupation">Occupation</Label>
              <Select
                value={filters.occupation}
                onValueChange={(value) => setFilters({ ...filters, occupation: value })}
              >
                <SelectTrigger id="occupation">
                  <SelectValue placeholder="Select occupation" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="Farmer">Farmer</SelectItem>
                  <SelectItem value="Student">Student</SelectItem>
                  <SelectItem value="Entrepreneur">Entrepreneur</SelectItem>
                  <SelectItem value="Government Employee">Government Employee</SelectItem>
                  <SelectItem value="Private Sector">Private Sector</SelectItem>
                  <SelectItem value="Unemployed">Unemployed</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Economic Status Filter */}
            <div>
              <Label htmlFor="economicStatus">Economic Status</Label>
              <Select
                value={filters.economicStatus}
                onValueChange={(value) => setFilters({ ...filters, economicStatus: value })}
              >
                <SelectTrigger id="economicStatus">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="BPL">Below Poverty Line (BPL)</SelectItem>
                  <SelectItem value="EWS">Economically Weaker Section (EWS)</SelectItem>
                  <SelectItem value="LIG">Low Income Group (LIG)</SelectItem>
                  <SelectItem value="MIG">Middle Income Group (MIG)</SelectItem>
                  <SelectItem value="HIG">High Income Group (HIG)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Categories Filter */}
            <div>
              <Label className="mb-2 block">Categories</Label>
              <div className="space-y-2">
                {["Education", "Health", "Housing", "Agriculture", "Employment", "Financial", "Social Welfare"].map(
                  (category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox
                        id={`category-${category}`}
                        checked={filters.categories.includes(category)}
                        onCheckedChange={() => handleCategoryToggle(category)}
                      />
                      <Label htmlFor={`category-${category}`} className="cursor-pointer">
                        {category}
                      </Label>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Schemes List */}
        <div>
        <Tabs defaultValue="grid">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold">
              {filteredSchemes.length} {filteredSchemes.length === 1 ? "Scheme" : "Schemes"} Found
            </h2>
            
              <TabsList>
                <TabsTrigger value="grid">Grid</TabsTrigger>
                <TabsTrigger value="list">List</TabsTrigger>
              </TabsList>
          </div>

          <TabsContent value="grid" className="mt-0">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredSchemes.map((scheme) => (
                <Card key={scheme.id} className="flex h-full flex-col">
                  <CardHeader className="pb-2">
                    <CardTitle>{scheme.title}</CardTitle>
                    <CardDescription>{scheme.ministry}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="line-clamp-3 text-sm">{scheme.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {scheme.categories.map((category) => (
                        <Badge key={category} variant="outline" className="bg-[#156b36]/10">
                          {category}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full bg-[#156b36] hover:bg-[#156b36]/90">
                      <Link href={`/schemes/${scheme.id}`}>
                        View Details <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="list" className="mt-0">
            <div className="space-y-4">
              {filteredSchemes.map((scheme) => (
                <Card key={scheme.id}>
                  <div className="flex flex-col p-4 sm:flex-row sm:items-start sm:gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">{scheme.title}</h3>
                      <p className="text-sm text-gray-500">{scheme.ministry}</p>
                      <p className="mt-2">{scheme.description}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {scheme.categories.map((category) => (
                          <Badge key={category} variant="outline" className="bg-[#156b36]/10">
                            {category}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="mt-4 sm:mt-0 sm:w-32">
                      <Button asChild className="w-full bg-[#156b36] hover:bg-[#156b36]/90">
                        <Link href={`/schemes/${scheme.id}`}>View Details</Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
          </Tabs>

          {filteredSchemes.length === 0 && (
            <div className="mt-8 rounded-lg border border-dashed p-8 text-center">
              <h3 className="text-lg font-semibold">No schemes found</h3>
              <p className="mt-2 text-gray-500">Try adjusting your filters or search query</p>
              <Button variant="outline" className="mt-4" onClick={clearFilters}>
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
