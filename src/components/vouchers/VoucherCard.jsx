import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle, ShoppingCart, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';

const VoucherCard = (props) => {
  const { title, description, price, features, idealFor, color, buttonColor, isFeatured } = props;
  const navigate = useNavigate();

  const cardVariants = {
    rest: { scale: 1, boxShadow: "0px 10px 30px -5px rgba(0, 0, 0, 0.1)" },
    hover: { scale: 1.03, boxShadow: "0px 20px 40px -10px rgba(0, 0, 0, 0.2)" }
  };

  const handlePurchase = () => {
    navigate('/activacion', { state: { voucher: props } });
  };
  
  return (
    <motion.div
      variants={cardVariants}
      initial="rest"
      whileHover="hover"
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`relative h-full flex flex-col rounded-2xl overflow-hidden border ${isFeatured ? 'border-purple-300' : 'border-gray-200'} bg-white`}
    >
      {isFeatured && (
        <div className="absolute top-0 right-0 mt-4 -mr-10 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-10 py-1 text-sm font-bold transform rotate-45">
          <Star className="w-4 h-4 inline-block mr-1 -mt-1" />
          POPULAR
        </div>
      )}

      <div className={`p-6 bg-gradient-to-br ${color} text-white`}>
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-sm opacity-90 mt-1">{description}</p>
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <div className="flex-grow">
          <p className="text-gray-500 text-sm font-semibold mb-3">QUÉ INCLUYE:</p>
          <ul className="space-y-2 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-auto">
          <div className="text-center mb-4">
             <p className="text-xs text-gray-500">IDEAL PARA</p>
             <p className="font-semibold text-gray-800">{idealFor}</p>
          </div>
          <div className="text-center my-4">
            <span className="text-4xl font-extrabold text-gray-900">{price}</span>
            <span className="text-base font-medium text-gray-500">/ pase</span>
          </div>
          <div className="flex flex-col gap-3">
            <Button 
                size="lg" 
                className={cn('w-full text-white font-bold transition-transform duration-300 ease-out hover:scale-105', buttonColor)}
                onClick={handlePurchase}
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Comprar
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default VoucherCard;