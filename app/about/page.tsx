import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Target, Eye, MapPin, Scale, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7ebf7aed7a3cebffbb9d4a9099c53716-7zadv4Qe2hy3BCJTDBqvoocjWhM83t.png"
              alt="Canadian Crystal View Logo"
              className="w-10 h-10"
            />
            <span className="font-heading font-bold text-xl text-gray-900">Canadian Crystal View</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-violet-600 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-violet-600 font-medium">
              About
            </Link>
            <Link href="/#products" className="text-gray-600 hover:text-violet-600 transition-colors">
              Products
            </Link>
            <Link href="/#team" className="text-gray-600 hover:text-violet-600 transition-colors">
              Team
            </Link>
            <Button className="bg-violet-600 hover:bg-violet-700">Contact Us</Button>
          </nav>
        </div>
      </header>

      {/* Back Navigation */}
      <div className="container mx-auto px-4 py-4">
        <Link href="/" className="inline-flex items-center text-violet-600 hover:text-violet-700 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-violet-50 to-white">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-gray-900 mb-6">
            About <span className="text-violet-600">Canadian Crystal View</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Ontario's premier glass processing startup, focused on energy-efficient and safety-certified architectural
            glass solutions.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="mb-12">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <Building2 className="w-8 h-8 text-violet-600" />
                <CardTitle className="font-heading text-2xl">Company Overview</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed mb-6">
                Canadian Crystal View's core focus is to deliver high-quality, safety-certified, and sustainable glass
                products to meet the needs of Ontario's fast-growing construction and renovation sectors. In addition to
                production, we provide a 5-Step Zero-Hassle Glass Recycling Service to replace non-compliant glass from
                older buildings, ensuring environmental responsibility while meeting updated building codes.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We aim to fill the supply gap in Ontario's growing construction sector while supporting Canada's
                environmental goals through sustainable glass production and recycling services.
              </p>
            </CardContent>
          </Card>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Target className="w-8 h-8 text-violet-600" />
                  <CardTitle className="font-heading text-xl">Mission Statement</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  To provide fast, reliable, and sustainable glass solutions that meet the high safety and energy
                  efficiency standards, while supporting Canada's green building goals.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Eye className="w-8 h-8 text-violet-600" />
                  <CardTitle className="font-heading text-xl">Vision Statement</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  To become Ontario's most trusted local glass processor, recognized for innovation, speed, and
                  environmental leadership.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Business Location */}
          <Card className="mb-12">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <MapPin className="w-8 h-8 text-violet-600" />
                <CardTitle className="font-heading text-2xl">Strategic Location</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed mb-4">
                The company's production facility will be strategically located in the Greater Toronto Area (GTA),
                providing easy access to major construction contractors and transportation routes across Ontario.
              </p>
              <p className="text-gray-600 leading-relaxed">
                This location ensures shorter delivery times and reduces logistics costs, strengthening our competitive
                advantage in serving both B2B and B2C customers across the province.
              </p>
            </CardContent>
          </Card>

          {/* Legal Structure */}
          <Card className="mb-12">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <Scale className="w-8 h-8 text-violet-600" />
                <CardTitle className="font-heading text-2xl">Legal Structure</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed mb-4">
                Canadian Crystal View operates as a Limited Liability Partnership (LLP) company in Ontario. This
                structure allows all four founding partners to share ownership, profits, and management responsibilities
                while limiting personal liability for the partnership's obligations.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Each partner assumes an officer role within the company—Chief Executive Officer (CEO), Chief Marketing
                Officer (CMO), Chief Financial Officer (CFO), and Chief Strategy & Compliance Officer (CSCO)—ensuring a
                balanced division of duties and expertise.
              </p>
            </CardContent>
          </Card>

          {/* Market Opportunity */}
          <Card>
            <CardHeader>
              <CardTitle className="font-heading text-2xl">Market Opportunity</CardTitle>
              <CardDescription>Addressing Ontario's growing construction sector needs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  With the federal Liberal government's strong commitment for affordable houses and green building
                  initiatives, the demand for high-quality, fast-delivery glass products is set to grow significantly in
                  the coming years.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                  <div className="text-center p-4 bg-violet-50 rounded-lg">
                    <div className="font-heading font-bold text-2xl text-violet-600 mb-2">$180B+</div>
                    <div className="text-sm text-gray-600">Planned Infrastructure Projects</div>
                  </div>
                  <div className="text-center p-4 bg-violet-50 rounded-lg">
                    <div className="font-heading font-bold text-2xl text-violet-600 mb-2">13%</div>
                    <div className="text-sm text-gray-600">Projected Employment Rise by 2034</div>
                  </div>
                  <div className="text-center p-4 bg-violet-50 rounded-lg">
                    <div className="font-heading font-bold text-2xl text-violet-600 mb-2">30-40%</div>
                    <div className="text-sm text-gray-600">Faster Lead Times vs Imports</div>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  Currently, the Canadian market mainly relies on large-scale imports from overseas, which face long
                  lead times, high costs, and limited customization flexibility. This creates a market gap for a local,
                  flexible supplier capable of serving both B2B and B2C customers with shorter turnaround times and
                  competitive pricing.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-violet-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="font-heading font-bold text-3xl mb-4">Ready to Partner with Us?</h2>
          <p className="text-xl text-violet-100 mb-8 max-w-2xl mx-auto">
            Join us in transforming Ontario's glass industry with sustainable, efficient solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-violet-600 hover:bg-gray-100 text-lg px-8">
              Request Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-violet-600 text-lg px-8 bg-transparent"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7ebf7aed7a3cebffbb9d4a9099c53716-7zadv4Qe2hy3BCJTDBqvoocjWhM83t.png"
                  alt="Canadian Crystal View Logo"
                  className="w-8 h-8"
                />
                <span className="font-heading font-bold text-xl">Canadian Crystal View</span>
              </div>
              <p className="text-gray-400 text-sm">
                Ontario's trusted glass processing startup, delivering sustainable architectural glass solutions.
              </p>
            </div>

            <div>
              <h4 className="font-heading font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Tempered Glass</li>
                <li>Laminated Glass</li>
                <li>Insulated Glass Units</li>
                <li>Low-E Glass</li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Glass Recycling</li>
                <li>Custom Solutions</li>
                <li>Fast Delivery</li>
                <li>Consultation</li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Greater Toronto Area, ON</li>
                <li>info@canadiancrystalview.ca</li>
                <li>1-800-CRYSTAL</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Canadian Crystal View. All rights reserved. | CSA Certified | Energy Star Compliant</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
