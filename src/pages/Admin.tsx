import React, { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { User, Session } from "@supabase/supabase-js";
import { Eye, Package, Calendar, Users, BarChart3 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Quote {
  id: string;
  full_name: string;
  phone_number: string;
  email: string;
  project_type: string;
  project_location: string;
  project_details: string;
  status: string;
  created_at: string;
  updated_at: string;
}

interface DeliveryRequest {
  id: string;
  customer_name: string;
  customer_phone: string;
  customer_email: string;
  product_name: string;
  quantity: number;
  delivery_address: string;
  delivery_area: string;
  preferred_date: string;
  preferred_time_slot: string;
  special_instructions: string;
  status: string;
  created_at: string;
}

const Admin = () => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [deliveryRequests, setDeliveryRequests] = useState<DeliveryRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
      }
    );

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      checkAdminRole();
    }
  }, [user]);

  useEffect(() => {
    if (isAdmin) {
      fetchQuotes();
      fetchDeliveryRequests();
    }
  }, [isAdmin]);

  const checkAdminRole = async () => {
    try {
      const { data, error } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', user?.id)
        .eq('role', 'admin')
        .single();

      if (error && error.code !== 'PGRST116') {
        console.error('Error checking admin role:', error);
        return;
      }

      setIsAdmin(!!data);
      setLoading(false);
    } catch (error) {
      console.error('Error checking admin role:', error);
      setLoading(false);
    }
  };

  const fetchQuotes = async () => {
    try {
      const { data, error } = await supabase
        .from('quotes')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setQuotes(data || []);
    } catch (error) {
      console.error('Error fetching quotes:', error);
      toast({
        title: "Error",
        description: "Failed to fetch quotes",
        variant: "destructive",
      });
    }
  };

  const fetchDeliveryRequests = async () => {
    try {
      const { data, error } = await supabase
        .from('delivery_requests')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setDeliveryRequests(data || []);
    } catch (error) {
      console.error('Error fetching delivery requests:', error);
      toast({
        title: "Error",
        description: "Failed to fetch delivery requests",
        variant: "destructive",
      });
    }
  };

  const updateQuoteStatus = async (quoteId: string, newStatus: string) => {
    try {
      const { error } = await supabase
        .from('quotes')
        .update({ status: newStatus })
        .eq('id', quoteId);

      if (error) throw error;

      setQuotes(quotes.map(quote => 
        quote.id === quoteId ? { ...quote, status: newStatus } : quote
      ));

      toast({
        title: "Success",
        description: "Quote status updated successfully",
      });
    } catch (error) {
      console.error('Error updating quote status:', error);
      toast({
        title: "Error",
        description: "Failed to update quote status",
        variant: "destructive",
      });
    }
  };

  const updateDeliveryStatus = async (deliveryId: string, newStatus: string) => {
    try {
      const { error } = await supabase
        .from('delivery_requests')
        .update({ status: newStatus })
        .eq('id', deliveryId);

      if (error) throw error;

      setDeliveryRequests(deliveryRequests.map(delivery => 
        delivery.id === deliveryId ? { ...delivery, status: newStatus } : delivery
      ));

      toast({
        title: "Success",
        description: "Delivery status updated successfully",
      });
    } catch (error) {
      console.error('Error updating delivery status:', error);
      toast({
        title: "Error",
        description: "Failed to update delivery status",
        variant: "destructive",
      });
    }
  };

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case 'pending': return 'secondary';
      case 'approved': return 'default';
      case 'completed': return 'default';
      case 'rejected': return 'destructive';
      default: return 'secondary';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
          <p className="mt-4 text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Access Denied</h1>
          <p className="text-xl mb-8">Please log in to access the admin panel.</p>
          <Button onClick={() => window.location.href = '/auth'}>
            Go to Login
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Access Denied</h1>
          <p className="text-xl mb-8">You don't have admin privileges to access this page.</p>
          <Button onClick={() => window.location.href = '/'}>
            Go to Home
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-xl text-muted-foreground">Manage quotes and delivery requests</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Quotes</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{quotes.length}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Quotes</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {quotes.filter(q => q.status === 'pending').length}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Delivery Requests</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{deliveryRequests.length}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Deliveries</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {deliveryRequests.filter(d => d.status === 'pending').length}
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="quotes" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="quotes">Quote Submissions</TabsTrigger>
            <TabsTrigger value="deliveries">Delivery Requests</TabsTrigger>
          </TabsList>
          
          <TabsContent value="quotes" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Quote Submissions</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Project Type</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {quotes.map((quote) => (
                      <TableRow key={quote.id}>
                        <TableCell className="font-medium">{quote.full_name}</TableCell>
                        <TableCell>
                          <div className="text-sm">
                            <div>{quote.phone_number}</div>
                            {quote.email && <div className="text-muted-foreground">{quote.email}</div>}
                          </div>
                        </TableCell>
                        <TableCell>{quote.project_type}</TableCell>
                        <TableCell>{quote.project_location}</TableCell>
                        <TableCell>
                          <Badge variant={getStatusBadgeVariant(quote.status)}>
                            {quote.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{new Date(quote.created_at).toLocaleDateString()}</TableCell>
                        <TableCell>
                          <Select
                            value={quote.status}
                            onValueChange={(value) => updateQuoteStatus(quote.id, value)}
                          >
                            <SelectTrigger className="w-32">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="pending">Pending</SelectItem>
                              <SelectItem value="approved">Approved</SelectItem>
                              <SelectItem value="completed">Completed</SelectItem>
                              <SelectItem value="rejected">Rejected</SelectItem>
                            </SelectContent>
                          </Select>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="deliveries" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Delivery Requests</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Customer</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Product</TableHead>
                      <TableHead>Quantity</TableHead>
                      <TableHead>Delivery Address</TableHead>
                      <TableHead>Preferred Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {deliveryRequests.map((delivery) => (
                      <TableRow key={delivery.id}>
                        <TableCell className="font-medium">{delivery.customer_name}</TableCell>
                        <TableCell>
                          <div className="text-sm">
                            <div>{delivery.customer_phone}</div>
                            {delivery.customer_email && (
                              <div className="text-muted-foreground">{delivery.customer_email}</div>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>{delivery.product_name}</TableCell>
                        <TableCell>{delivery.quantity}</TableCell>
                        <TableCell>
                          <div className="text-sm">
                            <div>{delivery.delivery_address}</div>
                            <div className="text-muted-foreground">{delivery.delivery_area}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">
                            <div>{delivery.preferred_date}</div>
                            <div className="text-muted-foreground">{delivery.preferred_time_slot}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant={getStatusBadgeVariant(delivery.status)}>
                            {delivery.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Select
                            value={delivery.status}
                            onValueChange={(value) => updateDeliveryStatus(delivery.id, value)}
                          >
                            <SelectTrigger className="w-32">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="pending">Pending</SelectItem>
                              <SelectItem value="confirmed">Confirmed</SelectItem>
                              <SelectItem value="in_transit">In Transit</SelectItem>
                              <SelectItem value="delivered">Delivered</SelectItem>
                              <SelectItem value="cancelled">Cancelled</SelectItem>
                            </SelectContent>
                          </Select>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      
      <Footer />
    </div>
  );
};

export default Admin;