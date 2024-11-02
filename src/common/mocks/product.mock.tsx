import { Product, ProductInfo } from '@/core/models';
import { ProductDTO } from '@/infra';

export const mockProduct: Product[] = [
  {
    id: 'SMG-S24U',
    brand: 'Samsung',
    name: 'Galaxy S24 Ultra',
    basePrice: 1329,
    imageUrl: 'http://prueba-tecnica-api-tienda-moviles.onrender.com/images/SMG-S24U-titanium-violet.png',
  },
  {
    id: 'SMG-A25',
    brand: 'Samsung',
    name: 'Galaxy A25 5G',
    basePrice: 239,
    imageUrl: 'http://prueba-tecnica-api-tienda-moviles.onrender.com/images/SMG-A25-negro.png',
  },
  {
    id: 'GPX-8A',
    brand: 'Google',
    name: 'Pixel 8a',
    basePrice: 459,
    imageUrl: 'http://prueba-tecnica-api-tienda-moviles.onrender.com/images/GPX-8A-obsidiana.png',
  },
  {
    id: 'APL-I15PM',
    brand: 'Apple',
    name: 'iPhone 15 Pro Max',
    basePrice: 1319,
    imageUrl: 'http://prueba-tecnica-api-tienda-moviles.onrender.com/images/APL-I15PM-titanio-negro.png',
  },
  {
    id: 'OPP-A18',
    brand: 'OPPO',
    name: 'A18',
    basePrice: 99,
    imageUrl: 'http://prueba-tecnica-api-tienda-moviles.onrender.com/images/OPP-A18-azul-brillante.png',
  },
  {
    id: 'XMI-RN13P5G',
    brand: 'Xiaomi',
    name: 'Redmi Note 13 Pro 5G',
    basePrice: 399,
    imageUrl: 'http://prueba-tecnica-api-tienda-moviles.onrender.com/images/XMI-RN13P5G-midnight-black.png',
  },
  {
    id: 'XMI-RN13P5G',
    brand: 'Xiaomi',
    name: 'Redmi Note 13 Pro 5G',
    basePrice: 399,
    imageUrl: 'http://prueba-tecnica-api-tienda-moviles.onrender.com/images/XMI-RN13P5G-midnight-black.png',
  },
  {
    id: 'APL-IP13-128',
    brand: 'Apple',
    name: 'iPhone 13',
    basePrice: 619,
    imageUrl: 'http://prueba-tecnica-api-tienda-moviles.onrender.com/images/APL-IP13-128-medianoche.png',
  },
  {
    id: 'OPP-R11F',
    brand: 'OPPO',
    name: 'Reno 11 F',
    basePrice: 269,
    imageUrl: 'http://prueba-tecnica-api-tienda-moviles.onrender.com/images/OPP-R11F-verde.png',
  },
  {
    id: 'XIA-RN13',
    brand: 'Xiaomi',
    name: 'Redmi Note 13',
    basePrice: 169,
    imageUrl: 'http://prueba-tecnica-api-tienda-moviles.onrender.com/images/XIA-RN13-mint-green.png',
  },
  {
    id: 'XMI-14',
    brand: 'Xiaomi',
    name: '14',
    basePrice: 899,
    imageUrl: 'http://prueba-tecnica-api-tienda-moviles.onrender.com/images/XMI-14-negro.png',
  },
  {
    id: 'SMG-A35',
    brand: 'Samsung',
    name: 'Galaxy A35 5G',
    basePrice: 333,
    imageUrl: 'http://prueba-tecnica-api-tienda-moviles.onrender.com/images/SMG-A35-light-blue.png',
  },
  {
    id: 'XMI-R13C',
    brand: 'Xiaomi',
    name: 'Redmi 13C',
    basePrice: 149,
    imageUrl: 'http://prueba-tecnica-api-tienda-moviles.onrender.com/images/XMI-R13C-navy-blue.png',
  },
  {
    id: 'XMI-13TPro',
    brand: 'XIAOMI',
    name: '13T Pro',
    basePrice: 553.31,
    imageUrl: 'http://prueba-tecnica-api-tienda-moviles.onrender.com/images/XMI-13TPro-negro.png',
  },
  {
    id: 'SMG-A05S',
    brand: 'Samsung',
    name: 'Galaxy A05s',
    basePrice: 119,
    imageUrl: 'http://prueba-tecnica-api-tienda-moviles.onrender.com/images/SMG-A05S-black.png',
  },
  {
    id: 'XIA-R12',
    brand: 'Xiaomi',
    name: 'Redmi 12',
    basePrice: 117.29,
    imageUrl: 'http://prueba-tecnica-api-tienda-moviles.onrender.com/images/XIA-R12-sky-blue.png',
  },
  {
    id: 'SMG-S23FE',
    brand: 'Samsung',
    name: 'Galaxy S23 FE',
    basePrice: 699,
    imageUrl: 'http://prueba-tecnica-api-tienda-moviles.onrender.com/images/SMG-S23FE-purple.png',
  },
  {
    id: 'MTE-EDGE50PRO',
    brand: 'Motorola',
    name: 'edge 50 Pro',
    basePrice: 649,
    imageUrl: 'http://prueba-tecnica-api-tienda-moviles.onrender.com/images/MTE-EDGE50PRO-negro.png',
  },
  {
    id: 'SNY-XPERIA1V',
    brand: 'SONY',
    name: 'Xperia 1 V',
    basePrice: 959.42,
    imageUrl: 'http://prueba-tecnica-api-tienda-moviles.onrender.com/images/SNY-XPERIA1V-negro.png',
  },
  {
    id: 'MTO-G24',
    brand: 'Motorola',
    name: 'g24',
    basePrice: 119,
    imageUrl: 'http://prueba-tecnica-api-tienda-moviles.onrender.com/images/MTO-G24-gris.png',
  },
  {
    id: 'SMG-A15',
    brand: 'Samsung',
    name: 'Galaxy A15 LTE',
    basePrice: 159,
    imageUrl: 'http://prueba-tecnica-api-tienda-moviles.onrender.com/images/SMG-A15-azul.png',
  },
  {
    id: 'OPP-A60',
    brand: 'OPPO',
    name: 'A60',
    basePrice: 179,
    imageUrl: 'http://prueba-tecnica-api-tienda-moviles.onrender.com/images/OPP-A60-midnight-purple.png',
  },
  {
    id: 'OPP-R12FS',
    brand: 'OPPO',
    name: 'Reno 12 FS 4G',
    basePrice: 299,
    imageUrl: 'http://prueba-tecnica-api-tienda-moviles.onrender.com/images/OPP-R12FS-amber-orange.png',
  },
  {
    id: 'RLM-NOTE50',
    brand: 'realme',
    name: 'Note 50',
    basePrice: 99,
    imageUrl: 'http://prueba-tecnica-api-tienda-moviles.onrender.com/images/RLM-NOTE50-midnight-black.png',
  },
];

export const mockProductInfo: ProductInfo = {
  id: 'OPP-A60',
  brand: 'OPPO',
  name: 'A60',
  description:
    'El OPPO A60 es un smartphone de gama media que ofrece una pantalla HD+ de 6.67 pulgadas con una frecuencia de actualización de 90 Hz, un potente procesador Qualcomm Snapdragon 680 4G, una generosa batería de 5000mAh con carga rápida de 45W, y corre Android. Con 8GB de RAM y 256GB de almacenamiento, este dispositivo proporciona un rendimiento fluido y espacio suficiente para todas tus aplicaciones y archivos. Además, cuenta con una cámara trasera dual de 50 MP y una cámara selfie de 8 MP, ofreciendo versatilidad fotográfica para capturar tus momentos especiales.',
  basePrice: 179,
  rating: 3,
  specs: {
    screen: '6.67"',
    resolution: 'HD+',
    processor: 'Qualcomm Snapdragon 680 4G',
    mainCamera: '50 MP f/1.8 + 2 MP Bokeh',
    selfieCamera: '8 MP f/2.0',
    battery: '5000mAh',
    os: 'Android',
    screenRefreshRate: '90 Hz',
  },
  colorOptions: [
    {
      name: 'Midnight Purple',
      hexCode: '#4B0082',
      imageUrl: 'http://prueba-tecnica-api-tienda-moviles.onrender.com/images/OPP-A60-midnight-purple.png',
    },
    {
      name: 'Ripple Blue',
      hexCode: '#4169E1',
      imageUrl: 'http://prueba-tecnica-api-tienda-moviles.onrender.com/images/OPP-A60-ripple-blue.png',
    },
  ],
  storageOptions: [
    {
      capacity: '256GB',
      price: 179,
    },
  ],
  similarProducts: [
    {
      id: 'SMG-A05S',
      brand: 'Samsung',
      name: 'Galaxy A05s',
      basePrice: 119,
      imageUrl: 'http://prueba-tecnica-api-tienda-moviles.onrender.com/images/SMG-A05S-black.png',
    },
    {
      id: 'SMG-A35',
      brand: 'Samsung',
      name: 'Galaxy A35 5G',
      basePrice: 333,
      imageUrl: 'http://prueba-tecnica-api-tienda-moviles.onrender.com/images/SMG-A35-light-blue.png',
    },
    {
      id: 'SNY-XPERIA1V',
      brand: 'SONY',
      name: 'Xperia 1 V',
      basePrice: 959.42,
      imageUrl: 'http://prueba-tecnica-api-tienda-moviles.onrender.com/images/SNY-XPERIA1V-negro.png',
    },
    {
      id: 'XMI-RN13P5G',
      brand: 'Xiaomi',
      name: 'Redmi Note 13 Pro 5G',
      basePrice: 399,
      imageUrl: 'http://prueba-tecnica-api-tienda-moviles.onrender.com/images/XMI-RN13P5G-midnight-black.png',
    },
    {
      id: 'APL-IP13-128',
      brand: 'Apple',
      name: 'iPhone 13',
      basePrice: 619,
      imageUrl: 'http://prueba-tecnica-api-tienda-moviles.onrender.com/images/APL-IP13-128-medianoche.png',
    },
    {
      id: 'SMG-S23FE',
      brand: 'Samsung',
      name: 'Galaxy S23 FE',
      basePrice: 699,
      imageUrl: 'http://prueba-tecnica-api-tienda-moviles.onrender.com/images/SMG-S23FE-purple.png',
    },
  ],
};
