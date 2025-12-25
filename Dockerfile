# Production stage - serves pre-built files
# Build locally first with: npm run build
FROM nginx:alpine

# Copy pre-built static files
COPY build /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

