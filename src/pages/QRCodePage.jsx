import React from 'react';
import { useLocation, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import QRCode from 'qrcode.react';
import { CheckCircle, Download, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

const QRCodePage = () => {
  const location = useLocation();
  const qrData = location.state?.qrData;

  if (!qrData) {
    return <Navigate to="/activacion" replace />;
  }

  const downloadQRCode = () => {
    const canvas = document.getElementById('qr-code-canvas');
    if (canvas) {
      const pngUrl = canvas
        .toDataURL('image/png')
        .replace('image/png', 'image/octet-stream');
      let downloadLink = document.createElement('a');
      downloadLink.href = pngUrl;
      downloadLink.download = 'DescontAR-QR.png';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };

  return (
    <>
      <Helmet>
        <title>¡Activación Exitosa! - DescontAR</title>
        <meta name="description" content="Tu código QR de DescontAR está listo. ¡Muéstralo en los comercios adheridos y disfruta!" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50/30 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-full max-w-md bg-white rounded-2xl shadow-luxury text-center p-8 md:p-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.2 }}
          >
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          </motion.div>
          <h1 className="text-3xl font-bold text-gray-900">¡Activación Exitosa!</h1>
          <p className="text-gray-600 mt-2 mb-6">Tu pase digital está listo para usar.</p>

          <div className="p-6 bg-gray-100 rounded-xl inline-block border border-gray-200">
            <QRCode
              id="qr-code-canvas"
              value={qrData}
              size={220}
              level={"H"}
              includeMargin={true}
              bgColor="#ffffff"
              fgColor="#0D1a2e"
            />
          </div>

          <p className="text-sm text-gray-500 mt-6 mb-8">
            Muestra este código QR en los comercios adheridos para aplicar tus descuentos.
          </p>

          <div className="space-y-3">
            <Button size="lg" className="w-full btn-gold text-base" onClick={downloadQRCode}>
              <Download className="mr-2 h-5 w-5" />
              Descargar QR
            </Button>
            <Button size="lg" variant="outline" className="w-full" asChild>
              <Link to="/">
                <Home className="mr-2 h-5 w-5" />
                Volver al Inicio
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default QRCodePage;