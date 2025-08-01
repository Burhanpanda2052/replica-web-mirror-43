
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-bold text-foreground">Visit Our Office & Contact Us</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find us in the heart of Stone Town or get in touch through any of our contact channels.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact information */}
          <div className="space-y-6">
            <Card className="bg-gray-50 border-0">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Office Location</h3>
                    <p className="text-muted-foreground">
                      Taveta<br />
                      Zanzibar, Tanzania<br />
                      Near Creek Road Junction
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-50 border-0">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Phone Numbers</h3>
                    <p className="text-muted-foreground">
                      Sales: +255 769 391 802<br />
                      Emergency: +255 555 000 111
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-50 border-0">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Email Addresses</h3>
                    <p className="text-muted-foreground">
                      General: info@totalbuilders.co.tz<br />
                      Sales: sales@totalbuilders.co.tz<br />
                      Support: support@totalbuilders.co.tz
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-50 border-0">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 8:00 AM - 4:00 PM<br />
                      Sunday: Closed<br />
                      <span className="text-primary font-medium">Emergency services available 24/7</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Map and actions */}
          <div className="space-y-6">
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-semibold mb-4">Ready to Start Your Project?</h3>
                <p className="mb-6 opacity-90">
                  Visit our showroom to see our materials firsthand or contact us for immediate assistance.
                </p>
                <div className="space-y-3">
                  <Button className="w-full bg-yellow text-yellow-foreground hover:bg-yellow/90">
                    <Navigation className="mr-2 h-4 w-4" />
                    Get Directions
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Google Maps Embed */}
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <iframe
                  src="https://maps.google.com/maps?q=-6.294675,39.281281&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="256"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="TOTAL BUILDERS Location - Taveta, Zanzibar"
                ></iframe>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center bg-gradient-to-br from-orange-400 to-orange-600 text-white">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold">30min</div>
                  <div className="text-sm opacity-90">From Airport</div>
                </CardContent>
              </Card>
              <Card className="text-center bg-blue text-blue-foreground">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold">3KM</div>
                  <div className="text-sm opacity-90">From Darajani</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
