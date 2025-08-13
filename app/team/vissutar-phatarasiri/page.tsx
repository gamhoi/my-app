import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Mail, Linkedin, Calculator, PieChart } from "lucide-react"
import Link from "next/link"
import { withBasePath } from "@/lib/utils"

export default function VissutarPhatarasiriPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <img
              src={withBasePath("/file.svg")}
              alt="Canadian Crystal View Logo"
              className="w-10 h-10"
            />
            <span className="font-heading font-bold text-xl text-gray-900">Canadian Crystal View</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-violet-600 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-violet-600 transition-colors">
              About
            </Link>
            <Link href="/#products" className="text-gray-600 hover:text-violet-600 transition-colors">
              Products
            </Link>
            <Link href="/#team" className="text-violet-600 font-medium">
              Team
            </Link>
            <Button className="bg-violet-600 hover:bg-violet-700">Contact Us</Button>
          </nav>
        </div>
      </header>

      {/* Back Navigation */}
      <div className="container mx-auto px-4 py-4">
        <Link
          href="/#team"
          className="inline-flex items-center text-violet-600 hover:text-violet-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Team
        </Link>
      </div>

      {/* Profile Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Photo and Basic Info */}
            <div className="lg:col-span-1">
              <Card className="text-center">
                <CardHeader>
                  {/* Replaced placeholder with professional photo */}
                  <div className="w-48 h-48 rounded-full mx-auto mb-6 overflow-hidden shadow-lg">
                    <img
                      src={withBasePath("/team/vissutar-phatarasiri-photo.png")}
                      alt="Vissutar Phatarasiri - Chief Financial Officer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="font-heading text-2xl">Vissutar Phatarasiri</CardTitle>
                  <CardDescription className="text-violet-600 font-medium text-lg">
                    Chief Financial Officer (CFO)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center space-x-4 mb-6">
                    <Button variant="outline" size="sm">
                      <Mail className="w-4 h-4 mr-2" />
                      Contact
                    </Button>
                    <Button variant="outline" size="sm">
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="secondary">Financial Planning</Badge>
                    <Badge variant="secondary">Tax Compliance</Badge>
                    <Badge variant="secondary">Budget Management</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Detailed Information */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading text-xl flex items-center">
                    <Calculator className="w-6 h-6 text-violet-600 mr-3" />
                    Role & Responsibilities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Manages budgeting, financial planning, tax compliance, and investment strategies.
                    Ensures accurate reporting and cost-effective use of company resources.
                  </p>
                  
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-heading text-xl flex items-center">
                    <PieChart className="w-6 h-6 text-violet-600 mr-3" />
                    Professional Experience
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-heading font-semibold text-gray-900 mb-2">Relevant experience</h4>
                      <p className="text-gray-600 leading-relaxed">
                        Founder of a private company in Thailand, with strong expertise in
                        financial management. Skilled in preparing and monitoring budgets, filing tax returns, and
                        navigating regulatory requirements. Having in-depth knowledge of small business financial
                        operations and compliance.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
