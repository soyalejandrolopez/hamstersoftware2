import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling, withComponentInputBinding, withRouterConfig } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';
import { 
  LucideAngularModule, 
  Menu, 
  X, 
  ChevronRight,
  ChevronDown, 
  Smartphone, 
  Globe, 
  Database, 
  ShieldCheck,
  Code, 
  Server, 
  Cloud, 
  Cpu, 
  BrainCircuit, 
  TerminalSquare, 
  BarChart, 
  Bot, 
  Activity, 
  Layers, 
  Lock, 
  ArrowRight,
  Check,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Radio,
  Stethoscope,
  Ticket,
  Scissors,
  Sparkles,
  GraduationCap,
  Star,
  MessageSquare,
  Zap,
  Shield,
  Workflow,
  Monitor,
  Boxes
} from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimationsAsync(),
    provideRouter(
      routes,
      withComponentInputBinding(),
      withRouterConfig({ onSameUrlNavigation: 'reload' }),
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
        anchorScrolling: 'enabled'
      })
    ),
    importProvidersFrom(LucideAngularModule.pick({
      Menu, X, ChevronRight, ChevronDown, Smartphone, Globe, Database, ShieldCheck,
      Code, Server, Cloud, Cpu, BrainCircuit, TerminalSquare, BarChart, Bot, Activity, Layers, Lock, ArrowRight,
      Check, Phone, Mail, MapPin, ExternalLink, Radio, Stethoscope, Ticket, Scissors, Sparkles, GraduationCap, Star,
      MessageSquare, Zap, Shield, Workflow, Monitor, Boxes
    }))
  ],
};
