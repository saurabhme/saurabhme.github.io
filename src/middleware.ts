import { defineMiddleware } from 'astro:middleware';
import { getSession } from 'auth-astro/server';

export const onRequest = defineMiddleware(async (context, next) => {
  const { url, request } = context;
  
  // Protect all routes under /apps
  if (url.pathname.startsWith('/apps')) {
    const session = await getSession(request);
    
    // If no active session, redirect to the login page
    if (!session) {
      return context.redirect(`/login?callbackUrl=${encodeURIComponent(url.pathname)}`);
    }
    
    // Pass session data to the protected route (optional)
    context.locals.session = session;
  }
  
  return next();
});
