#!/bin/bash

# ============================================
# Véloclub Website - Server Deployment Script
# ============================================
# Dieses Script läuft AUF dem Server
# Voraussetzung: build/ Verzeichnis wurde bereits hochgeladen
# ============================================

set -e

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${BLUE}"
echo "================================================"
echo "   VÉLOCLUB WEBSITE - SERVER DEPLOYMENT"
echo "================================================"
echo -e "${NC}"
echo ""

# Check if build directory exists
if [ ! -d "build" ]; then
    echo -e "${RED}❌ Fehler: build/ Verzeichnis nicht gefunden!${NC}"
    echo ""
    echo "Bitte zuerst das build/ Verzeichnis hochladen:"
    echo "  Von deinem lokalen Rechner:"
    echo "  1. npm run build"
    echo "  2. scp -r build root@server:/root/veloclub-website/"
    echo ""
    exit 1
fi

echo -e "${GREEN}✅ build/ Verzeichnis gefunden${NC}"
echo ""

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo -e "${RED}❌ Docker ist nicht installiert!${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Docker gefunden${NC}"
echo ""

# Stop old containers
echo -e "${BLUE}🛑 Stoppe alte Container...${NC}"
docker compose down 2>/dev/null || true
echo ""

# Clean up old images (optional)
echo -e "${BLUE}🧹 Aufräumen...${NC}"
docker system prune -f > /dev/null 2>&1
echo ""

# Build new image
echo -e "${BLUE}🔨 Baue Docker Image (dauert ~10 Sekunden)...${NC}"
if docker compose build --quiet 2>/dev/null; then
    echo -e "${GREEN}✅ Image gebaut${NC}"
else
    echo -e "${YELLOW}⚠️  Building ohne quiet mode...${NC}"
    docker compose build
fi
echo ""

# Start container
echo -e "${BLUE}🚀 Starte Container...${NC}"
docker compose up -d
echo ""

# Wait a moment
sleep 2

# Check status
echo -e "${BLUE}📊 Container Status:${NC}"
docker compose ps
echo ""

# Health check
echo -e "${BLUE}🏥 Health Check...${NC}"
if curl -s http://localhost/health > /dev/null 2>&1; then
    echo -e "${GREEN}✅ Website läuft erfolgreich!${NC}"
else
    echo -e "${YELLOW}⚠️  Health Check fehlgeschlagen (Website läuft möglicherweise trotzdem)${NC}"
fi
echo ""

# Show logs
echo -e "${BLUE}📋 Letzte Logs:${NC}"
docker compose logs --tail=10
echo ""

echo -e "${GREEN}"
echo "================================================"
echo "           ✅ DEPLOYMENT ABGESCHLOSSEN!"
echo "================================================"
echo -e "${NC}"
echo ""
echo -e "${GREEN}🌐 Website sollte verfügbar sein unter:${NC}"
echo "   http://$(hostname -I | awk '{print $1}')"
echo "   oder: http://localhost"
echo ""
echo -e "${BLUE}💡 Nützliche Befehle:${NC}"
echo "   • Logs ansehen:     docker compose logs -f"
echo "   • Container stoppen: docker compose down"
echo "   • Neustart:         docker compose restart"
echo "   • Status:           docker compose ps"
echo ""

