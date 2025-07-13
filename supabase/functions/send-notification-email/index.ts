
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface QuoteEmailData {
  type: "quote";
  fullName: string;
  phoneNumber: string;
  email: string;
  projectType: string;
  projectLocation: string;
  projectDetails: string;
  timestamp: string;
}

interface DeliveryEmailData {
  type: "delivery";
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  deliveryAddress: string;
  deliveryArea: string;
  productName: string;
  quantity: number;
  preferredDate: string;
  preferredTimeSlot: string;
  specialInstructions: string;
  timestamp: string;
}

type EmailData = QuoteEmailData | DeliveryEmailData;

const generateQuoteEmailHTML = (data: QuoteEmailData) => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333; border-bottom: 2px solid #f59e0b; padding-bottom: 10px;">
        New Quote Request from ${data.fullName}
      </h2>
      
      <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr style="background-color: #f8f9fa;">
          <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold; width: 30%;">Full Name</td>
          <td style="padding: 12px; border: 1px solid #ddd;">${data.fullName}</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Phone Number</td>
          <td style="padding: 12px; border: 1px solid #ddd;">${data.phoneNumber}</td>
        </tr>
        <tr style="background-color: #f8f9fa;">
          <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Email Address</td>
          <td style="padding: 12px; border: 1px solid #ddd;">${data.email || 'Not provided'}</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Project Type</td>
          <td style="padding: 12px; border: 1px solid #ddd;">${data.projectType}</td>
        </tr>
        <tr style="background-color: #f8f9fa;">
          <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Project Location</td>
          <td style="padding: 12px; border: 1px solid #ddd;">${data.projectLocation}</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Project Details</td>
          <td style="padding: 12px; border: 1px solid #ddd;">${data.projectDetails}</td>
        </tr>
        <tr style="background-color: #f8f9fa;">
          <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Submitted On</td>
          <td style="padding: 12px; border: 1px solid #ddd;">${data.timestamp}</td>
        </tr>
      </table>
      
      <p style="color: #666; font-size: 14px; margin-top: 30px;">
        This quote request was submitted through the Total Builders website.
      </p>
    </div>
  `;
};

const generateDeliveryEmailHTML = (data: DeliveryEmailData) => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333; border-bottom: 2px solid #f59e0b; padding-bottom: 10px;">
        New Delivery Schedule Request from ${data.customerName}
      </h2>
      
      <h3 style="color: #555; margin-top: 25px;">Customer Information</h3>
      <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background-color: #f8f9fa;">
          <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold; width: 30%;">Customer Name</td>
          <td style="padding: 12px; border: 1px solid #ddd;">${data.customerName}</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Phone Number</td>
          <td style="padding: 12px; border: 1px solid #ddd;">${data.customerPhone}</td>
        </tr>
        <tr style="background-color: #f8f9fa;">
          <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Email Address</td>
          <td style="padding: 12px; border: 1px solid #ddd;">${data.customerEmail || 'Not provided'}</td>
        </tr>
      </table>

      <h3 style="color: #555; margin-top: 25px;">Delivery Details</h3>
      <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background-color: #f8f9fa;">
          <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold; width: 30%;">Delivery Address</td>
          <td style="padding: 12px; border: 1px solid #ddd;">${data.deliveryAddress}</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Delivery Area</td>
          <td style="padding: 12px; border: 1px solid #ddd;">${data.deliveryArea}</td>
        </tr>
        <tr style="background-color: #f8f9fa;">
          <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Product Name</td>
          <td style="padding: 12px; border: 1px solid #ddd;">${data.productName}</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Quantity</td>
          <td style="padding: 12px; border: 1px solid #ddd;">${data.quantity}</td>
        </tr>
        <tr style="background-color: #f8f9fa;">
          <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Preferred Date</td>
          <td style="padding: 12px; border: 1px solid #ddd;">${data.preferredDate}</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Preferred Time Slot</td>
          <td style="padding: 12px; border: 1px solid #ddd;">${data.preferredTimeSlot}</td>
        </tr>
        <tr style="background-color: #f8f9fa;">
          <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Special Instructions</td>
          <td style="padding: 12px; border: 1px solid #ddd;">${data.specialInstructions || 'None'}</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Submitted On</td>
          <td style="padding: 12px; border: 1px solid #ddd;">${data.timestamp}</td>
        </tr>
      </table>
      
      <p style="color: #666; font-size: 14px; margin-top: 30px;">
        This delivery request was submitted through the Total Builders website.
      </p>
    </div>
  `;
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response("Method not allowed", { 
      status: 405, 
      headers: corsHeaders 
    });
  }

  try {
    const emailData: EmailData = await req.json();
    console.log("Received email request:", emailData.type);

    let subject = "";
    let htmlContent = "";

    if (emailData.type === "quote") {
      subject = `New Quote Request from ${emailData.fullName}`;
      htmlContent = generateQuoteEmailHTML(emailData);
    } else if (emailData.type === "delivery") {
      subject = `New Delivery Schedule Request from ${emailData.customerName}`;
      htmlContent = generateDeliveryEmailHTML(emailData);
    } else {
      throw new Error("Invalid email type");
    }

    const emailResponse = await resend.emails.send({
      from: "Total Builders <noreply@totalbuilders.co.tz>",
      to: ["sales@totalbuilders.co.tz"],
      subject: subject,
      html: htmlContent,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        emailId: emailResponse.data?.id 
      }), 
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );

  } catch (error: any) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);
