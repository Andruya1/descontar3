import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Calendar as CalendarIcon, CheckCircle, Tag, Zap, MapPin, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from '@/lib/utils';
import { format, addDays } from 'date-fns';
import { es } from 'date-fns/locale';
import { useToast } from '@/components/ui/use-toast';

const paymentLinks = {
  "Escape Duo": "https://mpago.li/2wooDMw",
  "Full Week Love": "https://mpago.li/22LhPk9",
  "Team Trip": "https://mpago.li/1MCEKKQ",
  "VIP Solo Pass": "https://mpago.li/1hpxQ2Z",
};

const ActivationPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const { voucher } = location.state || {};

  const [fullName, setFullName] = useState('');
  const [contact, setContact] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const cities = [
    "San Martín de los Andes",
    "Bariloche",
    "Mendoza",
    "Salta"
  ];

  useEffect(() => {
    if (startDate && voucher) {
      const durationString = voucher.features.find(f => f.toLowerCase().includes('duración:'));
      let durationDays = 365;
      if (durationString) {
        const match = durationString.match(/(\d+)\s*días/);
        if (match) {
          durationDays = parseInt(match[1], 10);
        }
      }
      const newEndDate = addDays(startDate, durationDays);
      setEndDate(format(newEndDate, 'PPP', { locale: es }));
    } else {
      setEndDate('');
    }
  }, [startDate, voucher]);

  useEffect(() => {
    const validateForm = () => {
      return fullName.trim() !== '' && contact.trim() !== '' && selectedCity !== '' && startDate !== null;
    };
    setIsFormValid(validateForm());
  }, [fullName, contact, selectedCity, startDate]);

  const handleActivation = () => {
    if (!isFormValid) {
      toast({
        variant: "destructive",
        title: "Formulario incompleto",
        description: "Por favor, completa todos los campos para continuar.",
      });
      return;
    }

    const paymentLink = paymentLinks[voucher.title];
    if (paymentLink) {
      // Store data in localStorage for this demo
      const activationData = {
        fullName,
        contact,
        city: selectedCity,
        startDate: format(startDate, 'yyyy-MM-dd'),
        endDate: endDate,
        cost: voucher.price,
        plan: voucher.title,
      };
      localStorage.setItem('pendingActivation', JSON.stringify(activationData));
      
      // Navigate to thank you page in the current tab
      navigate('/gracias');
      
      // Open payment link in a new tab
      window.open(paymentLink, '_blank', 'noopener,noreferrer');

    } else {
      toast({
        variant: "destructive",
        title: "Error de pago",
        description: "No se encontró un link de pago para este pase. Por favor, contacta a soporte.",
      });
    }
  };

  if (!voucher) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-2xl font-bold mb-4">Oops, no has seleccionado un plan.</h1>
        <p className="text-gray-600 mb-8">Por favor, vuelve a la página de descuentos y elige un pase para continuar.</p>
        <Button asChild>
          <Link to="/descuentos">Ver Pases</Link>
        </Button>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Activación de Pase - DescontAR</title>
        <meta name="description" content="Activa tu pase DescontAR para empezar a disfrutar de descuentos exclusivos en toda Argentina." />
      </Helmet>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden md:flex"
        >
          <div className="md:w-1/2 p-8 md:p-12 space-y-6">
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                ¡Casi listo! Activa tu pase
              </h1>
              <p className="text-gray-600 mt-2">Completa tus datos para continuar al pago.</p>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="font-semibold text-gray-700">Nombre Completo</Label>
                <Input id="fullName" placeholder="Ej: Lionel Messi" className="bg-gray-50" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact" className="font-semibold text-gray-700">WhatsApp</Label>
                <Input id="contact" placeholder="Ej: 1122334455 (sin 0 ni 15)" className="bg-gray-50" value={contact} onChange={(e) => setContact(e.target.value)} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city" className="font-semibold text-gray-700">Ciudad de Uso</Label>
                <Select onValueChange={setSelectedCity} value={selectedCity}>
                  <SelectTrigger className="w-full bg-gray-50">
                     <MapPin className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="Selecciona una ciudad" />
                  </SelectTrigger>
                  <SelectContent>
                    {cities.map(city => (
                      <SelectItem key={city} value={city}>{city}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="startDate" className="font-semibold text-gray-700">Fecha de Inicio del Plan</Label>
                 <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal bg-gray-50",
                        !startDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {startDate ? format(startDate, "PPP", { locale: es }) : <span>Selecciona una fecha</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={startDate}
                      onSelect={setStartDate}
                      initialFocus
                      locale={es}
                      disabled={(date) => date < new Date(new Date().setDate(new Date().getDate() - 1))}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <div className="space-y-4 pt-4">
               <div className="flex justify-between items-center text-gray-600">
                <span className="font-medium">Fecha de Caducidad:</span>
                <span className="font-bold text-gray-800">{endDate || 'N/A'}</span>
              </div>
              <div className="flex justify-between items-center text-gray-600">
                <span className="font-medium">Costo Total:</span>
                <span className="font-bold text-2xl text-amber-500">{voucher.price}</span>
              </div>
            </div>
            
            <div>
              <Button size="lg" className="w-full bg-amber-500 hover:bg-amber-600 text-white text-base font-bold disabled:cursor-not-allowed" onClick={handleActivation} disabled={!isFormValid}>
                <CreditCard className="mr-2 h-5 w-5"/>
                Activar y Pagar
              </Button>
              <p className="text-xs text-gray-500 mt-3 text-center">
                Al hacer click, serás redirigido a Mercado Pago para completar la compra segura y aceptas nuestros <Link to="/terminos" className="underline hover:text-amber-600">Términos y Condiciones</Link>.
              </p>
            </div>

          </div>
          <div className={`hidden md:flex md:w-1/2 bg-gradient-to-br ${voucher.color} p-12 flex-col justify-center text-white space-y-6`}>
             <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
                className="bg-white/20 rounded-xl p-4 self-center"
             >
                <Tag className="w-24 h-24 text-white" strokeWidth={1}/>
             </motion.div>
             <div className="text-center space-y-4">
                 <h2 className="text-3xl font-bold">Estás comprando: {voucher.title}</h2>
                 <p className="text-purple-200 text-lg">
                    {voucher.description}
                 </p>
                 <div className="pt-4 flex flex-col space-y-3 text-left bg-black/10 p-4 rounded-lg">
                    {voucher.features.map((feature, index) => (
                       <div key={index} className="flex items-center">
                          <CheckCircle className="w-5 h-5 mr-3 text-green-300 flex-shrink-0"/>
                          <span>{feature}</span>
                       </div>
                    ))}
                 </div>
             </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ActivationPage;