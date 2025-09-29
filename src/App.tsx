import React from 'react';
import { Heart, Video, Users, Award, Phone, Camera, Edit, Star } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-gray-900">Vidzero</h1>
          </div>
          <div className="text-sm text-gray-600 font-medium">Sponsorship Prospectus 2025</div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Partner With Us to Transform
            <span className="block" style={{color: '#5271ff'}}>Charity Donor Engagement</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Help charities create personalized thank you videos that increase donor retention 
            while showcasing your brand's commitment to social impact
          </p>
        </div>

        {/* Problem & Solution */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="h-8 w-8 text-red-500" />
              <h3 className="text-2xl font-bold text-gray-900">The Challenge</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Charities struggle to maintain donor engagement and retention. Generic thank you 
              messages fail to show donors the real impact of their contributions, leading to 
              a lack of engagement from donors and poor understanding of the impact of their donations.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <Camera className="h-8 w-8" style={{color: '#5271ff'}} />
              <h3 className="text-2xl font-bold text-gray-900">Our Solution</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Vidzero trains charity teams to create personalized thank you videos at scale, 
              showing donors exactly how their contributions make a difference through 
              compelling visual storytelling.
            </p>
          </div>
        </div>

        {/* What We Provide */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Complete Training Package ($3,000 + GST per charity)
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="p-4 rounded-xl w-fit mx-auto mb-4" style={{backgroundColor: '#5271ff20'}}>
                <Edit className="h-8 w-8" style={{color: '#5271ff'}} />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Pre-Production</h4>
              <p className="text-sm text-gray-600">Scripts, storyboards & planning templates</p>
            </div>
            <div className="text-center">
              <div className="p-4 rounded-xl w-fit mx-auto mb-4" style={{backgroundColor: '#5271ff20'}}>
                <Users className="h-8 w-8" style={{color: '#5271ff'}} />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">On-Site Training</h4>
              <p className="text-sm text-gray-600">Professional trainer visits charity office</p>
            </div>
            <div className="text-center">
              <div className="p-4 rounded-xl w-fit mx-auto mb-4" style={{backgroundColor: '#5271ff20'}}>
                <Camera className="h-8 w-8" style={{color: '#5271ff'}} />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Filming Techniques</h4>
              <p className="text-sm text-gray-600">Location scouting & filming best practices</p>
            </div>
            <div className="text-center">
              <div className="p-4 rounded-xl w-fit mx-auto mb-4" style={{backgroundColor: '#5271ff20'}}>
                <Video className="h-8 w-8" style={{color: '#5271ff'}} />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Basic Editing</h4>
              <p className="text-sm text-gray-600">Simple editing skills for professional results</p>
            </div>
          </div>
        </div>

        {/* Sponsorship Packages */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Sponsorship Packages
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Bronze */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-amber-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-amber-500 text-white px-4 py-1 text-sm font-bold rounded-bl-lg">
                BRONZE
              </div>
              <div className="mb-6">
                <div className="text-4xl font-bold text-gray-900 mb-2">$10,000</div>
                <div className="text-sm text-gray-600">+ GST</div>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="bg-amber-100 p-1 rounded-full mt-1">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Training for <strong>3 charities</strong></span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-amber-100 p-1 rounded-full mt-1">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Your logo in the <strong>first 50 videos</strong> created per charity</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-amber-100 p-1 rounded-full mt-1">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Choose your preferred charities</span>
                </div>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg">
                <div className="text-sm text-amber-800 font-semibold">ROI Impact</div>
                <div className="text-xs text-amber-700">Ongoing brand visibility in donor communications</div>
              </div>
            </div>

            {/* Silver */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-300 relative overflow-hidden transform scale-105">
              <div className="absolute top-0 right-0 bg-gray-500 text-white px-4 py-1 text-sm font-bold rounded-bl-lg">
                SILVER
              </div>
              <div className="mb-6">
                <div className="text-4xl font-bold text-gray-900 mb-2">$25,000</div>
                <div className="text-sm text-gray-600">+ GST</div>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="bg-gray-200 p-1 rounded-full mt-1">
                    <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Training for <strong>6 charities</strong></span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-gray-200 p-1 rounded-full mt-1">
                    <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Your logo in the <strong>first 100 videos</strong> created per charity</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-gray-200 p-1 rounded-full mt-1">
                    <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-700"><strong>3 open workshops</strong> "How to Film on Your Phone"</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-gray-200 p-1 rounded-full mt-1">
                    <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Up to <strong>30 attendees</strong> per workshop</span>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-sm text-gray-800 font-semibold">ROI Impact</div>
                <div className="text-xs text-gray-700">Extended reach through workshops + video visibility</div>
              </div>
            </div>

            {/* Gold */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-yellow-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-yellow-500 text-white px-4 py-1 text-sm font-bold rounded-bl-lg">
                GOLD
              </div>
              <div className="mb-6">
                <div className="text-4xl font-bold text-gray-900 mb-2">$50,000</div>
                <div className="text-sm text-gray-600">+ GST</div>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="bg-yellow-100 p-1 rounded-full mt-1">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Training for <strong>10 charities</strong></span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-yellow-100 p-1 rounded-full mt-1">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Your logo in the <strong>first 100 videos</strong> created per charity</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-yellow-100 p-1 rounded-full mt-1">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-700"><strong>3 open workshops</strong> "How to Film on Your Phone"</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-yellow-100 p-1 rounded-full mt-1">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-700"><strong>3 brand videos</strong> for chosen charities</span>
                </div>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <div className="text-sm text-yellow-800 font-semibold">ROI Impact</div>
                <div className="text-xs text-yellow-700">Maximum exposure + professional brand videos</div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Why Partner With Vidzero?
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Award className="h-5 w-5" style={{color: '#5271ff'}} />
                For Your Brand
              </h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <Star className="h-4 w-4 mt-1 flex-shrink-0" style={{color: '#5271ff'}} />
                  <span>Authentic CSR visibility in genuine charity communications</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="h-4 w-4 mt-1 flex-shrink-0" style={{color: '#5271ff'}} />
                  <span>Logo placement in videos seen by engaged donor audiences</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="h-4 w-4 mt-1 flex-shrink-0" style={{color: '#5271ff'}} />
                  <span>Association with innovation in nonprofit sector</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="h-4 w-4 mt-1 flex-shrink-0" style={{color: '#5271ff'}} />
                  <span>Measurable social impact reporting opportunities</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Heart className="h-5 w-5 text-red-500" />
                For Charities
              </h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <Star className="h-4 w-4 text-red-500 mt-1 flex-shrink-0" />
                  <span>Access to professional video training</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="h-4 w-4 text-red-500 mt-1 flex-shrink-0" />
                  <span>Increased donor retention through personalized communication</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="h-4 w-4 text-red-500 mt-1 flex-shrink-0" />
                  <span>Scalable solution for ongoing donor engagement</span>
                </li>
                <li className="flex items-start gap-2">
                  <Star className="h-4 w-4 text-red-500 mt-1 flex-shrink-0" />
                  <span>Enhanced storytelling capabilities for fundraising</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-2xl p-8 text-center text-white" style={{background: `linear-gradient(135deg, #130943 0%, #5271ff 100%)`}}>
          <h3 className="text-2xl font-bold mb-4">Ready to Make an Impact?</h3>
          <p className="text-lg mb-6 opacity-90">
            Join us in revolutionizing how charities connect with their donors while showcasing your commitment to social good.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="bg-white px-6 py-3 rounded-lg font-semibold" style={{color: '#130943'}}>
              adrian@vidzero.com.au
            </div>
            <div className="bg-white px-6 py-3 rounded-lg font-semibold" style={{color: '#130943'}}>
              0408 887 232
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;