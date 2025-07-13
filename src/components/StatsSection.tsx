
import { Card, CardContent } from "@/components/ui/card";
import { Building, Users, Award, Calendar } from "lucide-react";
import { useCounterAnimation } from "@/hooks/useCounterAnimation";

const StatsSection = () => {
  const projectsCounter = useCounterAnimation({ start: 0, end: 500, suffix: "+" });
  const customersCounter = useCounterAnimation({ start: 0, end: 1000, suffix: "+" });
  const productsCounter = useCounterAnimation({ start: 0, end: 50, suffix: "+" });
  const experienceCounter = useCounterAnimation({ start: 0, end: 9 });

  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-bold text-white">Building Zanzibar's Future Since 2015</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Nearly a decade of excellence in construction materials supply and services across the island.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-white/10 border-white/20 text-center stats-card-animation">
            <CardContent className="p-6 space-y-4">
              <Building className="h-12 w-12 mx-auto text-yellow" />
              <div className="space-y-2">
                <div className="text-4xl font-bold text-white">
                  <span ref={projectsCounter}>500+</span>
                </div>
                <div className="text-sm text-white/90">Projects Completed</div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 border-white/20 text-center stats-card-animation">
            <CardContent className="p-6 space-y-4">
              <Users className="h-12 w-12 mx-auto text-yellow" />
              <div className="space-y-2">
                <div className="text-4xl font-bold text-white">
                  <span ref={customersCounter}>1000+</span>
                </div>
                <div className="text-sm text-white/90">Satisfied Customers</div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 border-white/20 text-center stats-card-animation">
            <CardContent className="p-6 space-y-4">
              <Award className="h-12 w-12 mx-auto text-yellow" />
              <div className="space-y-2">
                <div className="text-4xl font-bold text-white">
                  <span ref={productsCounter}>50+</span>
                </div>
                <div className="text-sm text-white/90">Product Lines</div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 border-white/20 text-center stats-card-animation">
            <CardContent className="p-6 space-y-4">
              <Calendar className="h-12 w-12 mx-auto text-yellow" />
              <div className="space-y-2">
                <div className="text-4xl font-bold text-white">
                  <span ref={experienceCounter}>9</span>
                </div>
                <div className="text-sm text-white/90">Years Experience</div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-white">Our Commitment to Excellence</h3>
            <p className="text-lg text-white/90 leading-relaxed">
              From humble beginnings in 2015, Total Builders has grown to become Zanzibar's most trusted construction materials supplier. 
              We've built our reputation on quality products, reliable service, and unwavering commitment to our customers' success. 
              Every project we support contributes to building a stronger, more beautiful Zanzibar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
