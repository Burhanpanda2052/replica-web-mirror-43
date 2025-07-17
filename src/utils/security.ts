import DOMPurify from 'dompurify';
import { z } from 'zod';

// Input sanitization utility
export const sanitizeInput = (input: string): string => {
  return DOMPurify.sanitize(input, { 
    ALLOWED_TAGS: [],
    ALLOWED_ATTR: []
  }).trim();
};

// HTML content sanitization (for rich text)
export const sanitizeHTML = (html: string): string => {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'u', 'ol', 'ul', 'li'],
    ALLOWED_ATTR: []
  });
};

// Validation schemas
export const quoteFormSchema = z.object({
  full_name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Name contains invalid characters'),
  
  phone_number: z.string()
    .min(10, 'Phone number must be at least 10 digits')
    .max(15, 'Phone number must be less than 15 digits')
    .regex(/^[\+]?[0-9\s\-\(\)]+$/, 'Invalid phone number format'),
  
  email: z.string()
    .email('Invalid email format')
    .max(255, 'Email must be less than 255 characters')
    .optional()
    .or(z.literal('')),
  
  project_type: z.string()
    .min(1, 'Project type is required')
    .max(100, 'Project type must be less than 100 characters'),
  
  project_location: z.string()
    .min(5, 'Project location must be at least 5 characters')
    .max(255, 'Project location must be less than 255 characters'),
  
  project_details: z.string()
    .min(10, 'Project details must be at least 10 characters')
    .max(2000, 'Project details must be less than 2000 characters')
});

export const deliveryRequestSchema = z.object({
  customer_name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Name contains invalid characters'),
  
  customer_phone: z.string()
    .min(10, 'Phone number must be at least 10 digits')
    .max(15, 'Phone number must be less than 15 digits')
    .regex(/^[\+]?[0-9\s\-\(\)]+$/, 'Invalid phone number format'),
  
  customer_email: z.string()
    .email('Invalid email format')
    .max(255, 'Email must be less than 255 characters')
    .optional()
    .or(z.literal('')),
  
  delivery_address: z.string()
    .min(10, 'Address must be at least 10 characters')
    .max(500, 'Address must be less than 500 characters'),
  
  delivery_area: z.string()
    .min(2, 'Area must be at least 2 characters')
    .max(100, 'Area must be less than 100 characters'),
  
  product_name: z.string()
    .min(1, 'Product name is required')
    .max(100, 'Product name must be less than 100 characters'),
  
  quantity: z.number()
    .min(1, 'Quantity must be at least 1')
    .max(10000, 'Quantity cannot exceed 10,000'),
  
  preferred_date: z.string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format'),
  
  preferred_time_slot: z.string()
    .min(1, 'Time slot is required')
    .max(50, 'Time slot must be less than 50 characters'),
  
  special_instructions: z.string()
    .max(1000, 'Special instructions must be less than 1000 characters')
    .optional()
});

// Rate limiting utility
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

export const checkRateLimit = (identifier: string, limit: number = 5, windowMs: number = 300000): boolean => {
  const now = Date.now();
  const record = rateLimitStore.get(identifier);
  
  if (!record || now > record.resetTime) {
    rateLimitStore.set(identifier, { count: 1, resetTime: now + windowMs });
    return true;
  }
  
  if (record.count >= limit) {
    return false;
  }
  
  record.count++;
  return true;
};

// XSS protection for display content
export const escapeHtml = (text: string): string => {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
};

// CSRF token utilities (for future implementation)
export const generateCSRFToken = (): string => {
  return crypto.randomUUID();
};

export const validateCSRFToken = (token: string, storedToken: string): boolean => {
  return token === storedToken;
};

export type QuoteFormData = z.infer<typeof quoteFormSchema>;
export type DeliveryRequestData = z.infer<typeof deliveryRequestSchema>;