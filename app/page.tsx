import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { withBasePath } from "@/lib/utils"

const Page = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src={withBasePath("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7ebf7aed7a3cebffbb9d4a9099c53716-7zadv4Qe2hy3BCJTDBqvoocjWhM83t.png")}
                alt="Canadian Crystal View Logo"
                className="w-10 h-10"
              />
              <span className="font-heading font-bold text-xl text-gray-900">Canadian Crystal View</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-violet-600 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-violet-600 transition-colors">
                About
              </Link>
              <Link href="#products" className="text-gray-700 hover:text-violet-600 transition-colors">
                Products
              </Link>
              <Link href="#team" className="text-gray-700 hover:text-violet-600 transition-colors">
                Team
              </Link>
              <Button className="bg-violet-600 hover:bg-violet-700">Contact Us</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-violet-50 to-white py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="font-heading font-bold text-4xl md:text-6xl text-gray-900 mb-6">
            Ontario's Premier Glass Processing Startup
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Energy-efficient and safety-certified architectural glass solutions for Ontario's growing construction
            sector. Fast delivery, sustainable recycling, and compliance with CSA and Energy Star standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-violet-600 hover:bg-violet-700">
              Get Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-violet-600 text-violet-600 hover:bg-violet-50 bg-transparent"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl text-gray-900 mb-4">Our Glass Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              High-quality, energy-efficient architectural glass solutions tailored for commercial and residential
              applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Tempered Glass",
                description:
                  "High-strength safety glass that shatters into small granular pieces, ideal for windows, doors, and building facades.",
                image: withBasePath("/tempered-glass-architecture.png"),
              },
              {
                title: "Laminated Glass",
                description:
                  "Enhanced safety glass that holds together upon impact, widely used in skylights, railings, and security applications.",
                image: withBasePath("/laminated-glass-security.png"),
              },
              {
                title: "Insulated Glass Units",
                description:
                  "Multi-pane glass with air or gas-filled spaces for superior thermal insulation and sound reduction.",
                image: withBasePath("/placeholder.png"),
              },
              {
                title: "Low-E Glass",
                description:
                  "Coated glass that minimizes infrared and UV light penetration while maximizing visible light for energy efficiency.",
                image: withBasePath("/low-e-glass-coating.png"),
              },
            ].map((product, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
                    <img
                      src={product.image as string}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="font-heading text-lg">{product.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{product.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl text-gray-900 mb-4">Why Choose Canadian Crystal View</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine speed, customization, and sustainability to meet both immediate housing needs and Canada's
              long-term green building objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Fast Delivery",
                description: "Localized production enables up to 40% shorter lead times than imported alternatives.",
                icon: "🚚",
              },
              {
                title: "Customization",
                description: "Flexible order sizes, shapes, and specifications to meet unique project requirements.",
                icon: "⚙️",
              },
              {
                title: "5-Step Recycling",
                description: "Zero-hassle recycling service for replacing non-compliant glass in older buildings.",
                icon: "♻️",
              },
              {
                title: "CSA Certified",
                description: "Products meet or exceed CSA and Energy Star standards for safety and energy efficiency.",
                icon: "✅",
              },
            ].map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <CardTitle className="font-heading text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Four founding partners bringing complementary expertise in glass processing, marketing, finance, and
              operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Meili Tang",
                role: "Chief Executive Officer",
                expertise: "Business Operations & Glass Industry",
                background: "Family glass retail chain in China, extensive business management experience",
                slug: "meili-tang",
                photo: withBasePath("/meili-tang-photo.jpg"),
              },
              {
                name: "Xueyin Ma",
                role: "Chief Marketing Officer",
                expertise: "Marketing & International Trade",
                background: "Former marketing manager in multinational industrial products enterprise",
                slug: "xueyin-ma",
                photo: withBasePath("/xueyin-ma-photo.jpg"),
              },
              {
                name: "Vissutar Phatarasiri",
                role: "Chief Financial Officer",
                expertise: "Financial Management & Compliance",
                background: "Private company founder with expertise in budgeting and tax compliance",
                slug: "vissutar-phatarasiri",
                photo: withBasePath("/vissutar-phatarasiri-photo.jpg"),
              },
              {
                name: "Andrea Citlalli Martinez Salazar",
                role: "Chief Strategy & Compliance Officer",
                expertise: "Supply Chain & Operations",
                background: "Building materials industry expert with corporate management experience",
                slug: "andrea-martinez-salazar",
                photo: withBasePath("/andrea-martinez-salazar-photo.jpg"),
              },
            ].map((member) => (
              <Link key={member.name} href={`/team/${member.slug}`}>
                <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader>
                    <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden group-hover:shadow-md transition-shadow">
                      <img
                        src={member.photo as string}
                        alt={`${member.name} - ${member.role}`}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <CardTitle className="font-heading text-lg group-hover:text-violet-600 transition-colors">
                      {member.name}
                    </CardTitle>
                    <CardDescription className="text-violet-600 font-medium">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-2 font-medium">{member.expertise}</p>
                    <p className="text-xs text-gray-500">{member.background}</p>
                    <p className="text-xs text-violet-600 mt-3 group-hover:underline">Learn More →</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src={withBasePath("/file.svg")}
                  alt="Canadian Crystal View Logo"
                  className="w-8 h-8"
                />
                <span className="font-heading font-bold text-lg">Canadian Crystal View</span>
              </div>
              <p className="text-gray-400 text-sm">
                Ontario's premier glass processing startup focused on energy-efficient and safety-certified
                architectural glass.
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
                <li>Fast Delivery</li>
                <li>Custom Solutions</li>
                <li>Glass Recycling</li>
                <li>CSA Certification</li>
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
            <p>&copy; 2024 Canadian Crystal View. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Page
