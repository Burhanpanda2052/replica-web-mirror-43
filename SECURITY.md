# Security Documentation

## Overview
This document outlines the security measures implemented in the TotalBuilders application and provides guidance for maintaining security best practices.

## Implemented Security Measures

### Database Security

#### Row Level Security (RLS)
- **All tables have RLS enabled** with proper policies
- **Quote submissions**: Public can submit, only admins can view/update
- **User roles**: Users can view their own roles, admins manage all roles
- **Delivery requests**: Public can submit, admins can view/update
- **Audit logs**: Only admins can view audit trails

#### Access Control
- **Role-based access control** using `app_role` enum (admin, user)
- **Privilege escalation prevention**: Users cannot modify their own roles
- **Secure role management functions**: `assign_admin_role()` and `remove_user_role()`
- **Admin self-protection**: Admins cannot remove their own admin privileges

#### Database Functions Security
- **Security definer functions** with proper `search_path` settings
- **Input validation** at database level
- **Audit logging** for all sensitive operations

### Application Security

#### Input Validation & Sanitization
- **Zod schemas** for comprehensive form validation
- **DOMPurify integration** for XSS prevention
- **Input sanitization** on all user inputs
- **Server-side validation** in addition to client-side

#### Rate Limiting
- **Form submission rate limiting**: 3 requests per 5 minutes per user
- **Client-side rate limiting** to prevent abuse

#### XSS Protection
- **Input sanitization** using DOMPurify
- **Output encoding** for all user-generated content
- **Content Security Policy** ready implementation

### Authentication Security
- **Supabase Auth integration** with proper session management
- **Secure token storage** using localStorage with proper cleanup
- **Session persistence** with automatic token refresh

## Security Configurations Required

### Supabase Dashboard Settings

#### 1. Authentication Settings
Navigate to: **Authentication > Settings**

- **Enable email confirmation**: ✅ Required
- **Disable sign-ups**: Consider enabling for production
- **Password strength**: Enable strong password requirements

#### 2. OTP Settings
Navigate to: **Authentication > Settings > OTP**

- **OTP expiry time**: Set to 10 minutes (currently exceeds recommended threshold)
- **OTP length**: 6 digits minimum

#### 3. Password Security
Navigate to: **Authentication > Settings > Password**

- **Enable leaked password protection**: ✅ Required
- **Minimum password length**: 8 characters
- **Require special characters**: ✅ Recommended

#### 4. URL Configuration
Navigate to: **Authentication > URL Configuration**

- **Site URL**: Set to your production domain
- **Redirect URLs**: Add all authorized domains

### Environment Security

#### Production Checklist
- [ ] Enable leaked password protection in Supabase
- [ ] Configure OTP expiry to 10 minutes or less
- [ ] Set up proper domain verification
- [ ] Enable email confirmation for new users
- [ ] Configure rate limiting at CDN/proxy level
- [ ] Set up monitoring and alerting
- [ ] Regular security audits

## Security Monitoring

### Audit Logging
The application includes comprehensive audit logging:
- **User role changes** are logged with timestamps
- **Quote submissions** are tracked
- **Admin actions** are recorded
- **Database changes** are audited

### Monitoring Queries
```sql
-- View recent admin actions
SELECT * FROM public.audit_log 
WHERE table_name = 'user_roles' 
ORDER BY timestamp DESC LIMIT 100;

-- Check for suspicious quote activity
SELECT COUNT(*) as quote_count, 
       extract(hour from created_at) as hour 
FROM public.quotes 
WHERE created_at > now() - interval '24 hours' 
GROUP BY extract(hour from created_at) 
ORDER BY quote_count DESC;
```

## Incident Response

### Security Breach Response
1. **Immediate Actions**:
   - Revoke all user sessions
   - Check audit logs for unauthorized access
   - Update all API keys and secrets

2. **Investigation**:
   - Review database audit logs
   - Check application logs for anomalies
   - Analyze user behavior patterns

3. **Recovery**:
   - Patch security vulnerabilities
   - Reset compromised accounts
   - Notify affected users if required

### Contact Information
- **Security Team**: admin@totalbuilders.co.tz
- **Emergency Contact**: +255 XXX XXX XXX

## Security Best Practices

### For Developers
1. **Always validate input** on both client and server side
2. **Use parameterized queries** - never concatenate SQL
3. **Implement proper error handling** without exposing sensitive data
4. **Keep dependencies updated** and monitor for vulnerabilities
5. **Use HTTPS everywhere** - no exceptions
6. **Follow principle of least privilege** for all access controls

### For Administrators
1. **Regular security audits** - quarterly reviews recommended
2. **Monitor audit logs** for suspicious activity
3. **Keep Supabase project updated** with latest security patches
4. **Use strong passwords** and 2FA for admin accounts
5. **Regular backup verification** and disaster recovery testing

## Compliance & Privacy

### Data Protection
- **Data minimization**: Only collect necessary information
- **Data encryption**: All data encrypted in transit and at rest
- **Data retention**: Implement proper data lifecycle management
- **User rights**: Provide data access and deletion capabilities

### GDPR Compliance (if applicable)
- **Consent management**: Clear opt-in for data processing
- **Right to erasure**: Implement data deletion procedures
- **Data portability**: Provide data export functionality
- **Privacy by design**: Security measures built into the application

## Security Testing

### Regular Security Tests
1. **SQL Injection Testing**: Test all input fields
2. **XSS Testing**: Verify all output is properly escaped
3. **Authentication Testing**: Verify session management
4. **Authorization Testing**: Test role-based access controls
5. **Rate Limiting Testing**: Verify rate limiting effectiveness

### Penetration Testing
- **Schedule annual penetration testing** by third-party security firm
- **Test all critical functionality** including admin features
- **Document and remediate** all findings promptly

## Updates and Maintenance

This security documentation should be reviewed and updated:
- **Monthly**: Review and update security configurations
- **Quarterly**: Full security audit and testing
- **Annually**: Complete security assessment and penetration testing
- **As needed**: After any security incidents or major changes

---

*Last updated: July 2025*
*Next review date: October 2025*